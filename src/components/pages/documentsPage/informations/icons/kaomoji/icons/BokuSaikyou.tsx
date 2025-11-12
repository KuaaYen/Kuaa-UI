import { motion } from "motion/react";

const BokuSaikyou = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '1em',
                width: '4em',
                display: 'inline-block',
            }}
        >
            
            <svg viewBox="0 40 80 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: '1em',
                    width: '4em',
                    zIndex: 1,
                }}
            >
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
            </svg>   
            
            {/* wave 1*/}
            <motion.svg 
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position:'absolute',
                    top:'40%',
                    left: '0%',
                    height: '0.5em',
                    width: '0.5em',
                    zIndex: 2,
                }}            
                initial={{
                    scale: 0,
                    y: '-50%',
                    x: '30%',
                    opacity: 0,
                }}
                animate={{
                    scale: 1.2,
                    y: '-50%',
                    x: '-20%',
                    opacity: [1 ,1, 0],
                }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    opacity: {
                        times: [0, 0.7, 1],
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                }}
            >
                <path 
                    d="M 50 10 C 10 20 10 80 50 90 C 20 76 20 24 50 10"
                    fill="currentColor" 
                    stroke="transparent" 
                    strokeWidth="0" 
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
            </motion.svg>

            {/* wave 2*/}
            <motion.svg 
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position:'absolute',
                    top:'40%',
                    left: '0%',
                    height: '0.5em',
                    width: '0.5em',
                    zIndex: 2,
                }}            
                initial={{
                    scale: 0,
                    y: '-50%',
                    x: '30%',
                    opacity: 0,
                }}
                animate={{
                    scale: 1.2,
                    y: '-50%',
                    x: '-20%',
                    opacity: [1 ,1, 0],
                }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: 0.75,
                    opacity: {
                        times: [0, 0.7, 1],
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: 0.75,
                    },
                }}
            >
                <path 
                    d="M 50 10 C 10 20 10 80 50 90 C 20 76 20 24 50 10"
                    fill="currentColor" 
                    stroke="transparent" 
                    strokeWidth="0" 
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
            </motion.svg>
        </div>
    )
}
export default BokuSaikyou;