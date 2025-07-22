import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";


// 目前還沒成功做出liquid glass效果，只能確定湍流效果可以使用，要使用svg製作的map供偏移使用時效果不如預期，
// 可能要直接引用svg或是圖片，但是這樣外框無法自動適應，要手動調整，再想想怎麼處理吧
const LiquidGlassCursor = () => {
    const [pointerPosition, setPointerPosition] = useState({x: 0, y: 0});

    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getRectSize = () => {
            const rect = cursorRef.current?.getBoundingClientRect();
            const rectSize = {
                width: rect?.width,
                height: rect?.height
            }
            return rectSize;
        }
        getRectSize();

        const handlePointerMove = (e: MouseEvent) => {
            if(cursorRef.current === null) return;
            const rectSize = getRectSize();
            const centeredPosition = {
                x: e.clientX - (rectSize.width ?? 0) / 2,
                y: e.clientY - (rectSize.height ?? 0) / 2
            }
            setPointerPosition(centeredPosition);
        }
        window.addEventListener('mousemove', handlePointerMove);
        return () => window.removeEventListener('mousemove', handlePointerMove);
    }, []);

    return (
        <div className="liquid-glass-cursor-container">
            <div className="liquid-glass-cursor-fixed-block">
                <motion.div 
                    className='liquid-glass-cursor'
                    style={{
                        backdropFilter: 'url(#liquid-glass)'
                    }}
                    animate={{
                        left: pointerPosition.x,
                        top: pointerPosition.y  
                    }}
                    transition={{
                        type: 'tween',
                        duration: 0.3,
                    }}
                    ref={cursorRef}
                >                    
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>

                            <filter id="liquid-glass">
                                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="turbulence"/>
                                
                                <feDisplacementMap 
                                    in="SourceGraphic" 
                                    in2="turbulence" 
                                    scale="100"
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                />
                            </filter>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}

export default LiquidGlassCursor;