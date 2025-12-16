import { motion, Transition } from "motion/react";

const Hehehe = () => {
    
    const transition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 73 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3.65em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 59 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* mouth */}
            <motion.path 
                d="M 27 43 Q 36 50 45 43"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 28 43 Q 36 49 44 43"}}
                animate={{d: "M 27 43 Q 36 50 45 43"}}
                transition={{...transition}}
            />             
            {/* eyes */}
            <motion.path 
                d="M 22 42.5 l 0 1.5 l 1.5 0 l 0 -1.5 l -1.5 0 Z M 49 42.5 l 0 1.5 l 1.5 0 l 0 -1.5 l -1.5 0 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 23 42.5 l 0 1.5 l 1.5 0 l 0 -1.5 l -1.5 0 Z M 48 42.5 l 0 1.5 l 1.5 0 l 0 -1.5 l -1.5 0 Z"}}
                animate={{d: "M 22 42.5 l 0 1.5 l 1.5 0 l 0 -1.5 l -1.5 0 Z M 49 42.5 l 0 1.5 l 1.5 0 l 0 -1.5 l -1.5 0 Z"}}
                transition={{...transition}}
            />             
            {/* heart */}
            <motion.path 
                d={`M 14 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z
                    M 59 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: `M 15 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z
                    M 58 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z`,
                    fillOpacity: 0,
                }}
                animate={{
                    d: `M 14 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z
                    M 59 52 c -3 -2 -4.5 -4 -4.5 -6 c 0 -2 2.5 -4 4.5 -1 c 2 -3 4.5 -1 4.5 1 c 0 2 -1.5 4 -4.5 6 Z`,
                    fillOpacity: 1,
                }}
                transition={{...transition}}
            />             
        </svg>
    )
}
export default Hehehe;