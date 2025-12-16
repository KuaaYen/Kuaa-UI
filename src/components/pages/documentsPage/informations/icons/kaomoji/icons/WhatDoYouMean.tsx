import { motion, Transition } from "motion/react";

const WhatDoYouMean = () => {

    const transition = {
        duration: 0.15,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="-1 39 60 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 43 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* pound sign 1 */}
            <path 
                d="M 11 42 l 1 0 l -2 12 l -1 0 Z M 14.5 42 l -2 12 l 1 0 l 2 -12 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* pound sign 2 */}
            <path 
                d="M 8 45.5 l 8.5 0 l 0 1 l -8.5 0 Z M 8 49.5 l 8.4 0 l 0 1 l -8.5 0 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth */}
            <motion.path 
                d="M 24 54 Q 26.5 52 26.5 42 L 32.5 42 L 32.5 54 M 23.5 58 l 0 -4 l 10 0 L 33.5 58"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 24 53.5 Q 26.5 51.5 26.5 42 L 32.5 42 L 32.5 53.5 M 23.5 58 l 0 -4.5 l 10 0 L 33.5 58"}}
                animate={{d: "M 24 54.5 Q 26.5 52.5 26.5 42 L 32.5 42 L 32.5 54.5 M 23.5 58 l 0 -3.5 l 10 0 L 33.5 58"}}
                transition={{...transition}}
            />
            {/* eyes */}
            <path 
                d="M 18 42 l 2 0 l 1 2 l -1 0 l -2 -2 M 38 42 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand */}
            <motion.path 
                d="M 48 55 Q 52 51 54 43"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 48 55 Q 52 51 51 43"}}
                animate={{d: "M 48 55 Q 53 51 55 45"}}
                transition={{...transition}}
            />
        </svg>
    )
}
export default WhatDoYouMean;