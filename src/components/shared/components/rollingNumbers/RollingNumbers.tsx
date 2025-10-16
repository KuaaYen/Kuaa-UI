import {motion, AnimatePresence} from "motion/react";
import { useRef } from "react";

interface RollingNumbersProps {
    value?: number;
    suffix?: string;
    prefix?: string;
    gap?: number;
    direction?: 'up' | 'down';
}

const RollingNumbers = ({
    value = 0, 
    suffix, 
    prefix, 
    gap = 0.2,
    direction = 'up'
}: RollingNumbersProps) => {

    // 追蹤每個位置的動畫 ID
    const positionAnimationIds = useRef<{[position: number]: number}>({});
    const previousValue = useRef(value);

    const createSeperatedNumbers = (value: number) => {
        const valueString = value.toString();
        const previousValueString = previousValue.current.toString();
        
        const seperatedNumbers = valueString.split('').map((char, index) => {
            const charPosition = valueString.length - index - 1;
            
            // 取得前一個值在相同位置的數字
            const previousCharPosition = previousValueString.length - index - 1;
            const previousChar = previousCharPosition >= 0 ? 
                previousValueString[previousValueString.length - 1 - charPosition] : 
                undefined;
            
            // 如果這個位置的數字改變了，或是新增的位置，就增加動畫 ID
            if (previousChar !== char || previousChar === undefined) {
                if (!positionAnimationIds.current[charPosition]) {
                    positionAnimationIds.current[charPosition] = 0;
                }
                positionAnimationIds.current[charPosition] += 1;
            }
            
            // 確保每個位置都有動畫 ID
            if (!positionAnimationIds.current[charPosition]) {
                positionAnimationIds.current[charPosition] = 0;
            }
            
            return (
                <motion.span
                    key={`${positionAnimationIds.current[charPosition]}-pos-${charPosition}-${char}`}
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
        
        // 更新 previousValue
        previousValue.current = value;
        
        return seperatedNumbers;
    }
    
    const getValueWidth = (value: number) => {
        const valueLength = value.toString().length;
        return `${valueLength}ch`;
    }

    const valueWidth = getValueWidth(value);

    return (
        <div className="rolling-numbers-container">
            <div 
                className="rolling-numbers"
                style={{gap: `${gap}em`}}
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