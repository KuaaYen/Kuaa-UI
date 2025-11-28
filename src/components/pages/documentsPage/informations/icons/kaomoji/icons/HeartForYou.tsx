import { motion, Transition } from "motion/react";

const HeartForYou = () => {

    const transition = {
        duration: 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    const heartTransition = {
        duration: 0.4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    return (
        <svg viewBox="0 39 70 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.5em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 29 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 21 42 l 2 0 l -2 2 l -1 0 l 1 -2 m 9 0 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth  */}
            <path 
                d="M 24.5 47 c 0 3 4 3 4 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* blush */}
            <path 
                d="M 14 51 l 2 0 l -2 2 l -1 0 l 1 -2 m 3 0 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand */}
            <motion.path 
                d="M 41 53 c 4 0 8 -3 7 -8 c -2 -6 -10 -2 -5 2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 41 53 c 4 0 8 -3 7 -8 c -2 -6 -10 -2 -5 2"
                }}
                animate={{
                    d: "M 41.5 53 c 4 0 9 -2 9 -7 c 0 -6 -9 -4 -6 2"
                }}
                transition={{...transition}}
            />
            {/* heart */}
            <motion.path 
                d="M 55 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 50 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z",
                    scale: 0,
                }}
                animate={{
                    d: "M 62 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z",
                    scale: 1,
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    d : {...heartTransition},
                    scale : {...heartTransition},
                    opacity: {...heartTransition, times: [0, 0.3, 0.6, 0.9]},
                }}
            />
        </svg>
    )
}
export default HeartForYou;