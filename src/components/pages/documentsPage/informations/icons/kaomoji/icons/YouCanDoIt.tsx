import { motion, Transition } from "motion/react";

const YouCanDoIt = () => {

    const transition = {
        duration: 0.25,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="0 39 80 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="4em">
            {/* face */}
            <path 
                d="M 16 42 q -6 8 0 16 m 46 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* mouth  */}
            <path 
                d="M 36 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* eyes */}
            <path 
                d="M 31 49 l 0 0 m 16 0 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />   
            {/* eyebrows */}
            <path 
                d="M 29 40 l 2 0 l 1 2 l -1 0 l -2 -2 m 19 0 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* blush 1*/}
            <path 
                d="M 25 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* blush 2*/}
            <path 
                d="M 58 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand 1*/}
            <motion.path 
                d="M 10 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1 "
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 10 52 q -2 1 -3 -3 c -1 -7 -8 5 0 1"
                }}
                animate={{
                    d: "M 10 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1"
                }}
                transition={{...transition}}
            />
            {/* hand 2*/}
            <motion.path 
                d="M 70 52 q 0 -5 4 -7 c -10 4 -3 -7 0 -1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 70 52 q 0 -5 4 -7 c -10 4 -3 -7 0 -1"
                }}
                animate={{
                    d: "M 70 52 q 1 -2 5 -4 c -10 4 -3 -7 0 -1 "
                }}
                transition={{...transition}}
            />
        </svg>
    )
}
export default YouCanDoIt;