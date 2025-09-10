import { useState, useRef, useEffect, useCallback } from 'react';
import { useAnimationFrame, useInView } from 'motion/react';

interface DecodeTextProps {
    text: string;
    decode?: boolean;
    triggerType?: 'inView' | 'manual' | 'auto';
    triggerMargin?: number;
    once?: boolean;
    amount?: number;
    delay?: number;
    interval?: number;
    randomChars?: string;
    className?: string;
    onDecodeComplete?: () => void;
    onEncodeComplete?: () => void;
}

const DecodeText = ({ 
    text, 
    decode = true,
    triggerType = 'inView',
    triggerMargin = -100,
    once = false,
    amount = 1,
    delay = 0,
    interval = 90, 
    randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
    className = '',
    onDecodeComplete = () => {},
    onEncodeComplete = () => {},
}: DecodeTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const [decodingStatus, setDecodingStatus] = useState<'decoding' | 'encoding'>('decoding');
    const lastDecodeTimeRef = useRef(0);
    const currentIndexRef = useRef(0);
    const originalTextRef = useRef('');
    const textRef = useRef(null);
    const isInView = useInView(
        textRef, { 
            once: once, 
            margin: `${triggerMargin}px 0px ${triggerMargin}px 0px`,
            amount: amount
        });

    // 生成隨機字符
    const generateRandomChar = useCallback(() => {
        return randomChars[Math.floor(Math.random() * randomChars.length)];
    }, [randomChars]);

    // 生成初始亂碼
    const generateRandomText = useCallback((length: number) => {
        return Array.from({ length }, () => generateRandomChar()).join('');
    }, [generateRandomChar]);

    useAnimationFrame((time) => {
        if (!isDecoding) return;
        if (time - lastDecodeTimeRef.current < interval) return;

        if (decodingStatus === 'decoding') {
            const currentIndex = currentIndexRef.current;
            
            if (currentIndex >= originalTextRef.current.length) {
                setDisplayText(originalTextRef.current);
                setIsDecoding(false);
                if (onDecodeComplete) onDecodeComplete();
                return;
            }

            // 解碼當前位置的字符
            setDisplayText(prev => {
                const chars = prev.split('');
                chars[currentIndex] = originalTextRef.current[currentIndex];
                
                // 更新後面的字符為新的隨機字符
                for (let i = currentIndex + 1; i < chars.length; i++) {
                    chars[i] = generateRandomChar();
                }
                
                return chars.join('');
            });

            
            currentIndexRef.current++;
            lastDecodeTimeRef.current = time;

        } else if (decodingStatus === 'encoding') {
            const currentIndex = currentIndexRef.current;
            
            if (currentIndex <= 0) {
                setDisplayText(generateRandomText(originalTextRef.current.length));
                setIsDecoding(false);
                if (onEncodeComplete) onEncodeComplete();
                return;
            }

            // 將當前位置的字符變為亂碼
            setDisplayText(prev => {
                const chars = prev.split('');
                chars[currentIndex - 1] = generateRandomChar();
                
                // 更新後面的字符為新的隨機字符
                for (let i = currentIndex; i < chars.length; i++) {
                    chars[i] = generateRandomChar();
                }
                
                return chars.join('');
            });

            currentIndexRef.current--;
            lastDecodeTimeRef.current = time;
        }
    });

    useEffect(() => {
        if(delay > 0) {
            setTimeout(() => {
                setIsDecoding(true);
            }, delay);
        } else {
            setIsDecoding(true);
        }
        if(triggerType === 'inView') {
            setDecodingStatus(isInView ? 'decoding' : 'encoding');
        } else if (triggerType === 'manual'){
            setDecodingStatus(decode ? 'decoding' : 'encoding');
        } else if (triggerType === 'auto') {
            setDecodingStatus('decoding');
        }
        lastDecodeTimeRef.current = 0;
    }, [isInView, triggerType, decode, delay]);

    // 初始化
    useEffect(() => {
        if (text) {
            originalTextRef.current = text;
            currentIndexRef.current = decode ? 0 : text.length;
            setDisplayText(decode ? generateRandomText(text.length) : text);
        }
    }, [text, decode, generateRandomText]);

    return (
        <p className={className} ref={textRef}>
            {displayText || text}
        </p>
    );
};

export default DecodeText;