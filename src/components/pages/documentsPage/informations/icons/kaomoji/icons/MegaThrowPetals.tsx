import { motion, Transition } from "motion/react";

const MegaThrowPetals = () => {

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
            {from : {x: 20, y: 52, r: 0}, to: {x: 10, y: 40, r: 1.5}, delay: 0.05},
            {from : {x: 80, y: 52, r: 0}, to: {x: 85, y: 40, r: 1.5}, delay: 0},
            {from : {x: 80, y: 52, r: 0}, to: {x: 90, y: 48, r: 1.5}, delay: 0.05},
        ];
        return petalsData.map((petal, index) => {
            return (
                <motion.path 
                    key={index}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={`M ${petal.from.x} ${petal.from.y} a ${petal.from.r} ${petal.from.r} 0 0 0 0 ${petal.from.r} a ${petal.from.r} ${petal.from.r} 0 0 0 0 -${petal.from.r}`}
                    initial={{
                        d: `M ${petal.from.x} ${petal.from.y} a ${petal.from.r} ${petal.from.r} 0 0 0 0 ${petal.from.r * 2} a ${petal.from.r} ${petal.from.r} 0 0 0 0 -${petal.from.r * 2}`,
                        opacity: 1,
                    }}
                    animate={{
                        d: `M ${petal.to.x} ${petal.to.y} a ${petal.to.r} ${petal.to.r} 0 0 0 0 ${petal.to.r * 2} a ${petal.to.r} ${petal.to.r} 0 0 0 0 -${petal.to.r * 2}`,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        d: {...petalsMovementTransition, delay: petal.delay},
                        opacity: {...petalsOpacityTransition, delay: petal.delay},
                    }}
                />
            )
        })
    }

    return (
        <div
            style={{
                position: 'relative',
                height: '1em',
                width: '5em',
                display: 'inline-block',
            }}
        >
            <svg viewBox="0 39 100 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '5em',
                    zIndex: 1,
                }}
            >
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
                    initial={{
                        d: "M 23 52 Q 21 48 18 47 M 74 54 Q 78 49 79 42"
                    }}
                    animate={{
                        d: [
                            "M 23 52 Q 19 53 18 56 M 74 49 Q 80 49 82 55",
                            "M 23 52 Q 21 48 18 47 M 74 54 Q 78 49 79 42",
                            "M 23 52 Q 21 48 18 47 M 74 54 Q 78 49 79 42",
                            "M 23 52 Q 19 53 18 56 M 74 49 Q 80 49 82 55",
                        ]
                    }}
                    transition={{...faceTransition}}
                />
                {createPetals()}
            </svg>
            <motion.svg viewBox="0 39 100 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '5em',
                    zIndex: 2,
                }}
                initial={{ y: '0%'}}
                animate={{ y: ['0%', '-5%', '-5%', '0%']}}
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
            </motion.svg>
        </div>
    )
}
export default MegaThrowPetals;