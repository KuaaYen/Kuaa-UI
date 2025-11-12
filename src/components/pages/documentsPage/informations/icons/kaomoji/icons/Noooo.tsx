import { motion, Transition } from "motion/react";

const Noooo = () => {
    const transition = {
        times: [0, 0.2, 0.5, 1],
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.5,
    } as Transition

    return (
        <div
            style={{
                position: 'relative',
                height: '1em',
                width: '3em',
                display: 'inline-block',
            }}
        >
            <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '3em',
                    zIndex: 1,
                }}
            >
                {/* face */}
                <path 
                    d="M 7 42 q -6 8 0 16 m 35 -16 q 6 8 0 16"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />       
                {/* hand */}
                <motion.path 
                    d="M 9 46 c 13 -8 15 3 5 7"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{
                        d: "M 9 46 c 13 -8 15 3 5 7"
                    }}
                    animate={{
                        d: [
                            "M 9 46 c 13 -8 15 3 5 7",
                            "M 9 46 c 15 -8 16 5 5 7",
                            "M 9 46 c 15 -8 16 5 5 7",
                            "M 9 46 c 13 -8 15 3 5 7",
                        ]
                    }}
                    transition={{...transition}}
                />
                {/* eye */}
                <motion.path 
                    d="M 35 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                        d: "M 35 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                    }}
                    animate={{
                        d: [
                            "M 35 42 l 2 0 l 1 2 l -1 0 l -2 -2",
                            "M 35.5 42 l 2 0 l 1 2 l -1 0 l -2 -2",
                            "M 35.5 42 l 2 0 l 1 2 l -1 0 l -2 -2",
                            "M 35 42 l 2 0 l 1 2 l -1 0 l -2 -2",
                        ]
                    }}
                    transition={{...transition}}
                />
                {/* hand2 */}
                <motion.path 
                    d="M 48 55 Q 56 49 56 42"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{
                        d: "M 48 55 Q 53 48 52 42"
                    }}
                    animate={{
                        d: [
                            "M 48 55 Q 53 48 52 42",
                            "M 48 55 Q 56 49 56 42",
                            "M 48 55 Q 56 49 56 42",
                            "M 48 55 Q 53 48 52 42",
                        ]
                    }}
                    transition={{...transition}}
                />                
            </svg>
            <motion.svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '3em',
                    zIndex: 2,
                }}
                initial={{
                    x: '0%',
                }}
                animate={{
                    x: ['0%', '2%', '2%', '0%'],
                }}
                transition={{...transition}}
            >
                {/* mouth */}
                <motion.path 
                    d="M 23.5 54 Q 26 52 26 42 L 32 42 L 32 54 M 23 58 l 0 -4 l 10 0 L 33 58"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{
                        d: "M 23.5 53.5 Q 26 51.5 26 42 L 32 42 L 32 53.5 M 23 58 l 0 -4.5 l 10 0 L 33 58"
                    }}
                    animate={{
                        d: [
                            "M 23.5 53.5 Q 26 51.5 26 42 L 32 42 L 32 53.5 M 23 58 l 0 -4.5 l 10 0 L 33 58",
                            "M 23.5 54.5 Q 26 52.5 26 42 L 32 42 L 32 54.5 M 23 58 l 0 -3.5 l 10 0 L 33 58",
                            "M 23.5 54.5 Q 26 52.5 26 42 L 32 42 L 32 54.5 M 23 58 l 0 -3.5 l 10 0 L 33 58",
                            "M 23.5 53.5 Q 26 51.5 26 42 L 32 42 L 32 53.5 M 23 58 l 0 -4.5 l 10 0 L 33 58",
                        ]
                    }}
                    transition={{...transition}}
                />
            </motion.svg>
        </div>
    )
}
export default Noooo;