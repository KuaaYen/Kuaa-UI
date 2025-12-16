import { motion, Transition } from "motion/react";

const IUnderstand = () => {

    const faceTransition = {
        duration: 0.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.2,
    } as Transition

    const tearsTransition = {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    return (
        <svg viewBox="1 39 60 20" xmlns="http://www.w3.org/2000/svg" width="3em" height="1em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 56 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* phone */}
            <path 
                d="M 40 44 l 8 0 l 0 11 l -8 0 l 0 -11 Z"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyebrows */}
            <path 
                d="M 16 39 l 2 0 l -2 2 l -1 0 l 1 -2 m 17 0 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* tears */}
            <motion.circle 
                cx={18}
                cy={56}
                r={1}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{r: 0, cy: 51, opacity: 1}}
                animate={{r: 1, cy: 58, opacity: [0, 1, 1, 0]}}
                transition={{
                    r: {...tearsTransition},
                    cy: {...tearsTransition},
                    opacity: {...tearsTransition, times: [0, 0.3, 0.6, 0.9]},
                }}
            />
            <motion.g
                initial={{ y: '0%'}}
                animate={{ y: ['0%', '6%', '0%']}}
                transition={{...faceTransition}}
            >
                {/* mouth */}
                <path
                    d="M 22 57 l 5 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* eyes */}
                <path 
                    d="M 15 49 l 0 0 m 20 0 l 0 0"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
        </svg>
    )
}
export default IUnderstand;