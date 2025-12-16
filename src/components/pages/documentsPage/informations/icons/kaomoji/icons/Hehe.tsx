import { motion, Transition } from "motion/react";

const Hehe = () => {

    const transition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 53 20" xmlns="http://www.w3.org/2000/svg" width="2.65em" height="1em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 46 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* blush */}
            <path 
                d={`M 11 42 l 0 2 l -1.723 -0.47 m 0.578 2.191 l 1.145 -1.721 l 1.3 1.706 
                    m -1.3 -1.706 l 1.783 -0.591 M 42 42 l 0 2 l -1.8 -0.591 
                    m 0.744 2.191 l 1.056 -1.6 l 1.464 1.464 m -1.464 -1.464 l 1.948 -0.591`}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            <motion.g
                initial={{x: '-1%', y: '-1%'}}
                animate={{x: ['-1%', '1%', '-1%', '1%', '-1%'], y: ['-1%', '1%', '-1%', '1%', '-1%']}}
                transition={{...transition}}
            >
                {/* eyes */}
                <path 
                    d="M 16 42 l 2 0 l -2 2 l -1 0 l 1 -2 M 35 42 l 2 0 l 1 2 l -1 0 l 0 0"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* mouth  */}
                <path
                    d="M 20 43 L 33 43 L 26.5 54 L 20 43 Z"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
            </motion.g>
        </svg>
    )
}
export default Hehe;