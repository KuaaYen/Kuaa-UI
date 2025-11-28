import { motion, Transition } from "motion/react";

const Cool = () => {

    const transition = {
        duration: 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        // repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 75 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.75em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 51 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* mouth  */}
            <path 
                d="M 34 42.5 l 10 0 c 1 4 0 11 -5 11 c -5 0 -6 -7 -5 -11 Z"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* eyes */}
            <path 
                d="M 29 42.25 l 1 0 l 0 1 l -1 0 l 0 -1 Z M 48 42.25 l 1 0 l 0 1 l -1 0 l 0 -1 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            /> 
            {/* hand 1*/}
            <motion.path 
                d="M 14 54 c 4 0 8 -3 7 -8 c -2 -6 -10 -2 -5 2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 14 54 c 4 0 8 -3 7 -8 c -2 -6 -10 -2 -5 2"
                }}
                animate={{
                    d: "M 14 54 c 4 0 9 -2 9 -7 c 0 -6 -9 -4 -6 2",
                }}
                transition={{...transition}}
            />

            {/* hand 2*/}
            <motion.path 
                d="M 63 54 c 4 0 8 -3 7 -8 c -2 -6 -10 -2 -5 2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 63 54 c 4 0 9 -2 9 -7 c 0 -6 -9 -4 -6 2",
                }}
                animate={{
                    d: "M 63 54 c 4 0 8 -3 7 -8 c -2 -6 -10 -2 -5 2"
                }}
                transition={{...transition}}
            />

        </svg>
    )
}
export default Cool;