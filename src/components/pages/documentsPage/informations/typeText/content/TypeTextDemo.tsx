import { useState, useRef, useEffect } from 'react';
import { useAnimationFrame, useInView } from 'motion/react';

interface TypeTextProps {
    text?: string;
    typing?: boolean;
    caretColor?: string;
    blinkDuration?: number;
    triggerType?: 'inView' | 'manual' | 'auto';
    triggerMargin?: number;
    once?: boolean;
    amount?: number;
    delay?: number;
    interval?: number;
    className?: string;
    onTypingComplete?: () => void;
    onDeletingComplete?: () => void;
}

const TypeText = ({ 
    text = 'Type Text Animation', 
    typing = true,
    caretColor = '#ffffff',
    blinkDuration = 1,
    triggerType = 'inView',
    triggerMargin = -100,
    once = false,
    amount = 1,
    delay = 0,
    interval = 90, 
    className = '',
    onTypingComplete = () => {},
    onDeletingComplete = () => {},
}: TypeTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const [decodingStatus, setDecodingStatus] = useState<'typing' | 'deleting'>('typing');
    const lastActionTimeRef = useRef(0);
    const currentIndexRef = useRef(0);
    const textRef = useRef(null);
    const isInView = useInView(
        textRef, { 
            once: once, 
            margin: `${triggerMargin}px 0px ${triggerMargin}px 0px`,
            amount: amount
        });


    useAnimationFrame((time) => {
        if (!isDecoding) return;
        if (time - lastActionTimeRef.current < interval) return;

        const currentIndex = currentIndexRef.current;
        if (decodingStatus === 'typing') {
            if (currentIndex >= text.length) {
                setDisplayText(text);
                setIsDecoding(false);
                if (onTypingComplete) onTypingComplete();
                return;
            }
            currentIndexRef.current++;

        } else if (decodingStatus === 'deleting') {
            if (currentIndex <= 0) {
                setDisplayText('');
                setIsDecoding(false);
                if (onDeletingComplete) onDeletingComplete();
                return;
            }
            currentIndexRef.current--;
        }
        const newText = text.slice(0, currentIndex+1);
        setDisplayText(newText);
        lastActionTimeRef.current = time;
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
            setDecodingStatus(isInView ? 'typing' : 'deleting');
        } else if (triggerType === 'manual'){
            setDecodingStatus(typing ? 'typing' : 'deleting');
        } else if (triggerType === 'auto') {
            setDecodingStatus('typing');
        }
        lastActionTimeRef.current = 0;
    }, [isInView, triggerType, typing, delay]);

    // 初始化
    useEffect(() => {
        if (text) {
            currentIndexRef.current = 0;
            setDisplayText(text);
        }
    }, [text]);

    return (
        <p className={`type-text-demo ${className}`} ref={textRef}>
            <span>{displayText}</span>
            <span 
                className='type-text-caret' 
                style={{animationDuration: `${blinkDuration}s`, backgroundColor: caretColor}}
            ></span>
        </p>
    );
};

export default TypeText;