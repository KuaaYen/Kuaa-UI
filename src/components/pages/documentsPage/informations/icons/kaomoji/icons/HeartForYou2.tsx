import { motion, Transition } from "motion/react";

const HeartForYou2 = () => {

    const transition = {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.2,
    } as Transition

    return (
        <svg viewBox="0 39 68 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.4em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 39 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 17 42 l 2 0 l -2 2 l -1 0 l 1 -2 M 32 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth  */}
            <path
                d="M 21 44 l 4 11 l 5 -11 m -7.5 3.5 l 6 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* blush */}
            <motion.path 
                d="M 11 42 l 0 2 l -1.726 -0.47 m 0.577 2.191 l 1.149 -1.721 l 1.418 1.585 m -1.418 -1.585 l 1.866 -0.455"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* tilde */}
            <motion.path 
                d="M 44 49 c 3 -4 5 3 8 -1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{pathLength: 0, opacity: 0}}
                animate={{pathLength: [0, 1], opacity: [0, 1, 1, 0]}}
                transition={{
                    pathLength: {...transition, times: [0, 0.3]},
                    opacity: {...transition, times: [0, 0.2, 0.6, 0.9]},
                }}
            />
            {/* heart */}
            <motion.path 
                d="M 60 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{scale: 0, opacity: 0, x: '-150%'}}
                animate={{scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0], x: ['-150%', '0%']}}
                transition={{
                    scale: {...transition, times: [0, 0.3, 0.8]},
                    opacity: {...transition, times: [0, 0.2, 0.6, 0.9]},
                    x: {...transition, times: [0, 0.35]},
                }}
            />            
        </svg>
    )
}
export default HeartForYou2;