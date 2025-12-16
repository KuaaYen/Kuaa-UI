import { motion, Transition } from "motion/react";

const CanIHaveSome = () => {
    const transition = {
        duration: 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.1,
    } as Transition

    const faceTransition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.3,
    } as Transition

    return (
        <svg viewBox="-1 39 100 20" xmlns="http://www.w3.org/2000/svg" width="5em" height="1em">
            {/* face */}
            <motion.path
                d="M 7 42 q -6 8 0 16 M 53 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyes */}
            <motion.path 
                d="M 17 49 l 0 0 M 43 49 l 0 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{x: '0%'}}
                animate={{x: '3%'}}
                transition={{...faceTransition}}
            />
            {/* mouth */}
            <motion.path 
                d="M 27 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{x: '0%'}}
                animate={{x: '5%'}}
                transition={{...faceTransition}}
            />
            {/* eyebrow1 */}
            <path 
                d="M 15 39 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyebrow2 */}
            <path 
                d="M 44 39 l 2 0 l -2 2 l -1 0 l 1 -2"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* star */}
            <motion.path 
                d="M 65 43 l -1 4 l -4 1 l 4 1 l 1 4 l 0 1 q -1 -5 -6 -6 q 5 -1 6 -6 l 0 1 l 1 4 l 4 1 l -4 1 l -1 4 l 0 1 q 1 -5 6 -6 q -5 -1 -6 -6"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{...faceTransition}}
            />
            {/* chopstick */}
            <motion.path 
                d="M 76 44 L 96 51 L 95.766 51.632 L 75 45 Z M 74 52 L 95.373 53.99 L 95.273 54.719 L 73.306 53.113 Z"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{ d:"M 73.918 46.656 L 95.253 45.011 L 95.315 45.6 L 73.431 47.81 Z M 74.096 51.107 L 95.141 55.671 L 94.811 56.142 L 73.321 52.208 Z"}}
                animate={{d:"M 76 44 L 96 51 L 95.766 51.632 L 75 45 Z M 74 52 L 95.373 53.99 L 95.273 54.719 L 73.306 53.113 Z"}}
                transition={{...transition}}
            />
        </svg> 
    )
}
export default CanIHaveSome;