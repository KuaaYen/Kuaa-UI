import { motion, Transition } from "motion/react";

const AnythingYouSay = () => {

    const transition = {
        duration: 0.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="0 39 80 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="4em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 54 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 20 42 l 2 0 l -2 2 l -1 0 l 1 -2 M 39 39 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth  */}
            <path
                d="M 25 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* blush */}
            <path 
                d="M 13 50 l 0 0 m 42 0 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand  */}
            <motion.path 
                d="M 71 52 c 6 -1 4 -3 -1 -7"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 71 52 c 6 -1 1 -4 -2 -5"}}
                animate={{d: "M 71 52 c 6 -1 3 -5 2 -10"}}
                transition={{...transition}}
            />
        </svg>
    )
}
export default AnythingYouSay;