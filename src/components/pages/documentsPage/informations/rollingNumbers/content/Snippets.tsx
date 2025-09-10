import Snippet from "../../sharedComponent/snippets/Snippet";

const Snippets = () => {
    const installationSnippet = `
    # This is made with motion/react, remember to install it first
    npm install motion/react
    `


    const usageSnippet = `
    // Import RollingNumbers component, your path may be different
    import { RollingNumbers } from './RollingNumbers';

    // How to use the custom hook, thie is not mandatory
    const smoothValue = useSmoothNumber(true, {
        startValue: 0,
        endValue: 7777,
        duration: 1000,
        updateInterval: 100, // strongly recommend to set this above 100 and below duration
    });


    // Use the RollingNumbers component
    <RollingNumbers 
        // every prop is optional
        value={smoothValue} // or any number you want
        prefix={prefix}
        suffix={suffix}
        gap={gap}
        direction={direction}
    />
    `

    const CompleteCodeSnippet = `
import {motion, AnimatePresence} from "motion/react";
import { useRef } from "react";

const RollingNumbers = ({
    value = 0, 
    suffix, 
    prefix, 
    gap = 0.2,
    direction = 'up'
}: {
    value?: number,
    suffix?: string,
    prefix?: string,
    gap?: number,
    direction?: 'up' | 'down'
}) => {

    const positionAnimationIds = useRef<{[position: number]: number}>({});
    const previousValue = useRef(value);

    const createSeperatedNumbers = (value: number) => {
        const valueString = value.toString();
        const previousValueString = previousValue.current.toString();
        
        const seperatedNumbers = valueString.split('').map((char, index) => {
            const charPosition = valueString.length - index - 1;
            
            const previousCharPosition = previousValueString.length - index - 1;
            const previousChar = previousCharPosition >= 0 ? 
                previousValueString[previousValueString.length - 1 - charPosition] : 
                undefined;
            
            if (previousChar !== char || previousChar === undefined) {
                if (!positionAnimationIds.current[charPosition]) {
                    positionAnimationIds.current[charPosition] = 0;
                }
                positionAnimationIds.current[charPosition] += 1;
            }
            
            if (!positionAnimationIds.current[charPosition]) {
                positionAnimationIds.current[charPosition] = 0;
            }
            
            return (
                <motion.span
                    key={\`\${positionAnimationIds.current[charPosition]}-pos-\${charPosition}-\${char}\`}
                    className="rolling-numbers-value"
                    initial={{
                        y: direction === 'up' ? '1.6em' : '-1.6em',
                    }}
                    animate={{
                        y: '0em',
                    }}
                    exit={{
                        y: direction === 'up' ? '-1.6em' : '1.6em',
                    }}
                    transition={{
                        type: 'spring',
                        duration: 0.7,
                        bounce: 0,
                    }}
                >
                    {char}
                </motion.span>                
            )
        });
        
        previousValue.current = value;
        
        return seperatedNumbers;
    }
    
    const getValueWidth = (value: number) => {
        const valueLength = value.toString().length;
        return \`\${valueLength}ch\`;
    }

    const valueWidth = getValueWidth(value);

    return (
        <div className="rolling-numbers-container">
            <div 
                className="rolling-numbers"
                style={{gap: \`\${gap}em\`}}
            >
                {prefix && (
                    <div>{prefix}</div>
                )}
                <motion.div 
                    className="rolling-numbers-value-wrapper"
                    style={{width: valueWidth}}
                    animate={{width: valueWidth}}
                    transition={{type: 'spring', duration: 0.2, bounce: 0}}
                >
                    <AnimatePresence mode="popLayout">
                        {createSeperatedNumbers(value)}
                    </AnimatePresence>
                </motion.div>
                {suffix && (
                    <div>{suffix}</div>
                )}
            </div>
        </div>
    )
}

export default RollingNumbers;
    `
    const cssSnippet = `
.rolling-numbers-container {
    position: relative;
    display: inline-block;
}

.rolling-numbers {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
    transition: all 0.2s ease-in-out;
}

.rolling-numbers-value-wrapper {
    position: relative;
    display: flex;
}

.rolling-numbers-value{
    display: block;
}
    `

const hookSnippet = `
//This is a custom hook that returns interpolated values between current and target numbers according to animation configs

import { useState, useRef, useEffect } from "react";
import { useAnimationFrame } from "motion/react";

interface useSmoothNumberProps {
    // start value
    startValue: number;
    // end value
    endValue: number;
    // animation duration
    duration: number;
    // update interval (throttle)
    updateInterval: number;
    // delay after shouldAnimate is true (in milliseconds)
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
    
    const previousEndValue = useRef(endValue);
    const animationStartValue = useRef(startValue);

    useEffect(() => {
        if (previousEndValue.current !== endValue && shouldAnimate) {
            animationStartValue.current = currentValue;
            animationStartTime.current = null;
            previousShouldAnimate.current = false;
        }
        previousEndValue.current = endValue;
    }, [endValue, shouldAnimate, currentValue]);

    useAnimationFrame((time) => {
        if (shouldAnimate && !previousShouldAnimate.current) {
            animationStartTime.current = time + delay;
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

        if (animationStartTime.current === null || time < animationStartTime.current) {
            return;
        }

        if (time - lastUpdateTime.current < updateInterval) {
            return;
        }

        const elapsed = time - animationStartTime.current;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);

        if (progress >= 1) {
            setCurrentValue(endValue);
            return;
        }

        const currentStartValue = animationStartValue.current || startValue;
        const rawValue = currentStartValue + (endValue - currentStartValue) * easedProgress;
        
        const threshold = Math.abs(endValue - currentStartValue) * 0.01;
        const minThreshold = 0.5;
        const actualThreshold = Math.max(threshold, minThreshold);
        
        if (Math.abs(rawValue - endValue) <= actualThreshold) {
            setCurrentValue(endValue);
            return;
        }
        
        const newValue = Math.round(rawValue);
        setCurrentValue(newValue);

        lastUpdateTime.current = time;
    });
    return currentValue;
};

export default useSmoothNumber;
`;


    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="jsx" delay={1000} />
            <Snippet title="Code" snippet={CompleteCodeSnippet} language="jsx" delay={1500} />
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={1800} />
            <Snippet title="Hook" snippet={hookSnippet} language="jsx" delay={2100} id="rolling-numbers-hook" />
        </div>
    )
}

export default Snippets;