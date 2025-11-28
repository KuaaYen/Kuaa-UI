import { motion } from "motion/react";

const ThrowPetals = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '1em',
                width: '4em',
                display: 'inline-block',
            }}
        >
            <svg viewBox="0 39 80 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '4em',
                    zIndex: 2,
                }}
            >
                {/* face */}
                <path 
                    d="M 18 42 q -6 8 0 16 m 44 -16 q 6 8 0 16"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                />
                {/* blush */}
                <path 
                    d="M 23 42 l 0 2 l -1.849 -0.455 m 0.775 2.119 l 1.074 -1.664 l 1.514 1.604 m -1.514 -1.604 l 1.999 -0.546 m 31.001 -1.454 l 0 2 m -1.8 -0.712 l 1.8 0.712 l -1.075 1.343 m 2.554 0.131 l -1.479 -1.474 l 1.957 -0.818"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                />
                {/* hands */}
                <motion.path 
                    d="M 7 52 q -2.653 -4.55 -5.38 -6.017 M 67 55 q 4.925 -4.664 6 -13"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{
                        // d: "M 7 52 q -3.148 1.259 -4.544 4.493 M 67 55 q 6.478 -2.994 8.06 2.196"
                        d: "M 7 52 q -3.148 1.259 -4.544 4.493 M 68.047 50.393 q 4.67 0.153 7.086 5.318"
                    }}
                    animate={{
                        d: [
                            "M 7 52 q -3.148 1.259 -4.544 4.493 M 68.047 50.393 q 4.67 0.153 7.086 5.318",
                            "M 7 52 q -2.653 -4.55 -5.38 -6.017 M 67 55 q 4.925 -4.664 6 -13",
                            "M 7 52 q -2.653 -4.55 -5.38 -6.017 M 67 55 q 4.925 -4.664 6 -13",
                            "M 7 52 q -3.148 1.259 -4.544 4.493 M 68.047 50.393 q 4.67 0.153 7.086 5.318",
                        ]
                    }}
                    transition={{
                        times: [0, 0.2, 0.5, 1],
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 0.3,
                    }}
                />                
            </svg>   

            <motion.svg viewBox="0 39 80 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '4em',
                    zIndex: 3,
                }}
                initial={{
                    y: '0%',
                }}
                animate={{
                    y: ['0%', '-5%', '-5%', '0%'],
                }}
                transition={{
                    times: [0, 0.2, 0.5, 1],
                    duration: 1,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0.3,
                }}
            >
                {/* eyes */}
                <path 
                    d="M 28 42 l 2 0 l -2 2 l -1 0 l 1 -2 m 19.5 0 l 2 0 l 1 2 l -1 0 l -2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* mouth */}
                <path 
                    d="M 32 44 l 4 11 l 5 -11 m -7.5 3.5 l 6 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                />
            </motion.svg>   
        </div>
    )
}
export default ThrowPetals;