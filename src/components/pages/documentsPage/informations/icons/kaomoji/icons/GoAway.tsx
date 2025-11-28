import { motion } from "motion/react";

const GoAway = () => {

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
                d="M 36 46 c -4 7 2 10 3 4 l 0 -2 l 0 2 c 1 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyes */}
            <path 
                d="M 30.5 48 l 0 0 m 17 0 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* eyebrows */}
            <path 
                d="M 29 39 l 2 0 l 1 2 l -1 0 l -2 -2 M 48 39 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* brow1 */}
            <path 
                d="M 37.1 44 q 1.2 -0.1 1.2 -1.35 l 0 -1 l -1 0 l 0 0.5 l 1 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* brow2 and fill */}
            <path 
                d="M 40 41.3 l 2 0 l -2 2 l -1 0 l 1 -2 M 37.5 41.5 l 0 1 l 1 0 l 0 -1"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* hand */}
            <motion.path 
                d="M 8 50 q 10 -1 10 -10 M 58 50 q 10 -1 10 -10"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 8 50 q 6 2 13 -4 M 58 50 q 6 2 12 -5"
                }}
                animate={{
                    d: "M 8 50 q 10 -1 10 -10 M 58 50 q 10 -1 10 -10"
                }}
                transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    // repeatDelay: 0.5,
                }}
            />
        </svg>
    )
}
export default GoAway;