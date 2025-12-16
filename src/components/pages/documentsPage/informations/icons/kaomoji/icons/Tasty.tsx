import { motion, Transition } from "motion/react";

const Tasty = () => {

    const transition = {
        duration: 0.7,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.2,
    } as Transition

    return (
        <svg viewBox="0 39 62 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.1em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 55 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* eyes */}
            <path 
                d="M 22 42 l 2 0 l -2 2 l -1 0 l 1 -2 M 38 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* mouth  */}
            <path
                d="M 26 47 c -2 4 1 4 6 4 l 5 0 l 0 1 l -8.5 0 c -5 0 -4 -3 -2.8 -5 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* tongue */}
            <motion.path 
                d="M 36.5 51.5 l 0 -2 c -0.5 -4.5 -4.5 1.5 0 1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    x: '-350%',
                    y: '0%',
                    scale: 0,
                    rotate: 0,
                }}
                animate={{
                    x: ['-400%', '80%'],
                    y: ['50%','0%', '0%', '50%'],
                    scale: [0,1,1,0],
                    rotate: [-30, 60],
                }}
                transition={{
                    x: {...transition, times: [0, 0.7]},
                    y: {...transition, times: [0, 0.3, 0.7, 1]},
                    scale: {...transition, times: [0, 0.3, 0.7, 1]},
                    rotate: {...transition, times: [0, 0.7]},
                }}
            />
            {/* blush 1*/}
            <path 
                d= {`M 16 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 
                    a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117`}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* blush 2*/}
            <path 
                d={`M 51 54 c 3 -6 -3 -8 -5 -5 c -2.408 3.715 3.378 6.953 3.573 2.133 
                    a 1 1 0 0 0 -1.823 -0.76 a 1 1 0 0 0 1.6 1.117`}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default Tasty;