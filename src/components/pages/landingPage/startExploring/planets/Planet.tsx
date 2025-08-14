import { Illustration, Ellipse, Shape, Anchor } from "react-zdog";
import { useState, memo, useRef } from "react";
import { useAnimationFrame } from "motion/react";

interface PlanetProps {
    tiltSide?: 'left' | 'right';
    tiltSpeed?: number;
    sphereColor?: string;
    sphereSize?: number;
    ringColor?: string;
    ringStroke?: number;
    ringSize?: number;
    zoom?: number;
}


const Planet = ({
    tiltSide = 'left',
    tiltSpeed = 2,
    sphereColor = '#F2CC8F',
    sphereSize = 70,
    ringColor = '#3D405B',
    ringStroke = 10,
    ringSize = 100,
    zoom = 1,
}: PlanetProps) => {
    const TAU = Math.PI * 2;
    const [ringRotateY, setRingRotateY] = useState(0);

    const lastUpdate = useRef(0);
    const throttleDelay = 1000 / 60; 

    useAnimationFrame((time) => {

        if (time - lastUpdate.current < throttleDelay) {
            return;
        }
        lastUpdate.current = time;
        const speed = tiltSpeed / 1000;

        const newRingRotateY = Math.sin(time * speed) * TAU/4 * 0.1 + 0.5;
        setRingRotateY(newRingRotateY);
    })

    // useEffect(() => {
    //     let animateId: number;
    //     const startTime = Date.now();
    //     let lastTime = 0;
    //     const trottle = 1000 / 60;
    //     const TAU = Math.PI * 2;
    //     const speed = tiltSpeed / 1000;

    //     const animate = () => {
    //         const currentTime = Date.now();
    //         const deltaTime = currentTime - lastTime;
    //         if(deltaTime > trottle) {
    //             lastTime = currentTime;
    //             const time = currentTime - startTime;
    //             const angle = Math.sin(time * speed) * TAU/4 * 0.1 + 0.5;
    //             setRingRotateY(angle);
    //         }
    //         animateId = requestAnimationFrame(animate);
    //     }

    //     animate();

    //     return () => cancelAnimationFrame(animateId);
    // }, [tiltSpeed]);

    const tiltMultiplier = tiltSide === 'left' ? 1 : -1;

    return (
        <div className="planet-wrapper">
            <Illustration zoom={zoom}>
                <Anchor rotate={{y: tiltMultiplier *ringRotateY, x: TAU/6, z: TAU/4}}>
                    <Ellipse 
                        diameter={ringSize}
                        quarters={2}
                        stroke={ringStroke}
                        color={ringColor}
                    />
                    <Ellipse 
                        diameter={ringSize}
                        quarters={2}
                        rotate={{y: TAU/2}}
                        stroke={ringStroke}
                        color={ringColor}
                    />
                </Anchor>
                <Shape
                    path={[
                        {x: 0, y: 0}
                    ]}
                    stroke={sphereSize}
                    color={sphereColor}
                    fill={true}
                />
            </Illustration>        
        </div>
    )
}

export default memo(Planet);