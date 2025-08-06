import { useEffect, useRef, useMemo, useState } from "react";
import { motion } from "motion/react";
import ArrowBackground from "./ArrowBackground";

const ArrowStroke = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scaledPath, setScaledPath] = useState<string>('');
    const controlPoints = useMemo(() => [
        {x: 7.054, y: 79.96},
        {x: 19.449, y: 40.862},
        {x: 37.806, y: 73.053},
        {x: 49.199, y: 45.309},
        {x: 59.236, y: 53.298},
        {x: 89.44, y: 9.038},
    ], []);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const updatePath = () => {
                const containerRect = container.getBoundingClientRect();
                const containerWidth = containerRect.width;
                const containerHeight = containerRect.height;
                
                // 正規化座標（假設原始座標是基於 100x100 的坐标系統）
                const scaleX = containerWidth / 100;
                const scaleY = containerHeight / 100;
                
                const scaledPath = `M ${controlPoints.map(point => 
                    `${point.x * scaleX} ${point.y * scaleY}`
                ).join(' L ')}`;
                
                setScaledPath(scaledPath);
            }
            updatePath();
            const resizeObserver = new ResizeObserver(updatePath);
            resizeObserver.observe(container);
            return () => {
                resizeObserver.disconnect();
            }
        }
    }, [controlPoints]);

    const containerVariants = {
        initial: {},
        animate: {},
    }
    
    const pathVariants = {
        initial: {
            pathLength: 0,
        },
        animate: {
            pathLength: 1,
        },
    }

    const pointerVariants = {
        initial: {
            offsetDistance: '0%',
        },
        animate: {
            offsetDistance: '100%',
        },
    }


    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                height: '100%',
                aspectRatio: 1,
                zIndex: 1,
            }}
        >
            
            <motion.div 
                className="position-absotlue-full-size"
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    amount: 0.6,
                }}
            >
                <ArrowBackground />
                {/* arrow-stroke */}
                <div className="landing-page-arrow-wrapper">
                    <div className="landing-page-arrow-stroke-container">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <motion.path 
                                d="M 7.054 79.96 L 19.449 40.862 L 37.806 73.053 L 49.199 45.309 L 59.236 53.298 L 89.44 9.038"
                                fill="transparent"
                                stroke="#F2CC8F"
                                strokeWidth="6.5"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                variants={pathVariants}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeInOut",
                                }}
                                />
                        </svg>   
                    </div>
                    {/* 將 pointer搬入同一個父元素內，以使用variants達成和path動畫同步的效果 */}
                    {/* arrow pointer */}
                    <div className="landing-page-arrow-pointer-container">
                        <motion.div 
                            className="landing-page-arrow-pointer"
                            style={{
                                offsetPath: scaledPath ? `path('${scaledPath}')` : undefined,
                                offsetRotate: 'auto',
                            }}
                            variants={pointerVariants}
                            transition={{
                                duration: 1.8,
                                ease: "easeInOut"
                            }}
                            ></motion.div>
                    </div>
                </div>
            </motion.div>
            
        </div>
    )
}
export default ArrowStroke;