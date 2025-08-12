import { motion, useAnimationFrame } from "motion/react";
import { Illustration, Shape, Anchor } from "react-zdog";
import { useState, useRef } from "react";
// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

const ChillSun = () => {
    const TAU = Math.PI * 2;
    const [rotationX, setRotationX] = useState(0);
    const [triangleRotate, setTriangleRotate] = useState(0);

    const lastUpdate = useRef(0);
    const throttleDelay = 1000 / 60; 

    useAnimationFrame((time) => {
        if (time - lastUpdate.current < throttleDelay) {
            return;
        }
        lastUpdate.current = time;

        // sun 動畫
        const newRotationX = Math.sin(time * 0.006) * 0.12;
        setRotationX(newRotationX);
        
        // triangle 動畫
        const newTriangleRotate = time * 0.0002
        setTriangleRotate(newTriangleRotate);
    });

    const createTriangles = (number: number) => {
        const triangles = [];
        for (let i = 0; i < number; i++) {
            const angle = (TAU/number) * i;
            const radius = 50;
            const triangleX = radius * Math.cos(angle);
            const triangleY = radius * Math.sin(angle);
            triangles.push(
                <Shape
                    key={i+'triangle'}
                    path={[
                        {x: 0, y: -6},   // 尖端在上方（-y方向）
                        {x: -6, y: 6},   // 左下角
                        {x: 6, y: 6},    // 右下角
                    ]}
                    translate={{x: triangleX, y: triangleY, z: 0}}
                    rotate={{z: angle + (TAU / 4)}}
                    stroke={5}
                    color={'rgb(255, 146, 57)'}
                    fill={true}
                />
            )
        }
        return triangles;
    }

    return (
        <motion.section 
            className="landing-page-hero-chill-sun"
            initial={{
                transform: 'translate(0%, 100%)',
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 0,
                }
            }}
            whileInView={{
                transform: 'translate(0%, 0%)',
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 0,
                }
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                initial={{
                    filter: 'drop-shadow(2px 2px 4px var(--dark-eggshell))',
                }}
                whileTap={{
                    scale: 1.05,
                    filter: 'drop-shadow(2px 2px 4px var(--basic-brick))',
                    transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                    }
                }}
            >
                <Illustration>
                    <Anchor 
                        translate={{x: 0, y: 0, z: 0}}
                        rotate={{
                            x: rotationX - (TAU / 4) * 0.1,
                            y: (TAU / 4) * 0.3
                        }}
                    >
                        <Shape
                            path={[{x: 0, y: 0}]}
                            stroke={80}
                            color={'#F2CC8F'}
                            fill={true}
                        >
                            <Shape
                                path={[
                                    {x: -6, y: -7}, 
                                    {x: 6, y: -7},
                                ]}
                                translate={{x: 0, y: 0, z: 40}}
                                stroke={3}
                                color={'rgb(0, 0, 0)'}
                                fill={true}
                            >
                            </Shape>
                            <Shape
                                path={[
                                    {x: -25, y: -8}, 
                                    {x: -5, y: -8},
                                    {arc: [
                                        {x: -5, y: 1},
                                        {x: -12, y: 1},
                                    ]},
                                    {arc: [
                                        {x: -25, y: 3},
                                        {x: -25, y: -8},
                                    ]}
                                ]}
                                translate={{x: -1.5, y: 0, z: 40}}
                                stroke={5}
                                color={'rgb(0, 0, 0)'}
                                fill={true}
                            >
                            </Shape>
                            <Shape
                                path={[
                                    {x: 25, y: -8}, 
                                    {x: 5, y: -8},
                                    {arc: [
                                        {x: 5, y: 1},
                                        {x: 12, y: 1    },
                                    ]},
                                    {arc: [
                                        {x: 25, y: 3},
                                        {x: 25, y: -8},
                                    ]}
                                ]}
                                translate={{x: 1.5, y: 0, z: 40}}
                                stroke={5}
                                color={'rgb(0, 0, 0)'}
                                fill={true}
                            >
                            </Shape>
                            <Shape
                                path={[
                                    {x: -5, y: 0}, 
                                    {x: 5, y: 0},
                                    {arc: [
                                        {x: 7, y: 0},
                                        {x: 7, y: -2},
                                    ]}
                                ]}
                                translate={{x: 0, y: 10, z: 39}}
                                stroke={2}
                                color={'rgb(0, 0, 0)'}
                                closed={false}
                                // fill={true}
                            >
                            </Shape>
                        </Shape>
                    </Anchor>
                    <Anchor
                        translate={{x: 0, y: 0, z: 0}}
                        rotate={{z: triangleRotate}}
                    >
                        {createTriangles(10)}
                    </Anchor>
                </Illustration>
            </motion.div>
        </motion.section>
    )
}

export default ChillSun;