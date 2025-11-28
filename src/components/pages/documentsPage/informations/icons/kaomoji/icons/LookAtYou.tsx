import { motion, Transition } from "motion/react";

const LookAtYou = () => {

    const transition = {
        duration: 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        // repeatDelay: 0.1,
    } as Transition


    return (
        <svg viewBox="0 39 55 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="2.75em">
            {/* face */}
            <path 
                d="M 37 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 14 42 l 2 0 l 1 2 l -1 0 l -2 -2 m 19 0 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth  */}
            <path
                d="M 20 44 l 4 11 l 5 -11 m -7.5 3.5 l 6 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* hand1 */}
            <motion.path 
                d="M 7 46.5 c -5 0 -5 9 0 9 c 5 0 5 -9 0 -9 l 5 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{x:"0%"}}
                animate={{x:"10%"}}
                transition={{...transition}}
            />
            {/* hand2 */}
            <motion.path 
                d="M 46 46.5 c -5 0 -5 9 0 9 c 5 0 5 -9 0 -9 l 5 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{x:"10%"}}
                animate={{x:"0%"}}
                transition={{...transition, delay: 0.1}}
            />

        </svg>
    )
}
export default LookAtYou;