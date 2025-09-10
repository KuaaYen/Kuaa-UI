import { useState, useRef, useEffect } from 'react';
import { useAnimationFrame } from 'motion/react';

interface DecodeTextProps {
    text: string;
    interval?: number;
    randomChars?: string;
    // className?: string;
}

const DecodeText = ({ 
    text, 
    interval = 80, 
    randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
    // className = ""
}: DecodeTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const lastDecodeTimeRef = useRef(0);
    const currentIndexRef = useRef(0);
    const originalTextRef = useRef('');

    // 生成隨機字符
    const generateRandomChar = () => {
        return randomChars[Math.floor(Math.random() * randomChars.length)];
    };

    // 生成初始亂碼
    const generateRandomText = (length: number) => {
        return Array.from({ length }, () => generateRandomChar()).join('');
    };

    // 開始解碼動畫
    const startDecoding = () => {
        originalTextRef.current = text;
        currentIndexRef.current = 0;
        setDisplayText(generateRandomText(text.length));
        setIsDecoding(true);
        lastDecodeTimeRef.current = 0;
    };

    // 使用 useAnimationFrame 進行解碼動畫
    useAnimationFrame((time) => {
        if (!isDecoding) return;

        // 檢查是否達到間隔時間
        if (time - lastDecodeTimeRef.current >= interval) {
            const currentIndex = currentIndexRef.current;
            
            if (currentIndex >= originalTextRef.current.length) {
                // 解碼完成
                setDisplayText(originalTextRef.current);
                setIsDecoding(false);
                return;
            }

            // 解碼當前位置的字符
            setDisplayText(prev => {
                const chars = prev.split('');
                chars[currentIndex] = originalTextRef.current[currentIndex];
                
                // 更新後面的字符為新的隨機字符（保持動態效果）
                for (let i = currentIndex + 1; i < chars.length; i++) {
                    chars[i] = generateRandomChar();
                }
                
                return chars.join('');
            });

            currentIndexRef.current++;
            lastDecodeTimeRef.current = time;
        }
    });

    // 當 text 改變時重新開始
    useEffect(() => {
        if (text) {
            startDecoding();
        }
    }, [text]);

    return (
        <p className="decode-text-demo">
            <span>
                {displayText || text}
            </span>
        </p>
    );
};

export default DecodeText;