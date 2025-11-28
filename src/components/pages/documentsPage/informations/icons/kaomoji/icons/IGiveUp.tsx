import { motion } from "motion/react";

const IGiveUp = () => {

    return (
        <svg viewBox="0 39 74 20" xmlns="http://www.w3.org/2000/svg" height="1em">
            {/* body */}
            <path 
                d="M 18 42 q -6 8 0 16 m 43 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />            
            {/* eyes */}
            <motion.path 
                d="M 23 45 l 1 0 l 0 1 l -1 0 l 0 -1 Z M 23 53 l 1 0 l 0 1 l -1 0 l 0 -1 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 23 45 l 1 0 l 0 1 l -1 0 l 0 -1 Z M 23 53 l 1 0 l 0 1 l -1 0 l 0 -1 Z"}}
                animate={{d: "M 23 46.5 l 1 0 l 0 1 l -1 0 l 0 -1 Z M 23 54 l 1 0 l 0 1 l -1 0 l 0 -1 Z"}}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.5,
                }}
            />
            {/* limbs */}
            <motion.path 
                d="M 3 58 l 11 0 M 37 47 L 37 58 L 27 58 M 51 47 l -4 11 l 10 0 M 65 58 l 13 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 3 58 l 11 0 M 37 47 L 37 58 L 27 58 M 51 47 l -4 11 l 10 0 M 65 58 l 13 0"
                }}
                animate={{
                    d: [
                        "M 3 58 l 11 0 M 37 47 L 37 58 L 27 58 M 51 47 l -4 11 l 10 0 M 65 58 l 13 0",
                        "M 3 58 l 11 0 M 37 47 L 37 58 L 27 56 M 51 47 l -4 11 l 10 0 M 65 58 l 13 0",
                        "M 3 58 l 11 0 M 37 47 L 37 58 L 27 58 M 51 47 l -4 11 l 10 0 M 65 58 l 13 0",
                    ]
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.3,
                }}
            />
        </svg>
    )
}
export default IGiveUp;