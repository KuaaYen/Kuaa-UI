import { motion, Transition } from "motion/react";

const Chubby = () => {

    const transition = {
        duration: 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="-1 39 70 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3.5em">
            {/* face */}
            <motion.path 
                d="M 7 42 q -6 8 0 16 M 61 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 7 42 q -6 8 0 16 M 61 42 q 6 8 0 16"}}
                animate={{ d: "M 9 42 q -6 8 0 16 M 59 42 q 6 8 0 16"}}
                transition={{...transition}}
            />
            {/* mouth */}
            <motion.path 
                d="M 36 46 c -4 7 2 10 3 4 l 0 -2 l 0 2 c 1 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 36 46 c -4 7 2 10 3 4 l 0 -2 l 0 2 c 1 6 7 3 3 -4"}}
                animate={{d: "M 36 45.5 c -4 7 2 10 3 4 l 0 -2 l 0 2 c 1 6 7 3 3 -4"}}
                transition={{...transition}}
            />
            {/* eyes */}
            <path 
                d="M 31 42 l 2 0 l -2 2 l -1 0 l 1 -2 m 14 0 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand1 */}
            <motion.path 
                d="M 58 48.5 c 0 -3 -6 -4 -6 1 c 0 5 6 4 6 1.5"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 58 48.5 c 0 -3 -6 -4 -6 1 c 0 5 6 4 6 1.5"}}
                animate={{d: "M 55 48.5 c 0 -3 -6 -4 -6 1 c 0 5 6 4 6 1.5"}}
                transition={{...transition}}
            />
            {/* hand2 */}
            <motion.path 
                d="M 11 48 c 13 -7 15 4 7 6"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 11 48 c 13 -7 15 4 7 6"}}
                animate={{d: "M 15 48 c 13 -7 15 4 7 6"}}
                transition={{...transition}}
            />
        </svg>
    )
}
export default Chubby;