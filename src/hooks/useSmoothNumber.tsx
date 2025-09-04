import { useState, useRef, useEffect } from "react";
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
    shouldAnimate: boolean = true,
    options?: useSmoothNumberProps
) => {
    const { startValue = 0, endValue = 100, duration = 2000, updateInterval = 100, delay = 0 } = options || {};
    const [currentValue, setCurrentValue] = useState(startValue);
    const lastUpdateTime = useRef(0);
    const animationStartTime = useRef<number | null>(null);
    const previousShouldAnimate = useRef(false);
    
    // 新增：追踪 endValue 變化
    const previousEndValue = useRef(endValue);
    const animationStartValue = useRef(startValue); // 動畫真正的起始值

    // 新增：檢測 endValue 變化
    useEffect(() => {
        if (previousEndValue.current !== endValue && shouldAnimate) {
            // endValue 改變了，從當前值開始新的動畫
            animationStartValue.current = currentValue;
            animationStartTime.current = null; // 重置動畫時間，下一幀會重新開始
            previousShouldAnimate.current = false; // 觸發動畫重新開始
        }
        previousEndValue.current = endValue;
    }, [endValue, shouldAnimate, currentValue]);

    useAnimationFrame((time) => {
        // 當 shouldAnimate 從 false 變成 true 時，或 endValue 改變時，重置動畫開始時間
        if (shouldAnimate && !previousShouldAnimate.current) {
            animationStartTime.current = time + delay;
            // 如果是首次啟動，使用 startValue；如果是 endValue 變化，使用當前值
            if (animationStartValue.current === undefined) {
                animationStartValue.current = startValue;
                setCurrentValue(startValue);
            }
        }
        previousShouldAnimate.current = shouldAnimate;

        if (!shouldAnimate) {
            setCurrentValue(animationStartValue.current || startValue);
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

        // 使用動態起始值計算新值
        const currentStartValue = animationStartValue.current || startValue;
        const newValue = Math.floor(currentStartValue + (endValue - currentStartValue) * easedProgress);
        setCurrentValue(newValue);

        lastUpdateTime.current = time;
    });

    return currentValue;
};

export default useSmoothNumber;