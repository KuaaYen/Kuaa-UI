import { motion, Transition } from "motion/react";

const WhatThe2 = () => {

    const transition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 52 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* mouth  */}  
            <motion.path
                d="M 25 54 Q 27 52 27 45 L 33 45 L 33 54 M 24.5 57 l 0 -3 l 9.5 0 L 34 57"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 25 53 Q 27 52 27 45 L 33 45 L 33 53 M 24.5 57 l 0 -4 l 9.5 0 L 34 57", x: '-2%'}}
                animate={{d: "M 25 54 Q 27 52 27 45 L 33 45 L 33 54 M 24.5 57 l 0 -3 l 9.5 0 L 34 57", x: '0%'}}
                transition={{...transition}}
            />
            {/* eye1 */}
            <motion.g
                initial={{y: '5%'}}
                animate={{y: '0%'}}
                transition={{...transition}}
            >
                <path 
                    d="M 16 43 a 5 5 0 0 0 0 10 a 5 5 0 0 0 0 -10"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M 16 48 l 0 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
            {/* eye2 */}
            <motion.g
                initial={{y: '-5%'}}
                animate={{y: '0%'}}
                transition={{...transition}}
            >
                <path 
                    d="M 43 45 a 5 5 0 0 0 0 10 a 5 5 0 0 0 0 -10"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M 43 50 l 0 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
        </svg>
    )
}
export default WhatThe2;