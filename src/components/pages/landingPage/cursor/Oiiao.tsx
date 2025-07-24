import { motion } from "motion/react";
import { useEffect, useState, useRef, forwardRef, useImperativeHandle} from "react";
import { Illustration, Box, Anchor, Shape, Cone, Ellipse } from "react-zdog";

export interface OiiaoRef {
    setAnimationType: (type: 'spin' | 'swing') => void;
}

// interface OiiaoProps {
//     animationType: 'spin' | 'wave';
// }

const Oiiao = forwardRef<OiiaoRef>((_, ref) => {
    const TAU = Math.PI * 2;
    const [pointerPosition, setPointerPosition] = useState({x: 0, y: 0});
    const [oiiaoAnimationType, setOiiaoAnimationType] = useState<'spin' | 'swing'>('spin');
    const [oiiaoRotateZ, setOiiaoRotateZ] = useState(0);
    const [oiiaoRotateY, setOiiaoRotateY] = useState(0);

    const cursorRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        setAnimationType: (type: 'spin' | 'swing') => {
            setOiiaoAnimationType(type);
        }
    }));

    useEffect(() => {

        const handlePointerMove = (e: MouseEvent) => {
            if(cursorRef.current === null) return;
            const centeredPosition = {
                x: e.clientX + 20,
                y: e.clientY + 20
            }
            setPointerPosition(centeredPosition);
        }
        window.addEventListener('mousemove', handlePointerMove);
        return () => window.removeEventListener('mousemove', handlePointerMove);
    }, []);

    useEffect(() => {
        let spinAnimationId: number;
        let waveAnimationId: number;
        const startTime = Date.now();
        const useEffectTAU = Math.PI * 2;

        const spinAnimate = () => {
            const elapsed = Date.now() - startTime;
            const rotateY = elapsed * 0.005;
            setOiiaoRotateY(rotateY);
            setOiiaoRotateZ(0);

            spinAnimationId = requestAnimationFrame(spinAnimate);
        }

        const waveAnimate = () => {
            const elapsed = Date.now() - startTime;
            const rotateZ = Math.sin(elapsed * 0.005) * 0.25;
            setOiiaoRotateZ(rotateZ);
            setOiiaoRotateY((useEffectTAU / 4) * 0.3);
            waveAnimationId = requestAnimationFrame(waveAnimate);
        }


        if(oiiaoAnimationType === 'spin') {
            console.log('spin');
            spinAnimate();
        } else if(oiiaoAnimationType === 'swing') {
            console.log('swing');
            waveAnimate();
        }


        return () => {
            if (spinAnimationId) {
                cancelAnimationFrame(spinAnimationId);
            }
            if (waveAnimationId) {
                cancelAnimationFrame(waveAnimationId);
            }
        };
    },[oiiaoAnimationType]);


    return (
        <div className="oiiao-container">
            <div className="oiiao-cursor-wrapper">
                <motion.div
                    className="oiiao-cursor"
                    initial={{
                        opacity: 0,
                        scale: 0.3
                    }}

                    animate={{
                        x: pointerPosition.x,
                        y: pointerPosition.y,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            opacity: {
                                duration: 0.5,
                                ease: 'easeInOut',
                                delay: 2
                            },
                            scale: {
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 2.3
                            },
                            x: {
                                type: 'tween',
                                duration: 0.3,
                            },
                            y: {
                                type: 'tween',
                                duration: 0.3,
                            }
                        }
                    }}
                    transition={{
                        type: 'tween',
                        duration: 0.3,
                    }}
                    ref={cursorRef}
                >
                    <Illustration zoom={0.7}>
                        <Anchor
                            // rotate={{y: (TAU / 4) * 0.3, x: -(TAU / 4) * 0.3, z: oiiaoRotateZ}}
                            rotate={{y: oiiaoRotateY, x: -(TAU / 4) * 0.3, z: oiiaoRotateZ}}
                        >
                            {/* body black */}
                            <Box 
                                width={40}
                                height={40}
                                depth={70}
                                color="rgb(16, 16, 19)"
                                stroke={20}
                                topFace="rgb(10, 10, 10)"
                            />
                            {/* body white */}
                            <Shape
                                path={[
                                    {x: -20, y: 0},
                                    {x: 20, y: 0},
                                    {arc: [
                                        {x: 15, y: 40},
                                        {x: 0, y: 40},
                                    ]},
                                    {arc: [
                                        {x: -15, y: 40},
                                        {x: -20, y: 0},
                                    ]},
                                ]}
                                color="rgb(235, 235, 235)"
                                stroke={5}
                                translate={{z:40, y: -20}}
                                fill={true}
                                // draggable
                            />


                            {/* head */}
                            <Box
                                width={30}
                                height={25}
                                depth={25}
                                color="rgb(16, 16, 19)"
                                stroke={25}
                                translate={{z:30, y: -20}}
                                topFace="rgb(10, 10, 10)"
                            >
                                {/* left ear */}
                                <Cone
                                    diameter={13}
                                    // height={10}
                                    length={25}
                                    color="rgb(16, 16, 19)"
                                    stroke={6}
                                    translate={{z:-18, y: -15, x: -18}}
                                    rotate={{y: (TAU / 4) *1.7}}
                                />
                                {/* right ear */}
                                <Cone
                                    diameter={13}
                                    // height={10}
                                    length={25}
                                    color="rgb(16, 16, 19)"
                                    stroke={6}
                                    translate={{z:-18, y: -15, x: 18}}
                                    rotate={{y: -(TAU / 4) *1.7}}
                                />
                                <Anchor
                                    translate={{z: 23, y: 0}}
                                >
                                    {/* left eye */}
                                    <Ellipse
                                        width={11}
                                        height={10}
                                        color="rgb(255, 255, 255)"
                                        stroke={1}
                                        translate={{z: 5, y: 0, x: -12}}
                                        // fill={true}
                                    />
                                    {/* right eye */}
                                    <Ellipse
                                        width={11}
                                        height={10}
                                        color="rgb(255, 255, 255)"
                                        stroke={1}
                                        translate={{z: 5, y: 0, x: 12}}
                                        // fill={true}
                                    />
                                    {/* left eyebrow */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: -4, y: -8},
                                                {x: -13, y: -3},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.5}
                                        translate={{z: 5, y: -13, x: -7}}
                                        closed={false}
                                    />

                                    {/* left eyebrow detail */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: -2, y: -3},
                                                {x: -5, y: -1},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.3}
                                        translate={{z: 5, y: -13, x: -9}}
                                        closed={false}
                                    />

                                    {/* right eyebrow */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: 4, y: -8},
                                                {x: 13, y: -3},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.5}
                                        translate={{z: 5, y: -13, x: 7}}
                                        closed={false}
                                    />

                                    {/* right eyebrow detail */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: 2, y: -3},
                                                {x: 5, y: -1},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.3}
                                        translate={{z: 5, y: -13, x: 9}}
                                        closed={false}
                                    />

                                    {/* mouth */}
                                    <Shape
                                        path={[
                                            {x: -6, y: 0},
                                            {bezier: [
                                                {x: -6, y: 4},
                                                {x: 0, y: 4},
                                                {x: 0, y: 0},
                                            ]},
                                            {bezier:[
                                                {x: 0, y: 4},
                                                {x: 6, y: 4},
                                                {x: 6, y: 0},
                                            ]}
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.5}
                                        translate={{z: 5, y: 8}}
                                        closed={false}
                                    />

                                    {/* mustache left 1 */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: -10, y: -4},
                                                {x: -14, y: 1},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.2}
                                        translate={{z: 5, x: -24, y: -3}}
                                        closed={false}
                                    />

                                    {/* mustache left 2 */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: -11, y: -3},
                                                {x: -15, y: 4},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.2}
                                        translate={{z: 5, x: -24, y: -1}}
                                        closed={false}
                                    />

                                    {/* mustache left 3 */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: -5, y: -2},
                                                {x: -10, y: 4},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.2}
                                        translate={{z: 5, x: -24, y: 0.9}}
                                        closed={false}
                                    />

                                    {/* mustache right 1 */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: 10, y: -4},
                                                {x: 14, y: 1},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.2}
                                        translate={{z: 5, x: 24, y: -3}}
                                        closed={false}
                                    />

                                    {/* mustache right 2 */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: 11, y: -3},
                                                {x: 15, y: 4},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.2}
                                        translate={{z: 5, x: 24, y: -1}}
                                        closed={false}
                                    />

                                    {/* mustache right 3 */}
                                    <Shape
                                        path={[
                                            {x: 0, y: 0},
                                            {arc: [
                                                {x: 5, y: -2},
                                                {x: 10, y: 4},
                                            ]},
                                        ]}
                                        color="rgb(255, 255, 255)"
                                        stroke={0.2}
                                        translate={{z: 5, x: 24, y: 0.9}}
                                        closed={false}
                                    />
                                </Anchor>
                            </Box>

                            
                        </Anchor>
                    </Illustration>
                </motion.div>
            </div>
        </div>
    )
});

export default Oiiao;