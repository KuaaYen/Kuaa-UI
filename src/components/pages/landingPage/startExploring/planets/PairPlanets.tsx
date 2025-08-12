import { Illustration, Shape, Anchor } from "react-zdog";
import { useState, memo, useRef } from "react";
import { useAnimationFrame } from "motion/react";


const PairPlanets = () => {

    const TAU = Math.PI * 2;
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);

    const lastUpdate = useRef(0);
    const throttleDelay = 1000 / 60; 

    useAnimationFrame((time) => {

        if (time - lastUpdate.current < throttleDelay) {
            return;
        }
        lastUpdate.current = time;

        const newRotateY = time * 0.0001 * TAU;
        const newRotateZ = Math.sin(time * 0.001) * (TAU/4) * 0.1;
        setRotateY(newRotateY);
        setRotateZ(newRotateZ);
    })

    // useEffect(() => {
    //     let animateId: number;
    //     const startTime = Date.now();
    //     const TAU = Math.PI * 2;
        
    //     const animate = () => {
    //         const elapsed = Date.now() - startTime;
    //         const newRotateY = elapsed * 0.0001 * TAU;
    //         const newRotateZ = Math.sin(elapsed * 0.001) * (TAU/4) * 0.1;
    //         setRotateY(newRotateY);
    //         setRotateZ(newRotateZ);

    //         animateId = requestAnimationFrame(animate);
    //     }

    //     animate();

    //     return () => {
    //         if (animateId) {
    //             cancelAnimationFrame(animateId);
    //         }
    //     }
    // }, []);

    
    return (
        <div className="planet-wrapper">
            <Illustration>
                <Anchor rotate={{y: rotateY, x: 0, z: rotateZ}}>
                    <Shape
                        path={[
                            {x: 0, y: 0},
                        ]}
                        translate={{x: 30, y: 0}}
                        stroke={40}
                        color={'#E07A5F'}
                        fill={true}
                    />
                    <Anchor translate={{x: -40, y: 0}} rotate={{y: 0, x: 0, z: TAU/2 * -0.2}} >
                        <Shape
                            path={[
                                {x: 0, y: 0},
                            ]}
                            stroke={60}
                            color={'#F2CC8F'}
                            fill={true}
                        />
                        <Anchor rotate={{y: rotateY * 2, x: 0, z: 0}}>
                            <Shape
                                path={[
                                    {x: 0, y: 0},
                                ]}
                                translate={{x: 45, y: 0}}
                                stroke={20}
                                color={'#81B29A'}
                                fill={true}
                            />
                        </Anchor>
                    </Anchor>
                </Anchor>
            </Illustration>
        </div>
    )
}

export default memo(PairPlanets);