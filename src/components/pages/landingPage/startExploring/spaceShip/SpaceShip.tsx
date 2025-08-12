    import { Illustration, Anchor, Hemisphere, Cylinder, Cone, Ellipse} from "react-zdog";
    import { useState, memo, useRef } from "react";
    import { useAnimationFrame } from "motion/react";


    const SpaceShip = () => {

        const TAU = Math.PI * 2;
        const [rotateX, setRotateX] = useState(0);
        const [rotateZ, setRotateZ] = useState(0);
        const [translateY, setTranslateY] = useState(0);

        const lastUpdate = useRef(0);
        const throttleDelay = 1000 / 60; 

        useAnimationFrame((time) => {

            if (time - lastUpdate.current < throttleDelay) {
                return;
            }
            lastUpdate.current = time;

            const newRotateX = Math.sin(time * 0.002) * (TAU/4) * 0.08 + (TAU/4 * -0.3);
            const newRotateZ = Math.cos(time * 0.002) * (TAU/4) * 0.03 + (TAU/4 * -0.2);
            const newTranslateY = Math.sin(time * 0.002) * 5 -30;
            setRotateX(newRotateX);
            setRotateZ(newRotateZ);
            setTranslateY(newTranslateY);
        })

        // useEffect(() => {
        //     let animateId: number;
        //     const TAU = Math.PI * 2;
        //     const startTime = Date.now();
        //     const animate = () => {
        //         const elapsed = Date.now() - startTime;
        //         const newRotateX = Math.sin(elapsed * 0.002) * (TAU/4) * 0.08 + (TAU/4 * -0.3);
        //         const newRotateZ = Math.cos(elapsed * 0.002) * (TAU/4) * 0.03 + (TAU/4 * -0.2);
        //         const newTranslateY = Math.sin(elapsed * 0.002) * 5 -30;
        //         setRotateX(newRotateX);
        //         setRotateZ(newRotateZ);
        //         setTranslateY(newTranslateY);
        //         animateId = requestAnimationFrame(animate);
        //     }

        //     animate();

        //     return () => {
        //         if (animateId) {
        //             cancelAnimationFrame(animateId);
        //         }
        //     }


        // },[])

        
        return (
            <div className="space-ship-container">
                <Illustration zoom={0.8}>
                    <Anchor rotate={{x: rotateX, z: rotateZ}} translate={{y: translateY}}>
                        <Hemisphere
                            diameter={80}
                            color={'rgba(143, 206, 242, 0.5)'}
                            rotate={{x: TAU/4}}
                        />
                        <Cylinder
                            diameter={80}
                            length={20}
                            color={'#3D405B'}
                            stroke={8}
                            rotate={{x: TAU/4}}
                            translate={{y: 10}}
                        />
                        <Cone
                            diameter={120}
                            length={20}
                            color={'#3D405B'}
                            stroke={20}
                            rotate={{x: TAU/4}}
                            translate={{y: 25}}
                        />
                        <Ellipse
                            diameter={80}
                            color={'#F2CC8F'}
                            stroke={20}
                            translate={{y: 40}}
                            rotate={{x: TAU/4}}
                            fill={true}
                        />
                        <Ellipse
                            diameter={30}
                            color={'rgba(129, 178, 154, 0.27)'}
                            stroke={5}
                            translate={{y: 70}}
                            rotate={{x: TAU/4}}
                        />
                        <Ellipse
                            diameter={48}
                            color={'rgba(129, 178, 154, 0.2)'}
                            stroke={5}
                            translate={{y: 90}}
                            rotate={{x: TAU/4}}
                        />

                        <Ellipse
                            diameter={76}
                            color={'rgba(129, 178, 154, 0.1)'}
                            stroke={5}
                            translate={{y: 110}}
                            rotate={{x: TAU/4}}
                        />
                        {/* <Cone
                            diameter={120}
                            length={150}
                            color={'rgba(129, 178, 154, 0.27)'}
                            stroke={0}
                            rotate={{x: TAU/4}}
                            translate={{y: 180}}
                        /> */}
                    </Anchor>
                </Illustration>
            </div>
        )
    }

    export default memo(SpaceShip);