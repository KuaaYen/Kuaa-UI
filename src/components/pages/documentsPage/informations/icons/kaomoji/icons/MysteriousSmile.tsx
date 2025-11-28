import { motion } from "motion/react";

const MysteriousSmile = () => {

    return (
        <svg viewBox="-1 39 60 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 51 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* nose */}
            <path 
                d="M 30 42 l 0 4 c 2 0 3 2 3 4 c 0 5 -5 5 -6 2"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyes */}
            <path 
                d="M 16 42.5 a 2 2 0 0 0 0 4 a 2 2 0 0 0 0 -4 M 44 42.5 a 2 2 0 0 0 0 4 a 2 2 0 0 0 0 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* eyebrows */}
            <motion.path 
                d="M 12 44.4 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 12 44.4 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0"
                }}
                animate={{
                    d: [
                        "M 12 44.4 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0",
                        "M 12 43.9 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0",
                        "M 12 44.4 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0",
                        "M 12 43.9 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0",
                        "M 12 44.4 c 3 -4.5 11 -4.5 14 0 m 14 0 c 3 -4.5 11 -4.5 14 0",
                    ]
                }}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.5,
                }}
            />
            {/* mouth */}
            <path 
                d="M 25 55.5 C 28 58.5 35 58.5 38 55.5"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
        </svg>
    )
}
export default MysteriousSmile;