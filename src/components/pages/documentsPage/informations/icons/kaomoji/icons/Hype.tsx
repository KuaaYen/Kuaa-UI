import { motion, Transition } from "motion/react";

const Hype = () => {

    const transition = {
        duration: 0.15,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition


    return (
        <svg viewBox="0 39 100 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="5em">
            {/* face */}
            <path 
                d="M 27 42 q -6 8 0 16 m 46 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 40 45 l 8 3.5 l -8 4 m 30 -7.5 l -8 3.5 l 8 4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="bevel"
            />
            {/* mouth  */}
            <path
                d="M 54 50 c 2 -2 4 1 1.043 1.611 c 2.561 -0.481 2.3 3.286 -1.081 2.109"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* blush */}
            <path 
                d="M 36 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* hand 1 */}
            <motion.path 
                d="M 21 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 21 52 q -2 0 -1 -3 c -1 -7 -8 5 0 1"
                }}
                animate={{
                    d: "M 21 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1"
                }}
                transition={{...transition}}
            />
            {/* hand 2 */}
            <motion.path 
                d="M 80 53 q 0 -5 4 -7 c -10 4 -3 -7 0 -1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 80 53 q -1 -2 3 -4 c -10 4 -3 -7 0 -1"
                }}
                animate={{
                    d: "M 80 53 q 0 -5 4 -7 c -10 4 -3 -7 0 -1"
                }}
                transition={{...transition}}
            />
            {/* smoke 1 */}
            <motion.path 
                d="M 11 47 c -5 -3 -7 3.5 -1.5 3.5 c -6 0 -3.5 6.5 2 3"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 11 47 c -5 -3 -7 3.5 -1.5 3.5 c -6 0 -3.5 6.5 2 3",
                    x: '30%',
                    scale: 0.7,
                }}
                animate={{
                    d: "M 11 47 c -5 -3 -7 3.5 -1.5 3.5 c -6 0 -3.5 6.5 2 3",
                    x: '-20%',
                    scale: 1,
                }}
                transition={{...transition}}
            />
            {/* smoke 2 */}
            <motion.path 
                d="M 87 49 c 0 -1 1 -2 2 -2 c 3 0 3 3.7 0 3.7 l -0.5 0 l 0 0 c 4 0 4 4 0.3 3.9 c -1.2 -0.2 -1.9 -0.8 -2.1 -2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 87 49 c 0 -1 1 -2 2 -2 c 3 0 3 3.7 0 3.7 l -0.5 0 l 0 0 c 4 0 4 4 0.3 3.9 c -1.2 -0.2 -1.9 -0.8 -2.1 -2",
                    x: '-30%',
                    scale: 0.7,
                }}
                animate={{
                    d: "M 87 49 c 0 -1 1 -2 2 -2 c 3 0 3 3.7 0 3.7 l -0.5 0 l 0 0 c 4 0 4 4 0.3 3.9 c -1.2 -0.2 -1.9 -0.8 -2.1 -2",
                    x: '20%',
                    scale: 1,
                }}
                transition={{...transition}}
            />

        </svg>
    )
}
export default Hype;