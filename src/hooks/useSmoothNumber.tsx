import { useState, useRef } from "react";
import { useAnimationFrame } from "motion/react";

interface useSmoothNumberProps {
    // 起始數字
    startValue: number;
    // 結束數字
    endValue: number;
    // 動畫總時長
    duration: number;
    // 更新間隔 (throttle)
    updateInterval: number;
    // 延遲
    delay?: number;
}

const useSmoothNumber = (
    shouldAnimate: boolean,
    options?: useSmoothNumberProps
) => {
    const { startValue = 0, endValue = 100, duration = 2000, updateInterval = 100, delay = 0 } = options || {};
    const [currentValue, setCurrentValue] = useState(startValue);
    const lastUpdateTime = useRef(0);
    const animationStartTime = useRef<number | null>(null);
    const previousShouldAnimate = useRef(shouldAnimate);

    useAnimationFrame((time) => {
        // 當 shouldAnimate 從 false 變成 true 時，重置動畫開始時間
        if (shouldAnimate && !previousShouldAnimate.current) {
            animationStartTime.current = time + delay; // 加上延遲
            setCurrentValue(startValue);
        }
        previousShouldAnimate.current = shouldAnimate;

        if (!shouldAnimate) {
            setCurrentValue(startValue);
            animationStartTime.current = null;
            return;
        }

        // 如果還沒到動畫開始時間（延遲期間）
        if (animationStartTime.current === null || time < animationStartTime.current) {
            return;
        }

        // 節流控制
        if (time - lastUpdateTime.current < updateInterval) {
            return;
        }

        // 計算從動畫開始的相對時間
        const elapsed = time - animationStartTime.current;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);

        if (progress >= 1) {
            setCurrentValue(endValue);
            return;
        }

        const newValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
        setCurrentValue(newValue);

        lastUpdateTime.current = time;
    });

    return { currentValue, setCurrentValue };
};

export default useSmoothNumber;