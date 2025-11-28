import { motion, Transition } from "motion/react";

const ImJustAKid = () => {

    const transition = {
        duration: 0.15,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        // repeatDelay: 0.2,
    } as Transition

    const eyebrowTransition = {
        duration: 0.8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 m 46 -16 q 6 7 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyes */}
            <path 
                d="M 21 49 l 0 0 M 39 49 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />                
            {/* mouth  */}
            <motion.path 
                d="M 29 50 c 2 -2 4 1 1.043 1.611 c 2.561 -0.481 2.3 3.286 -1.081 2.109"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    d: "M 29 50 c 2 -2 4 1 1.043 1.611 c 2.561 -0.481 2.3 3.286 -1.081 2.109"
                }}
                animate={{
                    d: "M 29.5 50 c 2 -2 4 1 1.043 1.611 c 2.561 -0.481 2.3 3.286 -1.081 2.109"
                }}
                transition={{...transition}}
            />
            {/* eyebrows */}
            <motion.path 
                d="M 22 39 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    d: "M 22 39 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39 l 2 0 l 1 2 l -1 0 l -2 -2"
                }}
                animate={{
                    d: [
                        "M 22 39.5 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39.5 l 2 0 l 1 2 l -1 0 l -2 -2",
                        "M 22 39 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39 l 2 0 l 1 2 l -1 0 l -2 -2",
                        "M 22 39.5 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39.5 l 2 0 l 1 2 l -1 0 l -2 -2",
                        "M 22 39 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39 l 2 0 l 1 2 l -1 0 l -2 -2",
                        "M 22 39.5 l 2 0 l -2 2 l -1 0 l 1 -2 M 37 39.5 l 2 0 l 1 2 l -1 0 l -2 -2",
                    ]
                }}
                transition={{...eyebrowTransition}}
            />
            {/* blush 1*/}
            <path 
                d="M 15 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* blush 2*/}
            <path 
                d="M 50 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default ImJustAKid;