import { motion, Transition } from "motion/react";

const Blush2 = () => {

    const transition = {
        duration: 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition


    return (
        <svg viewBox="0 39 66 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="3.3em">
            {/* face */}
            <path 
                d="M 7 42 q -6 8 0 16 M 59 42 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />             
            {/* mouth  */}
            <path
                d="M 28 44 l 4 11 l 5 -11 m -7.5 3.5 l 6 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* blush1 */}
            <motion.path 
                d="M 15 44 l 1.5 0.5 l -3.5 8.5 l -0.7 -0.3 l 2.7 -8.7"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{rotate: 0}}
                animate={{rotate: -30}}
                transition={{...transition}}
            />
            {/* blush2 */}
            <motion.path 
                d="M 20 44 l 1.5 0.5 l -3.5 8.5 l -0.7 -0.3 l 2.7 -8.7"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{rotate: 0}}
                animate={{rotate: -30}}
                transition={{...transition}}
            />
            {/* blush3 */}
            <motion.path 
                d="M 51 44 l 1.5 0.5 l -3.5 8.5 l -0.7 -0.3 l 2.7 -8.7"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{rotate: 0}}
                animate={{rotate: -30}}
                transition={{...transition}}
            />
            {/* blush4 */}
            <motion.path 
                d="M 46 44 l 1.5 0.5 l -3.5 8.5 l -0.7 -0.3 l 2.7 -8.7"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{rotate: 0}}
                animate={{rotate: -30}}
                transition={{...transition}}
            />

        </svg>
    )
}
export default Blush2;