import { motion, Transition } from "motion/react";

const YeahOkSure = () => {

    const transition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.1,
    } as Transition

    return (
        <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 53 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* mouth */}
            <path
                d="M 27 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyes */}
            <path 
                d="M 21.5 49 l 0 0 m 17 0 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* eyebrows */}
            <motion.path 
                d="M 14 42 c 0 2 4 2 4 0 M 42 42 c 0 2 4 2 4 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 14 42 c 0 2 4 2 4 0 M 42 42 c 0 2 4 2 4 0"}}
                animate={{d: "M 14 42 c 0 1 4 1 4 0 M 42 42 c 0 1 4 1 4 0"}}
                transition={{...transition}}
            />
        </svg>
    )
}
export default YeahOkSure;