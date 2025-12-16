import { motion, Transition } from "motion/react";

const Fantastic = () => {

    const transition = {
        times: [0, 0.2, 0.5, 1],
        duration: 0.8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 70 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.5em">
            {/* face */}
            <path 
                d="M 15 42 q -6 8 0 16 m 35 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* mouth  */}
            <path 
                d="M 24 42.5 l 10 0 c 1 4 0 11 -5 11 c -5 0 -6 -7 -5 -11 Z"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* eyes */}
            <path 
                d="M 19 42 l 2 0 l -2 2 l -1 0 l 1 -2 m 18 0 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* blush */}
            <path 
                d="M 45 42 l 0 2 l -1.903 -0.591 m 0.761 2.191 l 1.142 -1.6 l 1.267 1.715 m -1.267 -1.715 l 1.845 -0.47"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* hand 1*/}
            <motion.path 
                d="M 9 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 9 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1"}}
                animate={{
                    d:[
                        "M 9 52 q -3 0 -2 -4 c -1 -7 -8 5 0 1",
                        "M 9 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1",
                        "M 9 52 q -2 0 -2 -7 c -1 -7 -8 5 0 1",
                        "M 9 52 q -3 0 -2 -4 c -1 -7 -8 5 0 1",
                    ]
                }}
                transition={{...transition}}
            />
            {/* hand 2*/}
            <motion.path 
                d="M 55 54 q 8 2 7 -6 c -1 -4 -5 3 0 2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 55 54 q 8 2 7 -6 c -1 -4 -5 3 0 2"}}
                animate={{
                    d: [
                        "M 55 54 q 6 0 5 -9 c -1 -4 -5 3 0 2",
                        "M 55 54 q 8 2 7 -6 c -1 -4 -5 3 0 2",
                        "M 55 54 q 8 2 7 -6 c -1 -4 -5 3 0 2",
                        "M 55 54 q 6 0 5 -9 c -1 -4 -5 3 0 2",
                    ]
                }}
                transition={{...transition}}
            />
        </svg>
    )
}
export default Fantastic;