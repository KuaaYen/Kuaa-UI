import { motion, Transition } from "motion/react";

const HighFive = () => {
    const transition = {
        duration: 0.1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition
    
    return (
        <svg viewBox="0 39 100 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="5em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 37 42 q 6 8 0 16 M 63 42 q -6 8 0 16 M 93 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* mouth*/}
            <path 
                d="M 22 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4 M 72 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />

            {/* eyes*/}
            <path 
                d="M 17 42 l 2 0 l -2 2 l -1 0 l 1 -2 M 31 42 l 2 0 l 1 2 l -1 0 l -2 -2 M 67 42 l 2 0 l -2 2 l -1 0 l 1 -2 M 81 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* blush */}
            <path 
                d="M 11 42 l 0 2 l -1.981 -0.455 m 0.682 2.08 l 1.299 -1.625 l 1.305 1.706 m -1.305 -1.706 l 1.909 -0.47 M 89 42 l 0 2 l -1.883 -0.697 m 0.605 2.418 l 1.278 -1.721 l 1.353 1.706 m -1.353 -1.706 l 1.837 -0.591"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />            
            {/* hand */}
            <motion.path 
                d="M 42 55 q 8 -3 8 -15 M 58 55 q -8 -3 -8 -15"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 42 55 q 8 -5 2 -15 M 58 55 q -8 -5 -3 -15"
                }}
                animate={{
                    d: "M 42 55 q 8 -3 8 -15 M 58 55 q -8 -3 -8 -15"
                }}
                transition={{...transition}}
            />
        </svg>
    )
}
export default HighFive;