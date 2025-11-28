import { motion, Transition } from "motion/react";

const Blush = () => {

    const transition = {
        duration: 0.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="0 39 70 20" xmlns="http://www.w3.org/2000/svg" height="1em" width="3.5em">
            {/* face */}
            <path 
                d="M 12 42 q -6 8 0 16 m 45 -16 q 6 8 0 16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            {/* mouth */}
            <path  
                d="M 32 46 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />         
            {/* blush */}
            <motion.path 
                d="M 10.5 42 l -9 14 M 18 42 l -9 14 M 25.5 42 l -9 14 M 33 42 l -9 14 M 45.5 42 l -9 14 M 53 42 l -9 14 M 60.5 42 l -9 14 M 68 42 l -9 14"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{
                    d: `M 10.5 42 l -9 14
                        M 18 42 l -6 9.5
                        M 25.5 42 l -9 14
                        M 33 42 l -6 9.5
                        M 45.5 42 l -9 14
                        M 53 42 l -6 9.5
                        M 60.5 42 l -9 14
                        M 68 42 l -6 9.5`
                }}
                animate={{
                    d: `M 10.5 42 l -6 9.5
                        M 18 42 l -9 14 
                        M 25.5 42 l -6 9.5
                        M 33 42 l -9 14 
                        M 45.5 42 l  -6 9.5
                        M 53 42 l -9 14 
                        M 60.5 42 l -6 9.5
                        M 68 42 l -9 14`
                }}
                transition={{...transition}}
            />
        </svg>
    )
}
export default Blush;