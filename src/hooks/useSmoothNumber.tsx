import { useState, useEffect } from "react";

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
    const [currentValue, setCurrentValue] = useState(0);
    useEffect(() => {
        if (shouldAnimate) {
            const startTime = Date.now();
            
            let animationId: number;
            let lastUpdateTime = 0;
            
            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                if(progress === 1) {
                    setCurrentValue(endValue);
                    return;
                }

                // 時間節流：只在指定間隔後才更新數值
                if (now - lastUpdateTime >= updateInterval) {
                    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
                    const easedProgress = easeOutCubic(progress);
                    
                    const newValue = Math.floor(
                        startValue + (endValue - startValue) * easedProgress
                    );
                    
                    setCurrentValue(newValue);
                    lastUpdateTime = now;
                }
                
                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                }
            };

            if(delay > 0) {
                setTimeout(() => {
                    animationId = requestAnimationFrame(animate);
                }, delay);
            } else {    
                animationId = requestAnimationFrame(animate);
            }
            
            return () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            };
        }
    }, [shouldAnimate, startValue, endValue, duration, updateInterval, delay]);


    return { currentValue, setCurrentValue };

};

export default useSmoothNumber;