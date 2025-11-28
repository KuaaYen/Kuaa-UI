import { motion, Transition } from "motion/react";

const Shy = () => {

    const transition = {
        duration: 0.15,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="0 39 70 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3.5em">
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
                d="M 21 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* hand 1 */}
            <motion.path 
                d="M 14 55 l 3 -13"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 14 55 l 3 -13"
                }}
                animate={{
                    d: "M 14 55 l 4 -13"
                }}
                transition={{...transition}}
            />
            {/* hand 2 */}
            <motion.path 
                d="M 45 55 l -15 -15"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 45 55 l -15 -15"
                }}
                animate={{
                    d: "M 45 55 l -16 -14"
                }}
                transition={{...transition}}
            />
            {/* blush */}
            <path 
                d="M 11 42 l 0 2 l -1.864 -0.455 m 0.676 2.195 l 1.188 -1.74 l 1.423 1.827 m -1.423 -1.827 l 1.875 -0.455 M 49 42 l 0 2 l -1.808 -0.591 m 0.495 2.312 l 1.313 -1.721 l 1.46 1.836 m -1.46 -1.836 l 1.94 -0.591"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
        </svg>
    )
}
export default Shy;