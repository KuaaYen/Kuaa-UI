import { motion, Transition } from "motion/react";

const BokuSaikyou = () => {
     
    const waveTransition = {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const createWave = (delay: number) => {
        return (
            <motion.path
                d="M 10 43 c -5 0 -5 10 0 10 c -4 -1 -4 -9 0 -10"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{x: '100%', scale: 0, opacity: 0}}
                animate={{x: '-120%', scale: 1, opacity: [1, 1, 0]}}
                transition={{
                    x : {...waveTransition, delay: delay},
                    scale : {...waveTransition, delay: delay},
                    opacity : {...waveTransition, times: [0, 0.7, 1], delay: delay},
                }}
            />
        )
    }

    return (
        <svg viewBox="0 40 80 20" xmlns="http://www.w3.org/2000/svg" width="4em" height="1em">
            {/* shoulder */}
            <path 
                d="M 13 58 l 0 -9 l 5 0 m 54 0 l 5 0 l 0 9"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* face */}
            <path
                d="M 22 44 q -6 7.5 0 15 m 45.5 -15 q 6 7.5 0 15"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />

            {/* eyelash left */}
            <motion.path
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: `M 27.5 42 Q 35.233 41.918 37.5 41.9 M 27.5 43.4 Q 37.5 43.4 37.5 43.4`
                }}
                animate={{
                    d: `M 27.5 42 Q 35 42 37.195 40.972 M 27.5 43.4 Q 35.463 43.018 37.32 42.851`
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            {/* eyelash right */}
            <motion.path
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: `M 55.5 42 Q 65.5 41.9 65.5 41.9 M 55.5 43.4 Q 65.5 43.4 65.5 43.4`
                }}
                animate={{
                    d: `M 55.5 42 Q 63.768 41.918 65.219 40.951 M 55.5 43.4 Q 63.762 43.086 65.385 42.84`
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />
            {/* mouth */}
            <path
                d="M 38.5 49.9 c 0 6 10 6 10 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* eyes */}
            <path 
                d="M 26 41.95 l 8 0 l 0 6 l -8 0 Z M 54 41.95 l 8 0 l 0 6 l -8 0 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {createWave(0)}
            {createWave(0.5)}
            {createWave(1)}
        </svg>
    )
}
export default BokuSaikyou;