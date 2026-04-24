import Snippet from '../../sharedComponent/snippets/Snippet';
import { memo } from 'react';

const Snippets = () => {
    const installationSnippet = `
    # This is made with motion/react, remember to install it first
    npm install motion
    `;

    const usageSnippet = `
    // Import SwipeSlider component, your path may be different
    import SwipeSlider from './SwipeSlider';

    const items = [
        <div key={0}>Slide 1</div>,
        <div key={1}>Slide 2</div>,
        <div key={2}>Slide 3</div>,
    ];

    <SwipeSlider
        items={items}
        width={600}
        aspectRatio={16 / 9}
        dotColor="#E07A5F"
        loop={false}
        itemWidthRatio={0.85}
        gap={12}
        rubberBandFactor={0.32}
        maxRubberPx={72}
        distanceThreshold={0.22}
        velocityThreshold={0.35}
        snapDurationMs={280}
        showNavButtons={true}
        showIndicator={true}
    />
 `;

    const CompleteCodeSnippetTS = `
import { ReactNode, useRef, useState, useEffect, PointerEvent as ReactPointerEvent } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

export interface SwipeSliderProps {
    items: ReactNode[];
    width?: number | string;
    aspectRatio?: number | string;
    dotColor?: string;
    loop?: boolean;
    itemWidthRatio?: number;
    gap?: number;
    rubberBandFactor?: number;
    maxRubberPx?: number;
    distanceThreshold?: number;
    velocityThreshold?: number;
    snapDurationMs?: number;
    showNavButtons?: boolean;
    showIndicator?: boolean;
    className?: string;
}

type Sample = { t: number; clientX: number };

const rubberOffset = (delta: number, factor: number, maxPx: number): number => {
    const resisted = Math.sign(delta) * Math.min(Math.abs(delta) * factor, maxPx);
    return resisted;
};

const SwipeSlider = ({
    items,
    width = 600,
    aspectRatio = 16 / 9,
    dotColor = '#E07A5F',
    loop = false,
    itemWidthRatio = 1,
    gap = 12,
    rubberBandFactor = 0.32,
    maxRubberPx = 72,
    distanceThreshold = 0.22,
    velocityThreshold = 0.35,
    snapDurationMs = 500,
    showNavButtons = true,
    showIndicator = true,
    className = '',
}: SwipeSliderProps) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [index, setIndex] = useState(0);
    const [layout, setLayout] = useState({ slideWidth: 0, step: 0 });

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

    useEffect(() => {
        if (layout.step <= 0) return;
        x.set(-indexRef.current * layout.step);
    }, [layout.step, layout.slideWidth, x]);

    useEffect(() => {
        if (n === 0) return;
        setIndex((i) => {
            const next = Math.min(i, n - 1);
            indexRef.current = next;
            return next;
        });
    }, [n]);

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

    const pushSample = (clientX: number) => {
        const t = performance.now();
        const arr = samplesRef.current;
        arr.push({ t, clientX });
        const cutoff = t - 120;
        while (arr.length > 1 && arr[0].t < cutoff) {
            arr.shift();
        }
    };

    const getVelocity = (): number => {
        const arr = samplesRef.current;
        if (arr.length < 2) return 0;
        const first = arr[0];
        const last = arr[arr.length - 1];
        const dt = last.t - first.t;
        if (dt <= 0) return 0;
        return (last.clientX - first.clientX) / dt;
    };

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

    const goNext = () => {
        if (n <= 1 || layout.step <= 0) return;
        const i = indexRef.current;
        if (loop) {
            snapToIndex((i + 1) % n);
        } else if (i < n - 1) {
            snapToIndex(i + 1);
        }
    };

    const goPrev = () => {
        if (n <= 1 || layout.step <= 0) return;
        const i = indexRef.current;
        if (loop) {
            snapToIndex((i - 1 + n) % n);
        } else if (i > 0) {
            snapToIndex(i - 1);
        }
    };

    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (n <= 1 || layout.step <= 0) return;
        draggingRef.current = true;
        activePointerIdRef.current = e.pointerId;
        pointerStartXRef.current = e.clientX;
        translateAtPointerDownRef.current = x.get();
        samplesRef.current = [{ t: performance.now(), clientX: e.clientX }];
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current || activePointerIdRef.current !== e.pointerId) return;
        pushSample(e.clientX);
        const pointerDelta = e.clientX - pointerStartXRef.current;
        const raw = translateAtPointerDownRef.current + pointerDelta;
        x.set(applyRubberToTranslate(raw, indexRef.current));
    };

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
        <div
            className={\`swipe-slider \${className}\`.trim()}
            style={{ width: width, aspectRatio: aspectRatio }}
        >
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
                        gap: \`\${gap}px\`,
                    }}
                >
                    {items.map((child, i) => (
                        <div
                            key={i}
                            className="swipe-slider-item"
                            style={{
                                width:
                                    layout.slideWidth > 0
                                        ? \`\${layout.slideWidth}px\`
                                        : \`\${itemWidthRatio * 100}%\`,
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>

            {showNavButtons && (
                <>
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
                </>
            )}
            {showIndicator && (
                <div className="swipe-slider-indicator-container">
                    {items.map((_, itemIndex) => {
                        const isActive = itemIndex === index;
                        return (
                            <motion.button
                                key={\`indicator-\${itemIndex}\`}
                                type="button"
                                className="swipe-slider-indicator-button"
                                aria-label={\`Go to slide \${itemIndex + 1}\`}
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
            )}
        </div>
    );
};

export default SwipeSlider;
    `;

    const CompleteCodeSnippetJS = `
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

const rubberOffset = (delta, factor, maxPx) => {
    const resisted = Math.sign(delta) * Math.min(Math.abs(delta) * factor, maxPx);
    return resisted;
};

const SwipeSlider = ({
    items,
    width = 600,
    aspectRatio = 16 / 9,
    dotColor = '#E07A5F',
    loop = false,
    itemWidthRatio = 1,
    gap = 12,
    rubberBandFactor = 0.32,
    maxRubberPx = 72,
    distanceThreshold = 0.22,
    velocityThreshold = 0.35,
    snapDurationMs = 500,
    showNavButtons = true,
    showIndicator = true,
    className = '',
}) => {
    const viewportRef = useRef(null);
    const x = useMotionValue(0);
    const [index, setIndex] = useState(0);
    const [layout, setLayout] = useState({ slideWidth: 0, step: 0 });

    const indexRef = useRef(0);
    const draggingRef = useRef(false);
    const pointerStartXRef = useRef(0);
    const translateAtPointerDownRef = useRef(0);
    const activePointerIdRef = useRef(null);
    const samplesRef = useRef([]);
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

    useEffect(() => {
        if (layout.step <= 0) return;
        x.set(-indexRef.current * layout.step);
    }, [layout.step, layout.slideWidth, x]);

    useEffect(() => {
        if (n === 0) return;
        setIndex((i) => {
            const next = Math.min(i, n - 1);
            indexRef.current = next;
            return next;
        });
    }, [n]);

    const applyRubberToTranslate = (rawTranslate, currentIndex) => {
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

    const pushSample = (clientX) => {
        const t = performance.now();
        const arr = samplesRef.current;
        arr.push({ t, clientX });
        const cutoff = t - 120;
        while (arr.length > 1 && arr[0].t < cutoff) {
            arr.shift();
        }
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

    const snapToIndex = (nextIndex) => {
        if (layout.step <= 0) return;
        const clamped = Math.max(0, Math.min(n - 1, nextIndex));
        indexRef.current = clamped;
        setIndex(clamped);
        animate(x, -clamped * layout.step, {
            duration: snapDurationMs / 1000,
            ease: [0.22, 1, 0.36, 1],
        });
    };

    const goNext = () => {
        if (n <= 1 || layout.step <= 0) return;
        const i = indexRef.current;
        if (loop) {
            snapToIndex((i + 1) % n);
        } else if (i < n - 1) {
            snapToIndex(i + 1);
        }
    };

    const goPrev = () => {
        if (n <= 1 || layout.step <= 0) return;
        const i = indexRef.current;
        if (loop) {
            snapToIndex((i - 1 + n) % n);
        } else if (i > 0) {
            snapToIndex(i - 1);
        }
    };

    const onPointerDown = (e) => {
        if (n <= 1 || layout.step <= 0) return;
        draggingRef.current = true;
        activePointerIdRef.current = e.pointerId;
        pointerStartXRef.current = e.clientX;
        translateAtPointerDownRef.current = x.get();
        samplesRef.current = [{ t: performance.now(), clientX: e.clientX }];
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (!draggingRef.current || activePointerIdRef.current !== e.pointerId) return;
        pushSample(e.clientX);
        const pointerDelta = e.clientX - pointerStartXRef.current;
        const raw = translateAtPointerDownRef.current + pointerDelta;
        x.set(applyRubberToTranslate(raw, indexRef.current));
    };

    const endDrag = (e) => {
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
        <div
            className={\`swipe-slider \${className}\`.trim()}
            style={{ width: width, aspectRatio: aspectRatio }}
        >
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
                        gap: \`\${gap}px\`,
                    }}
                >
                    {items.map((child, i) => (
                        <div
                            key={i}
                            className="swipe-slider-item"
                            style={{
                                width:
                                    layout.slideWidth > 0
                                        ? \`\${layout.slideWidth}px\`
                                        : \`\${itemWidthRatio * 100}%\`,
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>

            {showNavButtons && (
                <>
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
                </>
            )}
            {showIndicator && (
                <div className="swipe-slider-indicator-container">
                    {items.map((_, itemIndex) => {
                        const isActive = itemIndex === index;
                        return (
                            <motion.button
                                key={\`indicator-\${itemIndex}\`}
                                type="button"
                                className="swipe-slider-indicator-button"
                                aria-label={\`Go to slide \${itemIndex + 1}\`}
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
            )}
        </div>
    );
};

export default SwipeSlider;
    `;

    const cssSnippet = `
.swipe-slider {
    position: relative;
    width: 600px;
    aspect-ratio: 16/9;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-user-select: none;
}

.swipe-slider-viewport {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.75rem;
    touch-action: pan-y;
    cursor: grab;
}

.swipe-slider-viewport:active {
    cursor: grabbing;
}

.swipe-slider-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    will-change: transform;
}

.swipe-slider-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: var(--basic-white);
    color: var(--basic-purple);
    border-radius: 0.75rem;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

.swipe-slider-nav {
    position: absolute;
    top: 50%;
    width: 2.5rem;
    aspect-ratio: 1;
    border: none;
    border-radius: 50%;
    padding: 0;
    color: var(--basic-purple);
    background-color: rgba(255, 255, 255, 0.92);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 2;
    cursor: pointer;
    transform: translateY(-50%);
    -webkit-tap-highlight-color: transparent;
}

.swipe-slider-nav:disabled {
    opacity: 0.35;
    cursor: not-allowed;
}

.swipe-slider-nav--left {
    left: 0.5rem;
}

.swipe-slider-nav--right {
    right: 0.5rem;
}

.swipe-slider-nav-icon {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swipe-slider-nav-icon--left {
    transform: rotate(180deg);
}

.swipe-slider-nav svg {
    width: 55%;
    height: 55%;
}

.swipe-slider-indicator-container {
    position: absolute;
    left: 50%;
    bottom: 0.65rem;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    z-index: 3;
}

.swipe-slider-indicator-button {
    border: none;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    padding: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
    `;

    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="jsx" delay={1000} />
            <Snippet title="Code" snippet={CompleteCodeSnippetTS} language="jsx" delay={1500} toggleSnippet={CompleteCodeSnippetJS}/>
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={1800} />
        </div>
    );
};

export default memo(Snippets);