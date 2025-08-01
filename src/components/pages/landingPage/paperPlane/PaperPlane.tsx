import { Illustration, Shape, Anchor } from "react-zdog";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const PaperPlane = () => {
    const TAU = Math.PI * 2;
    const [rotation, setRotation] = useState({ x: TAU / 4, z: 0, y: 0 });

    useEffect(() => {
        const animate = () => {
            const time = Date.now();
            const tiltZ = Math.sin(time * 0.002) * 0.3;
            const tiltX = Math.sin(time * 0.0015) * 0.1;
            const tiltY = Math.sin(time * 0.001) * 0.1;
            
            setRotation({
                x: (TAU / 4) * 0.7 + tiltX,
                y: tiltY,
                z: -(TAU / 8) + tiltZ,
            });
        };

        const interval = setInterval(animate, 32); // ~60fps
        return () => clearInterval(interval);
    }, [TAU]);

    return (
        <motion.div 
            className="zdog-paper-plane-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="zdog-paper-plane"
                initial={{ opacity: 0, x: '-150%', cursor: 'grab' }}
                animate={{ opacity: 1, x: '0%', cursor: 'grab'}}
                whileTap={{cursor: 'grabbing'}}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <Illustration
                    zoom={1.1}
                    dragRotate={true}
                    style={{width: '100%', height: '100%'}}
                >
                    <Anchor 
                        translate={{x: 0, y: 0, z: 0}}
                        rotate={rotation}
                    >
                        {/* 左翼 */}
                        <Shape 
                            path={[{x: -40, y: -40}, {x: -5, y: -40}, {x: 0, y: 40}, {x: -40, y: -40}]} 
                            stroke={4} 
                            color={'#ffffff'}
                            fill={true}
                            backface={'rgb(207, 207, 207)'}
                        />
                        
                        {/* 機身 */}
                        <Shape 
                            path={[ {x: 0, y: -40}, {x: 0, y: 40}, {x: 40, y: -40}, {x: 0, y: -40}]} 
                            stroke={4} 
                            color={'rgb(230, 230, 230)'}
                            fill={true}
                            translate={{y: 2}}
                            rotate={{y: -TAU / 4}}
                        />
                        
                        {/* 右翼 */}
                        <Shape 
                            path={[{x: 40, y: -40}, {x: 5, y: -40}, {x: 0, y: 40}, {x: 40, y: -40}]} 
                            stroke={4} 
                            color={'#ffffff'}
                            fill={true}
                            backface={'rgb(207, 207, 207)'}
                        />
                    </Anchor>
                </Illustration>
            </motion.div>
        </motion.div>
    )
}

export default PaperPlane;