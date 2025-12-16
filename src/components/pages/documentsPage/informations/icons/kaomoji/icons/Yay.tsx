import { motion, Transition } from "motion/react";

const Yay = () => {

    const transition = {
        duration: 0.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="2 39 80 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="4em">
            {/* face */}
            <path 
                d="M 20 42 q -6 8 0 16 m 46 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* hand */}
            <motion.path 
                d="M 11 52 q -2 -4 -5 -6 M 72 54 q 4 -4 6 -12"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 11 52 Q 9 48 6 47 M 72 54 Q 76 49 74 42"}}
                animate={{d: "M 11 52 Q 9 47 10 43 M 72 54 Q 77 50 78 44"}}
                transition={{...transition}}
            />
            {/* eyes */}
            <path 
                d="M 34.5 42 l 2 0 l -2 2 l -1 0 l 1 -2 m 17 0 l -2 0 l 2 2 l 1 0 l -1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth */}
            <path 
                d="M 38.5 44 l 4 11 l 5 -11 m -7.5 3.5 l 6 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="bevel"
            />
            {/* blush */}
            <path 
                d="M 26 50 l 0 0 m 33 0 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default Yay;