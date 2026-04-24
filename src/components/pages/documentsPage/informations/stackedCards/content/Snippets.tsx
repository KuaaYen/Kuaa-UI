import { memo } from 'react';
import Snippet from '../../sharedComponent/snippets/Snippet';

const Snippets = () => {
    const installationSnippet = `
# This is made with motion/react, remember to install it first
npm install motion
`;


    const usageSnippet = `
// import StackedCards component, your path may be different
import StackedCards from './StackedCards';

// put your items in an array, or create a map function to generate items
const items = [
    <div key={0}>Card 1</div>,
    <div key={1}>Card 2</div>,
    <div key={2}>Card 3</div>,
    <div key={3}>Card 4</div>,
    <div key={4}>Card 5</div>,
];

export default function Example() {
    return (
        <StackedCards
            items={items}
            distanceThresholdRatio={0.3}
            velocityThreshold={0.6}
            snapDurationMs={500}
            rubberBandFactor={0.32}
            maxRubberPx={72}
            edgePeekPx={14}
            scatterXRangePx={6}
            scatterYRangePx={6}
            scatterRotateDeg={3}
            cardRadiusPx={16}
            seed={1}
        />
    );
}
`;

    const CompleteCodeSnippetTS = `
import { ReactNode, useEffect, useMemo, useRef, useState, PointerEvent as ReactPointerEvent } from 'react';
import { AnimatePresence, animate, motion, type MotionValue, useMotionValue, useSpring, useTransform } from 'motion/react';

export interface StackedCardsProps {
    items: ReactNode[];
    distanceThresholdRatio?: number;
    velocityThreshold?: number;
    snapDurationMs?: number;
    rubberBandFactor?: number;
    maxRubberPx?: number;
    onIndexChange?: (index: number) => void;
    edgePeekPx?: number;
    scatterXRangePx?: number;
    scatterYRangePx?: number;
    scatterRotateDeg?: number;
    seed?: number | string;
    cardRadiusPx?: number;
    className?: string;
    style?: React.CSSProperties;
}

type Sample = { t: number; clientX: number };

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const rubberOffset = (delta: number, factor: number, maxPx: number): number => {
    return Math.sign(delta) * Math.min(Math.abs(delta) * factor, maxPx);
};

const hashString = (s: string): number => {
    // FNV-1a 32-bit
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
};

const makeSeedNumber = (seed: number | string | undefined) => {
    if (typeof seed === 'number' && Number.isFinite(seed)) return seed >>> 0;
    if (typeof seed === 'string') return hashString(seed);
    return hashString('stacked-cards:default-seed:v1');
};

const mulberry32 = (a: number) => {
    return () => {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

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
    swapStartProgress: number;
    denomRef: React.MutableRefObject<number>;
}) => {
    const w = Math.max(1, cardWidth);

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

    const xMv = useTransform(dragX, (v: number) => {
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

            if (pNext > 0 && pNext >= pPrev) return lerp(v, towardLeftBack, pNext);
            if (pPrev > 0) return lerp(v, towardRightBack, pPrev);
            return v;
        }

        if (slotId === 1) {
            const from = base.x;
            const to = 0;
            return lerp(from, to, tNext);
        }

        if (slotId === -1) {
            const from = base.x;
            const to = 0;
            return lerp(from, to, tPrev);
        }

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

    const opacityMv = useTransform(dragX, () => base.opacity);

    const zIndexMv = useTransform(dragX, (v: number) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);

        const baseZ =
            slotId === 0
                ? 100
                : slotId > 0
                  ? 90 - slotId
                  : 80 + slotId;

        if (slotId === 0) return baseZ - Math.round(Math.max(pNext, pPrev) * 25);
        if (slotId === 1) return baseZ + Math.round(tNext * 25);
        if (slotId === -1) return baseZ + Math.round(tPrev * 25);
        return baseZ;
    });

    const xSmooth = useSpring(xMv, { stiffness: 260, damping: 34, mass: 0.9 });
    const ySmooth = useSpring(yMv, { stiffness: 260, damping: 34, mass: 0.9 });
    const rotateSmooth = useSpring(rotateMv, { stiffness: 240, damping: 30, mass: 0.9 });
    const scaleSmooth = useSpring(scaleMv, { stiffness: 260, damping: 34, mass: 0.9 });

    return (
        <motion.div
            className={\`stacked-cards-card \${slotId === 0 ? 'is-top' : ''}\`}
            style={{
                zIndex: zIndexMv,
                borderRadius: \`var(--stacked-card-radius)\`,
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
            <div className="stacked-cards-card-inner">{items[itemIndex]}</div>
        </motion.div>
    );
};

const StackedCards = ({
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
}: StackedCardsProps) => {
    const n = items.length;
    const containerRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const indexRef = useRef(0);
    const animatingRef = useRef(false);

    const x = useMotionValue(0);
    const denomRef = useRef(0);

    const activePointerIdRef = useRef<number | null>(null);
    const draggingRef = useRef(false);
    const pointerStartXRef = useRef(0);
    const translateAtPointerDownRef = useRef(0);
    const samplesRef = useRef<Sample[]>([]);

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

    useEffect(() => {
        if (n === 0) return;
        setIndex((prev) => {
            const next = Math.min(prev, n - 1);
            indexRef.current = next;
            return next;
        });
    }, [n]);

    const seedNum = useMemo(() => makeSeedNumber(seed), [seed]);

    const leftDepth = Math.min(4, index);
    const rightDepth = Math.min(5, n - index);
    const swapStartProgress = 0.35;

    const getItemIndexForSlot = (slotId: SlotId) => {
        const i = index + slotId;
        if (i < 0 || i >= n) return null;
        return i;
    };

    const pushSample = (clientX: number) => {
        const t = performance.now();
        const arr = samplesRef.current;
        arr.push({ t, clientX });
        const cutoff = t - 120;
        while (arr.length > 1 && arr[0].t < cutoff) arr.shift();
    };

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

    const applyRubber = (raw: number) => {
        if (n <= 1) return raw;
        const atFirst = indexRef.current === 0;
        const atLast = indexRef.current === n - 1;
        if (atFirst && raw > 0) return rubberOffset(raw, rubberBandFactor, maxRubberPx);
        if (atLast && raw < 0) return rubberOffset(raw, rubberBandFactor, maxRubberPx);
        return raw;
    };

    const snapToZero = () => {
        return animate(x, 0, {
            duration: snapDurationMs / 1000,
            ease: [0.22, 1, 0.36, 1],
        }).finished;
    };

    const settleTo = async (direction: 'next' | 'prev') => {
        if (animatingRef.current) return;
        if (n <= 1) return;
        if (direction === 'next' && !canGoNext) return;
        if (direction === 'prev' && !canGoPrev) return;

        animatingRef.current = true;

        const w = Math.max(1, cardWidth);
        const denom = Math.max(1, denomRef.current || w * 0.9);
        const sign = direction === 'next' ? -1 : 1;

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

    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;
        if (activePointerIdRef.current !== e.pointerId) return;
        pushSample(e.clientX);
        const delta = e.clientX - pointerStartXRef.current;
        const raw = translateAtPointerDownRef.current + delta;
        x.set(applyRubber(raw));
    };

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

    const baseRight: SlotId[] = [0, 1, 2, 3, 4].slice(0, Math.max(1, Math.min(rightDepth, 5))) as SlotId[];
    const left: SlotId[] = [];
    for (let d = 1; d <= leftDepth; d++) {
        left.unshift((-d) as SlotId);
    }
    const slotIds: SlotId[] = [...left, ...baseRight];

    return (
        <div
            ref={containerRef}
            className={\`stacked-cards \${className}\`.trim()}
            style={{ ...style, ['--stacked-card-radius' as never]: \`\${cardRadiusPx}px\` }}
        >
            <div
                className="stacked-cards-viewport"
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
                                    key={\`card-\${itemIndex}\`}
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

export default StackedCards;
`;

    const CompleteCodeSnippetJS = `
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const lerp = (a, b, t) => a + (b - a) * t;

const rubberOffset = (delta, factor, maxPx) => {
    return Math.sign(delta) * Math.min(Math.abs(delta) * factor, maxPx);
};

const hashString = (s) => {
    // FNV-1a 32-bit
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
};

const makeSeedNumber = (seed) => {
    if (typeof seed === 'number' && Number.isFinite(seed)) return seed >>> 0;
    if (typeof seed === 'string') return hashString(seed);
    return hashString('stacked-cards:default-seed:v1');
};

const mulberry32 = (a) => {
    return () => {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

const scatterForIndex = (
    seedNum,
    itemIndex,
    xRange,
    yRange,
    rotateRangeDeg
) => {
    const rand = mulberry32((seedNum ^ (itemIndex * 0x9e3779b9)) >>> 0);
    const r = (min, max) => min + (max - min) * rand();
    return {
        x: r(-xRange, xRange),
        y: r(-yRange, yRange),
        rotate: r(-rotateRangeDeg, rotateRangeDeg),
    };
};


const computeBasePose = ({
    slotId,
    edgePeekPx,
    seedNum,
    itemIndex,
    scatterXRangePx,
    scatterYRangePx,
    scatterRotateDeg,
}) => {
    const scatter = scatterForIndex(seedNum, itemIndex, scatterXRangePx, scatterYRangePx, scatterRotateDeg);

    if (slotId < 0) {
        const d = Math.abs(slotId);
        return {
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
}) => {
    const w = Math.max(1, cardWidth);

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

    const xMv = useTransform(dragX, (v) => {
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

            if (pNext > 0 && pNext >= pPrev) return lerp(v, towardLeftBack, pNext);
            if (pPrev > 0) return lerp(v, towardRightBack, pPrev);
            return v;
        }

        if (slotId === 1) {
            const from = base.x;
            const to = 0;
            return lerp(from, to, tNext);
        }

        if (slotId === -1) {
            const from = base.x;
            const to = 0;
            return lerp(from, to, tPrev);
        }

        const from = base.x;
        const forwardTo =
            slotId > 1
                ? computeBasePose({
                      slotId: slotId - 1,
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
                      slotId: slotId + 1,
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

    const yMv = useTransform(dragX, (v) => {
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
                      slotId: slotId - 1,
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
                      slotId: slotId + 1,
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

    const rotateMv = useTransform(dragX, (v) => {
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
                      slotId: slotId - 1,
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
                      slotId: slotId + 1,
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

    const scaleMv = useTransform(dragX, (v) => {
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
                      slotId: slotId - 1,
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
                      slotId: slotId + 1,
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

    const opacityMv = useTransform(dragX, () => base.opacity);

    const zIndexMv = useTransform(dragX, (v) => {
        const denom = getDenom();
        const pNext = clamp(-v / denom, 0, 1);
        const pPrev = clamp(v / denom, 0, 1);
        const tNext = clamp((pNext - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);
        const tPrev = clamp((pPrev - swapStartProgress) / Math.max(1e-6, 1 - swapStartProgress), 0, 1);

        const baseZ =
            slotId === 0
                ? 100
                : slotId > 0
                  ? 90 - slotId
                  : 80 + slotId;

        if (slotId === 0) return baseZ - Math.round(Math.max(pNext, pPrev) * 25);
        if (slotId === 1) return baseZ + Math.round(tNext * 25);
        if (slotId === -1) return baseZ + Math.round(tPrev * 25);
        return baseZ;
    });

    const xSmooth = useSpring(xMv, { stiffness: 260, damping: 34, mass: 0.9 });
    const ySmooth = useSpring(yMv, { stiffness: 260, damping: 34, mass: 0.9 });
    const rotateSmooth = useSpring(rotateMv, { stiffness: 240, damping: 30, mass: 0.9 });
    const scaleSmooth = useSpring(scaleMv, { stiffness: 260, damping: 34, mass: 0.9 });

    return (
        <motion.div
            className={\`stacked-cards-card \${slotId === 0 ? 'is-top' : ''}\`}
            style={{
                zIndex: zIndexMv,
                borderRadius: \`var(--stacked-card-radius)\`,
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
            <div className="stacked-cards-card-inner">{items[itemIndex]}</div>
        </motion.div>
    );
};

const StackedCards = ({
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
}) => {
    const n = items.length;
    const containerRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const indexRef = useRef(0);
    const animatingRef = useRef(false);

    const x = useMotionValue(0);
    const denomRef = useRef(0);

    const activePointerIdRef = useRef(null);
    const draggingRef = useRef(false);
    const pointerStartXRef = useRef(0);
    const translateAtPointerDownRef = useRef(0);
    const samplesRef = useRef([]);

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

    useEffect(() => {
        if (n === 0) return;
        setIndex((prev) => {
            const next = Math.min(prev, n - 1);
            indexRef.current = next;
            return next;
        });
    }, [n]);

    const seedNum = useMemo(() => makeSeedNumber(seed), [seed]);

    const leftDepth = Math.min(4, index);
    const rightDepth = Math.min(5, n - index);
    const swapStartProgress = 0.35;

    const getItemIndexForSlot = (slotId) => {
        const i = index + slotId;
        if (i < 0 || i >= n) return null;
        return i;
    };

    const pushSample = (clientX) => {
        const t = performance.now();
        const arr = samplesRef.current;
        arr.push({ t, clientX });
        const cutoff = t - 120;
        while (arr.length > 1 && arr[0].t < cutoff) arr.shift();
    };

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

    const applyRubber = (raw) => {
        if (n <= 1) return raw;
        const atFirst = indexRef.current === 0;
        const atLast = indexRef.current === n - 1;
        if (atFirst && raw > 0) return rubberOffset(raw, rubberBandFactor, maxRubberPx);
        if (atLast && raw < 0) return rubberOffset(raw, rubberBandFactor, maxRubberPx);
        return raw;
    };

    const snapToZero = () => {
        return animate(x, 0, {
            duration: snapDurationMs / 1000,
            ease: [0.22, 1, 0.36, 1],
        }).finished;
    };

    const settleTo = async (direction) => {
        if (animatingRef.current) return;
        if (n <= 1) return;
        if (direction === 'next' && !canGoNext) return;
        if (direction === 'prev' && !canGoPrev) return;

        animatingRef.current = true;

        const w = Math.max(1, cardWidth);
        const denom = Math.max(1, denomRef.current || w * 0.9);
        const sign = direction === 'next' ? -1 : 1;

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

    const onPointerDown = (e) => {
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

    const onPointerMove = (e) => {
        if (!draggingRef.current) return;
        if (activePointerIdRef.current !== e.pointerId) return;
        pushSample(e.clientX);
        const delta = e.clientX - pointerStartXRef.current;
        const raw = translateAtPointerDownRef.current + delta;
        x.set(applyRubber(raw));
    };

    const endDrag = (e) => {
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

    const baseRight = [0, 1, 2, 3, 4].slice(0, Math.max(1, Math.min(rightDepth, 5)));
    const left = [];
    for (let d = 1; d <= leftDepth; d++) {
        left.unshift(-d);
    }
    const slotIds = [...left, ...baseRight];

    return (
        <div
            ref={containerRef}
            className={\`stacked-cards \${className}\`.trim()}
            style={{ ...style, ['--stacked-card-radius']: \`\${cardRadiusPx}px\` }}
        >
            <div
                className="stacked-cards-viewport"
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
                                    key={\`card-\${itemIndex}\`}
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

export default StackedCards;
`;

    const cssSnippet = `
.stacked-cards {
    position: relative;
    width: min(520px, 88vw);
    aspect-ratio: 3 / 4;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
}

.stacked-cards-viewport {
    position: relative;
    width: 100%;
    height: 100%;
    touch-action: pan-y;
    cursor: grab;
}

.stacked-cards-viewport:active {
    cursor: grabbing;
}

.stacked-cards-card {
    position: absolute;
    inset: 0;
    background: var(--basic-white);
    overflow: hidden;
    box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.25);
    transform-origin: 50% 70%;
    will-change: transform;
}

.stacked-cards-card-inner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    overflow: hidden;
}
`;

    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="tsx" delay={900} />
            <Snippet title="Code" snippet={CompleteCodeSnippetTS} language="tsx" delay={1700} toggleSnippet={CompleteCodeSnippetJS} />
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={2100} />
        </div>
    );
};

export default memo(Snippets);

