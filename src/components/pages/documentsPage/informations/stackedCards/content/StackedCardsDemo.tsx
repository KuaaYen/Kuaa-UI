import { ReactNode, useEffect, useMemo, useRef, useState, PointerEvent as ReactPointerEvent } from 'react';
import { AnimatePresence, animate, motion, type MotionValue, useMotionValue, useSpring, useTransform } from 'motion/react';

export interface StackedCardsDemoProps {
    items: ReactNode[];
    /** Drag distance threshold as a ratio of card width. */
    distanceThresholdRatio?: number;
    /** Pointer velocity threshold in px/ms (same unit as SwipeSlider). */
    velocityThreshold?: number;
    /** Snap animation duration in milliseconds. */
    snapDurationMs?: number;
    /** Rubber-band factor when loop=false at edges. */
    rubberBandFactor?: number;
    /** Maximum rubber-band stretch in pixels at the edges. */
    maxRubberPx?: number;
    onIndexChange?: (index: number) => void;
    /** Base x offset per stacked card so edges peek on the right. */
    edgePeekPx?: number;
    /** Random-ish horizontal scatter range (px). */
    scatterXRangePx?: number;
    /** Random-ish vertical scatter range (px). */
    scatterYRangePx?: number;
    /** Random-ish rotate range (deg). */
    scatterRotateDeg?: number;
    /** Deterministic seed to keep scatter stable across re-renders. */
    seed?: number | string;
    cardRadiusPx?: number;
    className?: string;
    style?: React.CSSProperties;
}

type Sample = { t: number; clientX: number };

/** 將數值限制在區間內，避免動畫插值超出預期範圍。 */
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
/** 線性插值：t=0 回傳 a，t=1 回傳 b，用於把卡片逐步補位到目標姿態。 */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * 橡皮筋位移：
 * - 用 factor 抵抗拉伸（越小越「硬」）
 * - 用 maxPx 限制最大拉伸量，避免拖到太誇張
 */
const rubberOffset = (delta: number, factor: number, maxPx: number): number => {
    return Math.sign(delta) * Math.min(Math.abs(delta) * factor, maxPx);
};

/** 將字串轉成穩定的 32-bit seed（FNV-1a），用來做 deterministic scatter（避免 re-render 抖動）。 */
const hashString = (s: string): number => {
    // FNV-1a 32-bit
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
};

/**
 * 把外部 seed 正規化成 number：
 * - number：直接用
 * - string：hash 後用
 * - undefined：使用固定預設 seed（不綁 items 長度），避免 items 變動造成整套隨性外觀改變
 */
const makeSeedNumber = (seed: number | string | undefined) => {
    if (typeof seed === 'number' && Number.isFinite(seed)) return seed >>> 0;
    if (typeof seed === 'string') return hashString(seed);
    return hashString('stacked-cards:default-seed:v1');
};

/**
 * 小型、快速的 PRNG（mulberry32）。
 * 給定同樣的 seed 會產生同樣的隨機序列，適合用來生成「看起來隨性」但可重現的散佈值。
 */
const mulberry32 = (a: number) => {
    return () => {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

/**
 * 依 itemIndex 生成該卡片的隨性散佈（x/y/rotate）。
 * 只跟 seed + itemIndex 有關，讓同一張卡在不同 slot 間移動時仍保持一致的「個性」。
 */
const scatterForIndex = (
    seedNum: number,
    itemIndex: number,
    xRange: number,
    yRange: number,
    rotateRangeDeg: number
) => {
    const rand = mulberry32((seedNum ^ (itemIndex * 0x9e3779b9)) >>> 0);
    const r = (min: number, max: number) => min + (max - min) * rand();
    return {
        x: r(-xRange, xRange),
        y: r(-yRange, yRange),
        rotate: r(-rotateRangeDeg, rotateRangeDeg),
    };
};

type SlotId = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;

type BasePose = { x: number; y: number; rotate: number; scale: number; opacity: number };

/**
 * 計算「某張卡在某個 slot 的靜態目標姿態」（不含拖曳插值）。
 * slot 的意義：
 * - 0：正中央最前
 * - 1..4：右側後方堆疊（下一張們）
 * - -1..-4：左側後方堆疊（上一張們）
 */
const computeBasePose = ({
    slotId,
    edgePeekPx,
    seedNum,
    itemIndex,
    scatterXRangePx,
    scatterYRangePx,
    scatterRotateDeg,
}: {
    slotId: SlotId;
    edgePeekPx: number;
    seedNum: number;
    itemIndex: number;
    scatterXRangePx: number;
    scatterYRangePx: number;
    scatterRotateDeg: number;
}): BasePose => {
    const scatter = scatterForIndex(seedNum, itemIndex, scatterXRangePx, scatterYRangePx, scatterRotateDeg);

    if (slotId < 0) {
        const d = Math.abs(slotId);
        return {
            // left stack (previous cards), slightly deeper and more tilted than right stack
            x: -(d * edgePeekPx * 1.05) + scatter.x,
            y: d * 6 + scatter.y,
            rotate: scatter.rotate - d * 1.6,
            scale: 1 - d * 0.035,
            opacity: 1,
        };
    }

    const d = slotId;
    return {
        x: d * edgePeekPx + scatter.x,
        y: d * 2 + scatter.y,
        rotate: scatter.rotate,
        scale: 1 - d * 0.03,
        opacity: 1,
    };
};

/**
 * 單一張卡的渲染單元（slotId 代表它在堆疊中的相對位置）。
 * 核心工作：
 * - 把 dragX 轉成該張卡的 x/y/rotate/scale/zIndex
 * - 在拖曳過程中做 slot 間補位（下一張/上一張逐步往中央）
 * - 用 spring 平滑 slot 切換後的 pose 跳動（避免歸位後突然轉角/跳位置）
 */
const CardSlot = ({
    slotId,
    itemIndex,
    items,
    dragX,
    cardWidth,
    edgePeekPx,
    seedNum,
    scatterXRangePx,
    scatterYRangePx,
    scatterRotateDeg,
    swapStartProgress,
    denomRef,
}: {
    slotId: SlotId;
    itemIndex: number;
    items: ReactNode[];
    dragX: MotionValue<number>;
    cardWidth: number;
    edgePeekPx: number;
    seedNum: number;
    scatterXRangePx: number;
    scatterYRangePx: number;
    scatterRotateDeg: number;
    /** How far the drag must progress before cards start swapping forward. (0..1) */
    swapStartProgress: number;
    /** Locked denominator (px) during drag to avoid snap mismatch. */
    denomRef: React.MutableRefObject<number>;
}) => {
    const w = Math.max(1, cardWidth);

    /**
     * 取得 denom（拖曳進度的分母，px）：
     * - pointerDown 時會鎖定 denomRef，避免「拖到最左」與「放開 settle」落點不一致
     * - 若尚未鎖定則使用 w*0.9
     */
    const getDenom = () => Math.max(1, denomRef.current || w * 0.9);

    const base = useMemo(
        () =>
            computeBasePose({
                slotId,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }),
        [edgePeekPx, itemIndex, scatterRotateDeg, scatterXRangePx, scatterYRangePx, seedNum, slotId]
    );

    /**
     * x 座標插值（最核心的「補位」邏輯）：
     * - drag-left（v<0）= 下一張：slot1 逐步往中央，slot0 逐步退到左後方
     * - drag-right（v>0）= 上一張：slot-1 逐步往中央，slot0 逐步退到右後方
     * - swapStartProgress：延遲補位開始，避免背後卡片一開始就衝到前面
     */
    const xMv = useTransform(dragX, (v: number) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);

        if (slotId === 0) {
            // current card follows pointer, but settles into a back slot depending on direction.
            const towardRightBack = computeBasePose({
                slotId: 1,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }).x;
            const towardLeftBack = computeBasePose({
                slotId: -1,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }).x;

            // When dragging left (next), ease the card toward left-back so it never flies off-screen.
            // When dragging right (prev), ease toward right-back.
            if (pNext > 0 && pNext >= pPrev) return lerp(v, towardLeftBack, pNext);
            if (pPrev > 0) return lerp(v, towardRightBack, pPrev);
            return v;
        }

        if (slotId === 1) {
            // next card moves from back-right to center when pulling next
            const from = base.x;
            const to = 0;
            return lerp(from, to, tNext);
        }

        if (slotId === -1) {
            // previous card comes from hidden-left to center when pulling previous
            const from = base.x;
            const to = 0;
            return lerp(from, to, tPrev);
        }

        // Other back cards shift forward by one when pulling next, and shift backward by one when pulling previous.
        const from = base.x;
        const forwardTo =
            slotId > 1
                ? computeBasePose({
                      slotId: (slotId - 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).x
                : from;
        const backwardTo =
            slotId >= 1
                ? computeBasePose({
                      slotId: (slotId + 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).x
                : from;

        const shiftedNext = lerp(from, forwardTo, tNext);
        const shiftedPrev = lerp(from, backwardTo, tPrev);
        return pNext >= pPrev ? shiftedNext : shiftedPrev;
    });

    /** y 座標插值：拖曳時加一些 lift，並讓補位時的上下位移跟著進度變化。 */
    const yMv = useTransform(dragX, (v: number) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);

        if (slotId === 0) {
            const towardRightBack = computeBasePose({
                slotId: 1,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }).y;
            const towardLeftBack = computeBasePose({
                slotId: -1,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }).y;
            const lift = -clamp(Math.abs(v) / w, 0, 1) * 10;
            if (pNext > 0 && pNext >= pPrev) return lerp(0, towardLeftBack, pNext) + lift;
            if (pPrev > 0) return lerp(0, towardRightBack, pPrev) + lift;
            return lift;
        }
        if (slotId === 1) return lerp(base.y, 0, tNext);
        if (slotId === -1) return lerp(base.y, 0, tPrev);

        const forwardTo =
            slotId > 1
                ? computeBasePose({
                      slotId: (slotId - 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).y
                : base.y;
        const backwardTo =
            slotId >= 1
                ? computeBasePose({
                      slotId: (slotId + 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).y
                : base.y;

        const shiftedNext = lerp(base.y, forwardTo, tNext);
        const shiftedPrev = lerp(base.y, backwardTo, tPrev);
        return pNext >= pPrev ? shiftedNext : shiftedPrev;
    });

    /** rotate 插值：拖曳時加 wobble；補位到中央時逐步回到更「正」的角度。 */
    const rotateMv = useTransform(dragX, (v: number) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);

        if (slotId === 0) {
            const wobble = clamp(v / w, -1, 1) * 8;
            const towardRightBack = computeBasePose({
                slotId: 1,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }).rotate;
            const towardLeftBack = computeBasePose({
                slotId: -1,
                edgePeekPx,
                seedNum,
                itemIndex,
                scatterXRangePx,
                scatterYRangePx,
                scatterRotateDeg,
            }).rotate;
            if (pNext > 0 && pNext >= pPrev) return lerp(wobble, towardLeftBack, pNext);
            if (pPrev > 0) return lerp(wobble, towardRightBack, pPrev);
            return wobble;
        }
        if (slotId === 1) return lerp(base.rotate, 0, tNext);
        if (slotId === -1) return lerp(base.rotate, 0, tPrev);

        const forwardTo =
            slotId > 1
                ? computeBasePose({
                      slotId: (slotId - 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).rotate
                : base.rotate;
        const backwardTo =
            slotId >= 1
                ? computeBasePose({
                      slotId: (slotId + 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).rotate
                : base.rotate;

        const shiftedNext = lerp(base.rotate, forwardTo, tNext);
        const shiftedPrev = lerp(base.rotate, backwardTo, tPrev);
        return pNext >= pPrev ? shiftedNext : shiftedPrev;
    });

    /** scale 插值：前景卡拖曳時略縮；即將上前的卡逐步放大到 1。 */
    const scaleMv = useTransform(dragX, (v: number) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        if (slotId === 0) return lerp(1, 0.92, Math.max(pNext, pPrev));
        if (slotId === 1) return lerp(base.scale, 1, tNext);
        if (slotId === -1) return lerp(base.scale, 1, tPrev);

        const forwardTo =
            slotId > 1
                ? computeBasePose({
                      slotId: (slotId - 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).scale
                : base.scale;
        const backwardTo =
            slotId >= 1
                ? computeBasePose({
                      slotId: (slotId + 1) as SlotId,
                      edgePeekPx,
                      seedNum,
                      itemIndex,
                      scatterXRangePx,
                      scatterYRangePx,
                      scatterRotateDeg,
                  }).scale
                : base.scale;
        const shiftedNext = lerp(base.scale, forwardTo, tNext);
        const shiftedPrev = lerp(base.scale, backwardTo, tPrev);
        return pNext >= pPrev ? shiftedNext : shiftedPrev;
    });

    /** opacity：常態固定；進出場淡出/淡入交由 AnimatePresence + exit/initial/animate 控制。 */
    const opacityMv = useTransform(dragX, () => base.opacity);

    /**
     * zIndex 插值：
     * - baseZ：確保左側順序永遠正確（-1 在 -2 前面，-2 在 -3 前面...）
     * - 拖曳時：即將上前的卡（slot1 或 slot-1）逐步抬升 zIndex
     */
    const zIndexMv = useTransform(dragX, (v: number) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);

        // Base layering:
        // - slot 0 is always top-most at rest
        // - right stack (1..4) sits behind progressively
        // - left stack (-1..-4) also sits behind progressively, and must preserve order (-1 above -2 above -3 above -4)
        const baseZ =
            slotId === 0
                ? 100
                : slotId > 0
                  ? 90 - slotId
                  : 80 + slotId; // -1:79, -2:78, -3:77, -4:76

        if (slotId === 0) return baseZ - Math.round(Math.max(pNext, pPrev) * 25);
        if (slotId === 1) return baseZ + Math.round(tNext * 25);
        if (slotId === -1) return baseZ + Math.round(tPrev * 25);
        return baseZ;
    });

    /**
     * slot 切換（settle 後 index 變更）會讓 base pose 改變。
     * 若直接使用 transform 的輸出，dragX 歸零瞬間會跳 pose（你之前看到的「突然瞬間轉動」）。
     * 用 spring 做平滑，讓 pose 變更自然過渡。
     */
    const xSmooth = useSpring(xMv, { stiffness: 260, damping: 34, mass: 0.9 });
    const ySmooth = useSpring(yMv, { stiffness: 260, damping: 34, mass: 0.9 });
    const rotateSmooth = useSpring(rotateMv, { stiffness: 240, damping: 30, mass: 0.9 });
    const scaleSmooth = useSpring(scaleMv, { stiffness: 260, damping: 34, mass: 0.9 });

    return (
        <motion.div
            className={`stacked-cards-demo-card ${slotId === 0 ? 'is-top' : ''}`}
            style={{
                zIndex: zIndexMv,
                borderRadius: `var(--stacked-card-radius)`,
                x: xSmooth,
                y: ySmooth,
                rotate: rotateSmooth,
                scale: scaleSmooth,
                opacity: opacityMv,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.45, opacity: { duration: 0.22 } }}
        >
            <div className="stacked-cards-demo-card-inner">{items[itemIndex]}</div>
        </motion.div>
    );
};

const StackedCardsDemo = ({
    items,
    distanceThresholdRatio = 0.3,
    velocityThreshold = 0.6,
    snapDurationMs = 500,
    rubberBandFactor = 0.32,
    maxRubberPx = 72,
    onIndexChange,
    edgePeekPx = 14,
    scatterXRangePx = 6,
    scatterYRangePx = 6,
    scatterRotateDeg = 3,
    seed,
    cardRadiusPx = 16,
    className = '',
    style,
}: StackedCardsDemoProps) => {
    const n = items.length;
    const containerRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const indexRef = useRef(0);
    const animatingRef = useRef(false);

    /** 追蹤拖曳位移（px），所有卡片的補位與手勢判斷都以它為依據。 */
    const x = useMotionValue(0);
    /** 在 pointerDown 鎖定 denom（px），確保拖曳極限位置與放開 settle 的目標一致。 */
    const denomRef = useRef(0);

    const activePointerIdRef = useRef<number | null>(null);
    const draggingRef = useRef(false);
    const pointerStartXRef = useRef(0);
    const translateAtPointerDownRef = useRef(0);
    const samplesRef = useRef<Sample[]>([]);

    /**
     * 量測容器寬度（cardWidth）：
     * - 換頁距離門檻：distanceThresholdRatio * cardWidth
     * - 進度分母 denom：cardWidth * 0.9（並在 pointerDown 鎖定）
     */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const measure = () => {
            const w = el.clientWidth;
            if (w > 0) setCardWidth(w);
        };

        measure();

        if (typeof ResizeObserver === 'undefined') return;
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    /**
     * items 數量改變時：
     * - 確保 index 不超界
     * - 同步更新 indexRef（拖曳與邊界判斷用 ref 避免閉包落後）
     */
    useEffect(() => {
        if (n === 0) return;
        setIndex((prev) => {
            const next = Math.min(prev, n - 1);
            indexRef.current = next;
            return next;
        });
    }, [n]);

    /** 把 seed 正規化成 number，供 scatter（隨性偏移/角度）使用。 */
    const seedNum = useMemo(() => makeSeedNumber(seed), [seed]);

    /** 左側固定最多 4 張（上一張們），且不超過 index。 */
    const leftDepth = Math.min(4, index); // keep up to 4 previous cards visible
    /** 右側固定最多 5 張（含中央）。 */
    const rightDepth = Math.min(5, n - index); // include current + next cards, up to 5 total on the right
    /** 延遲背後卡片開始補位的進度（0..1），讓「拖曳要更長才換位」的手感更自然。 */
    const swapStartProgress = 0.35; // delay swapping so the back card doesn't rush to front

    /** 將 slotId 對應到 items 的 index；超出範圍回傳 null（不渲染）。 */
    const getItemIndexForSlot = (slotId: SlotId) => {
        const i = index + slotId;
        if (i < 0 || i >= n) return null;
        return i;
    };

    /** 推入最近 120ms 的取樣點，用於估算 flick 速度（px/ms）。 */
    const pushSample = (clientX: number) => {
        const t = performance.now();
        const arr = samplesRef.current;
        arr.push({ t, clientX });
        const cutoff = t - 120;
        while (arr.length > 1 && arr[0].t < cutoff) arr.shift();
    };

    /** 根據取樣點估算水平速度（px/ms）。 */
    const getVelocity = () => {
        const arr = samplesRef.current;
        if (arr.length < 2) return 0;
        const first = arr[0];
        const last = arr[arr.length - 1];
        const dt = last.t - first.t;
        if (dt <= 0) return 0;
        return (last.clientX - first.clientX) / dt;
    };

    const canGoPrev = indexRef.current > 0;
    const canGoNext = indexRef.current < n - 1;

    /**
     * 橡皮筋（rubberband）：
     * - 第一張往右拖（想去上一張）只能拉伸回彈
     * - 最後一張往左拖（想去下一張）只能拉伸回彈
     */
    const applyRubber = (raw: number) => {
        if (n <= 1) return raw;
        const atFirst = indexRef.current === 0;
        const atLast = indexRef.current === n - 1;
        // New rule: drag left (x < 0) => next, drag right (x > 0) => previous
        if (atFirst && raw > 0) return rubberOffset(raw, rubberBandFactor, maxRubberPx);
        if (atLast && raw < 0) return rubberOffset(raw, rubberBandFactor, maxRubberPx);
        return raw;
    };

    /** 未達換頁門檻時回彈到 0（保持目前卡在中央）。 */
    const snapToZero = () => {
        return animate(x, 0, {
            duration: snapDurationMs / 1000,
            ease: [0.22, 1, 0.36, 1],
        }).finished;
    };

    /**
     * 觸發換頁後的 settle：
     * 1) 先把 dragX snap 到 ±denom（完成換位的終點）
     * 2) 更新 index（讓 slot 對應到新的卡片）
     * 3) dragX 重置回 0，準備下一次拖曳
     */
    const settleTo = async (direction: 'next' | 'prev') => {
        if (animatingRef.current) return;
        if (n <= 1) return;
        if (direction === 'next' && !canGoNext) return;
        if (direction === 'prev' && !canGoPrev) return;

        animatingRef.current = true;

        const w = Math.max(1, cardWidth);
        const denom = Math.max(1, denomRef.current || w * 0.9);
        const sign = direction === 'next' ? -1 : 1;

        // Snap to fully committed pose, then update index, then reset drag to 0.
        await animate(x, sign * denom, {
            duration: Math.min(0.22, snapDurationMs / 1000),
            ease: [0.22, 1, 0.36, 1],
        }).finished;

        const nextIndex = direction === 'next' ? indexRef.current + 1 : indexRef.current - 1;
        indexRef.current = nextIndex;
        setIndex(nextIndex);
        onIndexChange?.(nextIndex);

        x.set(0);
        denomRef.current = 0;
        animatingRef.current = false;
    };

    /**
     * pointerDown：
     * - 記錄指標起點
     * - 鎖定 denom（避免拖曳極限位置與放開 settle 不一致）
     * - 初始化 flick 速度取樣
     * - pointer capture：避免拖曳時出界中斷
     */
    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (n <= 1) return;
        if (animatingRef.current) return;
        draggingRef.current = true;
        activePointerIdRef.current = e.pointerId;
        pointerStartXRef.current = e.clientX;
        translateAtPointerDownRef.current = x.get();
        denomRef.current = Math.max(1, cardWidth * 0.9);
        samplesRef.current = [{ t: performance.now(), clientX: e.clientX }];
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    /** pointerMove：更新取樣 + 計算 raw 位移 + 套用 rubberband 後寫入 motion value。 */
    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;
        if (activePointerIdRef.current !== e.pointerId) return;
        pushSample(e.clientX);
        const delta = e.clientX - pointerStartXRef.current;
        const raw = translateAtPointerDownRef.current + delta;
        x.set(applyRubber(raw));
    };

    /**
     * pointerUp / cancel：
     * - 用距離門檻或速度門檻判斷是否換頁
     * - 未達門檻：回彈並釋放 denom 鎖定
     * - 達門檻：呼叫 settleTo 完成換頁
     */
    const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;
        if (activePointerIdRef.current !== e.pointerId) return;

        draggingRef.current = false;
        activePointerIdRef.current = null;
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            /* ignore */
        }

        if (n <= 1) return;

        const delta = x.get();
        const w = Math.max(1, cardWidth);
        const v = getVelocity();

        const distCommit = Math.abs(delta) >= distanceThresholdRatio * w;
        const velCommit = Math.abs(v) >= velocityThreshold;

        if (!(distCommit || velCommit)) {
            void snapToZero();
            denomRef.current = 0;
            return;
        }

        // New rule: drag left => next, drag right => previous
        const direction = delta <= 0 ? 'next' : 'prev';
        if (direction === 'next' && !canGoNext) {
            void snapToZero();
            denomRef.current = 0;
            return;
        }
        if (direction === 'prev' && !canGoPrev) {
            void snapToZero();
            denomRef.current = 0;
            return;
        }

        void settleTo(direction);
    };

    if (n === 0) return null;

    /** 右側 slot（含中央） */
    const baseRight: SlotId[] = [0, 1, 2, 3, 4].slice(0, Math.max(1, Math.min(rightDepth, 5))) as SlotId[];
    /** 左側 slot（上一張們） */
    const left: SlotId[] = [];
    for (let d = 1; d <= leftDepth; d++) {
        left.unshift((-d) as SlotId);
    }
    const slotIds: SlotId[] = [...left, ...baseRight];

    return (
        <div
            ref={containerRef}
            className={`stacked-cards-demo ${className}`.trim()}
            style={{ ...style, ['--stacked-card-radius' as never]: `${cardRadiusPx}px` }}
        >
            <div
                className="stacked-cards-demo-viewport"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
            >
                <AnimatePresence initial={false}>
                    {slotIds
                        .slice()
                        .reverse()
                        .map((slotId) => {
                            const itemIndex = getItemIndexForSlot(slotId);
                            if (itemIndex === null) return null;
                            return (
                                <CardSlot
                                    key={`card-${itemIndex}`}
                                    slotId={slotId}
                                    itemIndex={itemIndex}
                                    items={items}
                                    dragX={x}
                                    cardWidth={cardWidth}
                                    edgePeekPx={edgePeekPx}
                                    seedNum={seedNum}
                                    scatterXRangePx={scatterXRangePx}
                                    scatterYRangePx={scatterYRangePx}
                                    scatterRotateDeg={scatterRotateDeg}
                                    swapStartProgress={swapStartProgress}
                                    denomRef={denomRef}
                                />
                            );
                        })}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StackedCardsDemo;

