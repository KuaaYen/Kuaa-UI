import { ReactNode, useRef, useState, useEffect, PointerEvent as ReactPointerEvent } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import '../SwipeSlider.css';

export interface SwipeSliderDemoProps {
    items: ReactNode[];
    dotColor?: string;
    loop?: boolean;
    itemWidthRatio?: number;
    gap?: number;
    rubberBandFactor?: number;
    maxRubberPx?: number;
    distanceThreshold?: number;
    velocityThreshold?: number;
    /** Snap animation duration in milliseconds */
    snapDurationMs?: number;
    className?: string;
}

type Sample = { t: number; clientX: number };

const rubberOffset = (delta: number, factor: number, maxPx: number): number => {
    const resisted = Math.sign(delta) * Math.min(Math.abs(delta) * factor, maxPx);
    return resisted;
};

const SwipeSliderDemo = ({
    items,
    dotColor = '#E07A5F',
    loop = false,
    itemWidthRatio = 1,
    gap = 12,
    rubberBandFactor = 0.32,
    maxRubberPx = 72,
    distanceThreshold = 0.22,
    velocityThreshold = 0.35,
    snapDurationMs = 500,
    className = '',
}: SwipeSliderDemoProps) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [index, setIndex] = useState(0);
    const [layout, setLayout] = useState({ slideWidth: 0, step: 0 });

    // 確保 index 和 layout 的同步，不依賴 index 在 effect 中，否則在 slide 變化時會沒有動畫
    const indexRef = useRef(0);
    const draggingRef = useRef(false);
    const pointerStartXRef = useRef(0);
    const translateAtPointerDownRef = useRef(0);
    const activePointerIdRef = useRef<number | null>(null);
    const samplesRef = useRef<Sample[]>([]);
    const [isLeftButtonHovered, setIsLeftButtonHovered] = useState(false);
    const [isRightButtonHovered, setIsRightButtonHovered] = useState(false);

    const n = items.length;
    const navButtonVariants = {
        initial: { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.92)', y: '-50%' },
        hover: { scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 1)', y: '-50%' },
        tap: { scale: 0.92, backgroundColor: 'rgba(255, 255, 255, 1)', y: '-50%' },
    };
    const navIconVariants = {
        initial: { stroke: 'rgba(61, 64, 91, 0.55)' },
        active: { stroke: 'rgba(61, 64, 91, 1)' },
    };

    // 測量 viewport 的寬度，當 viewport 的寬度變化時，重新計算 slideWidth 和 step
    useEffect(() => {
        const el = viewportRef.current;
        if (!el) return;

        const measure = () => {
            const w = el.clientWidth;
            if (w <= 0) return;
            const slideWidth = w * itemWidthRatio;
            setLayout({ slideWidth, step: slideWidth + gap });
        };

        measure();

        if (typeof ResizeObserver === 'undefined') return;
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, [itemWidthRatio, gap]);

    // 當 layout 的 step 或 slideWidth 變化時，更新軌道的位置
    useEffect(() => {
        if (layout.step <= 0) return;
        x.set(-indexRef.current * layout.step);
    }, [layout.step, layout.slideWidth, x]);

    // 當 items 的數量變化時，確保 index 不超過 items 的數量
    useEffect(() => {
        if (n === 0) return;
        setIndex((i) => {
            const next = Math.min(i, n - 1);
            indexRef.current = next;
            return next;
        });
    }, [n]);

    // 應用橡皮筋效果
    const applyRubberToTranslate = (rawTranslate: number, currentIndex: number): number => {
        if (loop || n <= 1) return rawTranslate;
        const base = -currentIndex * layout.step;
        const d = rawTranslate - base;
        if (currentIndex === 0 && d > 0) {
            return base + rubberOffset(d, rubberBandFactor, maxRubberPx);
        }
        if (currentIndex === n - 1 && d < 0) {
            return base + rubberOffset(d, rubberBandFactor, maxRubberPx);
        }
        return rawTranslate;
    };

    // 推入樣本，並刪除過時的樣本
    const pushSample = (clientX: number) => {
        const t = performance.now();
        const arr = samplesRef.current;
        arr.push({ t, clientX });
        const cutoff = t - 120;
        while (arr.length > 1 && arr[0].t < cutoff) {
            arr.shift();
        }
    };

    // 計算速度
    const getVelocity = (): number => {
        const arr = samplesRef.current;
        if (arr.length < 2) return 0;
        const first = arr[0];
        const last = arr[arr.length - 1];
        const dt = last.t - first.t;
        if (dt <= 0) return 0;
        return (last.clientX - first.clientX) / dt;
    };

    // 跳轉到指定索引
    const snapToIndex = (nextIndex: number) => {
        if (layout.step <= 0) return;
        const clamped = Math.max(0, Math.min(n - 1, nextIndex));
        indexRef.current = clamped;
        setIndex(clamped);
        animate(x, -clamped * layout.step, {
            duration: snapDurationMs / 1000,
            ease: [0.22, 1, 0.36, 1],
        });
    };

    // 跳轉到下一個
    const goNext = () => {
        if (n <= 1 || layout.step <= 0) return;
        const i = indexRef.current;
        if (loop) {
            snapToIndex((i + 1) % n);
        } else if (i < n - 1) {
            snapToIndex(i + 1);
        }
    };

    // 跳轉到上一個
    const goPrev = () => {
        if (n <= 1 || layout.step <= 0) return;
        const i = indexRef.current;
        if (loop) {
            snapToIndex((i - 1 + n) % n);
        } else if (i > 0) {
            snapToIndex(i - 1);
        }
    };

    // 當 pointer down 時，設置相關狀態
    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (n <= 1 || layout.step <= 0) return;
        draggingRef.current = true;
        activePointerIdRef.current = e.pointerId;
        pointerStartXRef.current = e.clientX;
        translateAtPointerDownRef.current = x.get();
        samplesRef.current = [{ t: performance.now(), clientX: e.clientX }];
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    // 當 pointer move 時，計算位移
    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current || activePointerIdRef.current !== e.pointerId) return;
        pushSample(e.clientX);
        const pointerDelta = e.clientX - pointerStartXRef.current;
        const raw = translateAtPointerDownRef.current + pointerDelta;
        x.set(applyRubberToTranslate(raw, indexRef.current));
    };

    // 當 pointer up 或 cancel 時，計算位移
    const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current || activePointerIdRef.current !== e.pointerId) return;
        draggingRef.current = false;
        activePointerIdRef.current = null;
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            /* ignore */
        }

        if (n <= 1 || layout.step <= 0) return;

        const pointerDelta = e.clientX - pointerStartXRef.current;
        const slideWidth = layout.slideWidth;
        const v = getVelocity();

        const distNext = pointerDelta <= -distanceThreshold * slideWidth;
        const distPrev = pointerDelta >= distanceThreshold * slideWidth;
        const velNext = v <= -velocityThreshold;
        const velPrev = v >= velocityThreshold;

        let targetIndex = indexRef.current;

        const canGoNext = loop || indexRef.current < n - 1;
        const canGoPrev = loop || indexRef.current > 0;

        if (canGoPrev && distPrev) {
            targetIndex = loop ? (indexRef.current - 1 + n) % n : indexRef.current - 1;
        } else if (canGoNext && distNext) {
            targetIndex = loop ? (indexRef.current + 1) % n : indexRef.current + 1;
        } else if (canGoPrev && velPrev) {
            targetIndex = loop ? (indexRef.current - 1 + n) % n : indexRef.current - 1;
        } else if (canGoNext && velNext) {
            targetIndex = loop ? (indexRef.current + 1) % n : indexRef.current + 1;
        }

        snapToIndex(targetIndex);
    };

    const canPrev = loop || index > 0;
    const canNext = loop || index < n - 1;

    if (n === 0) {
        return null;
    }

    return (
        <div className={`swipe-slider ${className}`.trim()}>
            <div
                ref={viewportRef}
                className="swipe-slider-viewport"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
            >
                <motion.div
                    className="swipe-slider-track"
                    style={{
                        x,
                        gap: `${gap}px`,
                    }}
                >
                    {items.map((child, i) => (
                        <div
                            key={i}
                            className="swipe-slider-item"
                            style={{
                                width:
                                    layout.slideWidth > 0
                                        ? `${layout.slideWidth}px`
                                        : `${itemWidthRatio * 100}%`,
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.button
                type="button"
                className="swipe-slider-nav swipe-slider-nav--left"
                aria-label="Previous slide"
                disabled={!canPrev || n <= 1}
                onClick={goPrev}
                onMouseEnter={() => setIsLeftButtonHovered(true)}
                onMouseLeave={() => setIsLeftButtonHovered(false)}
                variants={navButtonVariants}
                initial="initial"
                whileHover={!(!canPrev || n <= 1) ? 'hover' : 'initial'}
                whileTap={!(!canPrev || n <= 1) ? 'tap' : 'initial'}
                transition={{ type: 'spring', bounce: 0, duration: 0.25 }}
            >
                <span className="swipe-slider-nav-icon swipe-slider-nav-icon--left">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M 20 50 L 80 50 M 55 25 L 80 50 L 55 75"
                            fill="transparent"
                            stroke="rgba(61, 64, 91, 0.55)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={navIconVariants}
                            initial="initial"
                            animate={isLeftButtonHovered && canPrev ? 'active' : 'initial'}
                        />
                    </svg>
                </span>
            </motion.button>
            <motion.button
                type="button"
                className="swipe-slider-nav swipe-slider-nav--right"
                aria-label="Next slide"
                disabled={!canNext || n <= 1}
                onClick={goNext}
                onMouseEnter={() => setIsRightButtonHovered(true)}
                onMouseLeave={() => setIsRightButtonHovered(false)}
                variants={navButtonVariants}
                initial="initial"
                whileHover={!(!canNext || n <= 1) ? 'hover' : 'initial'}
                whileTap={!(!canNext || n <= 1) ? 'tap' : 'initial'}
                transition={{ type: 'spring', bounce: 0, duration: 0.25 }}
            >
                <span className="swipe-slider-nav-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M 20 50 L 80 50 M 55 25 L 80 50 L 55 75"
                            fill="transparent"
                            stroke="rgba(61, 64, 91, 0.55)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={navIconVariants}
                            initial="initial"
                            animate={isRightButtonHovered && canNext ? 'active' : 'initial'}
                        />
                    </svg>
                </span>
            </motion.button>
            <div className="swipe-slider-indicator-container">
                {items.map((_, itemIndex) => {
                    const isActive = itemIndex === index;
                    return (
                        <motion.button
                            key={`indicator-${itemIndex}`}
                            type="button"
                            className="swipe-slider-indicator-button"
                            aria-label={`Go to slide ${itemIndex + 1}`}
                            onClick={() => snapToIndex(itemIndex)}
                            animate={{
                                width: isActive ? 18 : 10,
                                opacity: isActive ? 1 : 0.5,
                                backgroundColor: isActive ? dotColor : 'rgba(145, 145, 145, 0.3)',
                            }}
                            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SwipeSliderDemo;
