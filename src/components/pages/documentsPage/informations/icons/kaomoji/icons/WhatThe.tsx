import { motion, Transition } from "motion/react";

const WhatThe = () => {

    const transition = {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.5,
    } as Transition

    return (
        <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3em">
            {/* face */}
            <path 
                d="M 7 42 q -5 8 0 16 m 46 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            <motion.g
                initial={{x: '0%'}}
                animate={{x: '5%'}}
                transition={{...transition}}
            >
                {/* mouth */}
                <motion.path 
                    d="M 26 45 l 0 7 l 8 0 L 34 45 m -8 3.5 l 8 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{d: "M 26 45 l 0 7 l 8 0 L 34 45 m -8 3.5 l 8 0"}}
                    animate={{d: "M 26 45 l 0 7.5 l 8 0 L 34 45 m -8 3.5 l 8 0"}}
                    transition={{
                        ...transition,
                    }}
                />
                {/* eyes */}
                <motion.path 
                    d="M 16 49 l 0 0 m 28 0 l 0 0"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{d: "M 16 49 l 0 0 m 28 0 l 0 0"}}
                    animate={{d: "M 15 49 l 0 0 m 28 0 l 0 0"}}
                    transition={{
                        ...transition,
                    }}
                />                
                {/* eyesbrows */}
                <motion.path 
                    d="M 13 44 l 4 0 l 2 -2 m 24 2 l 4 0 l 2 -2"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{d: "M 13 44 l 4 0 l 2 -2 m 24 2 l 4 0 l 2 -2"}}
                    animate={{d: "M 13 44.5 l 4 0 l 2 -2 m 24 2 l 4 0 l 2 -2"}}
                    transition={{
                        ...transition,
                    }}
                /> 
            </motion.g>         
        </svg>
    )
}
export default WhatThe;