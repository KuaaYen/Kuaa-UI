import { motion, Transition } from "motion/react";

const ThatsNonsense = () => {

    const transition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 55 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="2.75em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 40 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <motion.path 
                d="M 16 49 l 0 0 M 38 49 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{d: "M 16.5 49 l 0 0 M 38.5 49 l 0 0"}}
                animate={{d: "M 16 49 l 0 0 M 38 49 l 0 0"}}
                transition={{...transition}}
            />
            {/* mouth  */}
            <motion.path 
                d="M 26 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 25.5 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"}}
                animate={{d: "M 26 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"}}
                transition={{...transition}}
            />
            {/* eyebrows */}
            <motion.path 
                d="M 19 39 l 2 0 l 1 2 l -1 0 l -2 -2 M 38 39 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{d: "M 18 39 l 2 0 l 1 2 l -1 0 l -2 -2 M 38 39 l 2 0 l -2 2 l -1 0 l 1 -2"}}
                animate={{d: "M 19 39 l 2 0 l 1 2 l -1 0 l -2 -2 M 38 39 l 2 0 l -2 2 l -1 0 l 1 -2"}}
                transition={{...transition}}
            />
        </svg>
    )
}
export default ThatsNonsense;