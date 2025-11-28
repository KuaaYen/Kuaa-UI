import { motion, Transition } from "motion/react";

const YouCanDoIt2 = () => {

    const transition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.2,
    } as Transition


    return (
        <svg viewBox="0 39 75 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.75em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 41 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 21 49 l 0 0 m 22 0 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth  */}
            <path
                d="M 28 45 l 0 7 l 8 0 L 36 45 m -8 3.5 l 8 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* blush */}
            <path 
                d="M 16 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyebrows  */}
            <motion.path 
                d="M 19 39 l 2 0 l 1 2 l -1 0 l -2 -2 m 25 0 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand */}
            <motion.path 
                d="M 53 54 q 8 2 7 -6 c -1 -4 -5 3 0 2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 53 54 q 6 0 5 -9 c -1 -4 -5 3 0 2"
                }}
                animate={{
                    d: [
                        "M 53 54 q 6 0 5 -9 c -1 -4 -5 3 0 2",
                        "M 53 54 q 8 2 7 -6 c -1 -4 -5 3 0 2",
                        "M 53 54 q 8 2 7 -6 c -1 -4 -5 3 0 2",
                        "M 53 54 q 6 0 5 -9 c -1 -4 -5 3 0 2",
                    ]
                }}
                transition={{...transition, times: [0, 0.3, 0.6, 1]}}
            />
            {/* star */}
            <motion.path 
                d="M 68 43 l -1 4 l -4 1 l 4 1 l 1 4 l 0 1 q -1 -5 -6 -6 q 5 -1 6 -6 l 0 1 l 1 4 l 4 1 l -4 1 l -1 4 l 0 1 q 1 -5 6 -6 q -5 -1 -6 -6"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                animate={{
                    scale: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{...transition, times: [0, 0.3, 0.6, 1]}}
            />

        </svg>
    )
}
export default YouCanDoIt2;