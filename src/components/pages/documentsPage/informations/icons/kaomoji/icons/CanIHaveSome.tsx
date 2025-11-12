import { motion } from "motion/react";

const CanIHaveSome = () => {
    return (
        <svg viewBox="0 39 80 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    height: '1em',
                    width: '4em',
                    zIndex: 2,
                    // backgroundColor: 'rgb(255, 82, 82)',
                }}
        >
            {/* face */}
            <motion.path 
                d="M 5 44 q -4 7 0 14 M 39 44 q 4 7 0 14 
                M 10 42 l 1.5 2 m 21.5 -2 l -1.5 2 
                M 19.645 47.376 C 16.109 51.167 19.66 56.814 22 52 l 0 -3 l 0 3 C 24.612 56.869 27.973 51.508 24.262 47.268"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 5 44 q -4 7 0 14 M 39 44 q 4 7 0 14 M 10 42 l 1.5 2 M 33 42 l -1.5 2 M 19.645 47.376 C 16.109 51.167 19.66 56.814 22 52 l 0 -3 l 0 3 C 24.612 56.869 27.973 51.508 24.262 47.268"
                }}
                animate={{
                    d: "M 5 44 q -4 7 0 14 M 39 44 q 4 7 0 14 M 10 41.8 l 2 1.5 M 33 41.8 l -2 1.5 M 19.645 47.376 C 16.109 51.167 19.66 56.814 22 52 l 0 -3 l 0 3 C 24.612 56.869 27.973 51.508 24.262 47.268"
                }}

                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.1,
                }}
            />
            {/* eyes */}
            <path 
                d="M 12 50 l 0 0 M 32 50 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* star */}
            <path 
                d="M 47 41 l -1 2 l -2 1 l 2 1 l 1 2 l 1 -2 l 2 -1 l -2 -1 Z"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* chopstick */}
            <motion.path 
                d="M 53.979 42.67 L 72.679 53.642 L 72.388 53.865 L 53 44 Z M 50.956 51.115 L 72.478 54.5 L 72.256 54.819 L 51.194 52.418 Z"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: "M 53.776 45.101 L 71.695 49.322 L 71.71 49.654 L 52.713 45.897 Z M 51.436 51.474 L 71.121 52.743 L 71.194 53.068 L 51.785 52.516 Z"
                }}
                animate={{
                    // d: "M 51.895 46.343 L 73.255 44.202 L 73.441 44.582 L 51.536 47.648 Z M 50.956 51.115 L 71.884 56.652 L 71.918 57.052 L 51.194 52.418 Z"
                    d: "M 52.584 45.321 L 72.52 45.307 L 72.422 45.776 L 51.993 46.252 Z M 51.436 51.474 L 71.345 55.671 L 71.228 56.132 L 51.785 52.516 Z"
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.1,
                }}
            />
        </svg> 
    )
}
export default CanIHaveSome;