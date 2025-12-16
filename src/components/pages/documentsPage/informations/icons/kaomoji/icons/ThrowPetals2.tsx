import { motion, Transition } from "motion/react";

const ThrowPetals2 = () => {

    const faceTransition = {
        duration: 0.4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    const petalsMovementTransition = {
        duration: 0.4,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const petalsOpacityTransition = {
        times: [0, 0.3, 0.6, 1],
        duration: 0.4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const createPetals = () => {
        const petalsData = [
            {from : {x: 20, y: 52, r: 0}, to: {x: 6, y: 48, r: 2}, delay: 0},
            {from : {x: 20, y: 52, r: 0}, to: {x: 11, y: 40, r: 1.5}, delay: 0.05},
            {from : {x: 80, y: 52, r: 0}, to: {x: 83, y: 40, r: 1.5}, delay: 0},
            {from : {x: 80, y: 52, r: 0}, to: {x: 90, y: 48, r: 1.5}, delay: 0.05},
        ];
        return petalsData.map((petal, index) => {
            return (
                <motion.circle 
                    key={index}
                    cx={petal.from.x}
                    cy={petal.from.y}
                    r={petal.from.r}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    initial={{r: petal.from.r, cx: petal.from.x, cy: petal.from.y, opacity: 1}}
                    animate={{r: petal.to.r, cx: petal.to.x, cy: petal.to.y, opacity: [0, 1, 1, 0]}}
                    transition={{
                        r: {...petalsMovementTransition, delay: petal.delay},
                        cx: {...petalsMovementTransition, delay: petal.delay},
                        cy: {...petalsMovementTransition, delay: petal.delay},
                        opacity: {...petalsOpacityTransition, delay: petal.delay},
                    }}
                />
            )
        })
    }

    return (
        <svg viewBox="0 39 100 20" xmlns="http://www.w3.org/2000/svg" width="5em" height="1em">
            {/* face */}
            <path 
                d="M 32 42 q -6 8 0 16 m 36 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />

            {/* blush */}
            <path 
                d="M 36 42 l 0 2 l -2.1 -0.614 m 0.839 2.584 l 1.261 -1.97 l 1.448 1.887 m -1.448 -1.887 l 2.066 -0.655"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* hand */}
            <motion.path 
                d="M 25 52 q -2 -4 -5 -6 M 74 54 q 4 -4 6 -12"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 23 52 Q 21 48 18 47 M 74 54 Q 78 49 79 42"}}
                animate={{
                    d: ["M 23 52 Q 19 53 18 56 M 74 49 Q 80 49 82 55",
                        "M 23 52 Q 21 48 18 47 M 74 54 Q 78 49 79 42",
                        "M 23 52 Q 21 48 18 47 M 74 54 Q 78 49 79 42",
                        "M 23 52 Q 19 53 18 56 M 74 49 Q 80 49 82 55"]
                }}
                transition={{...faceTransition}}
            />
            <motion.g
                initial={{ y: '0%'}}
                animate={{ y: ['0%', '-8%', '-8%', '0%']}}
                transition={{...faceTransition}}
            >      
                {/* mouth */}
                <path 
                    d="M 47 42 l 5 11.5 l 5 -11.5 m -8 4 l 6 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                />
                {/* eyes */}
                <path 
                    d="M 61 42 l 2 0 l 1 2 l -1 0 l -2 -2 m -18 0 l -2 0 l -1 2 l 1 0 l 2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
            {createPetals()}
        </svg>
    )
}
export default ThrowPetals2;