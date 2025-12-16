import { motion, Transition } from "motion/react";

const Why = () => {

    const eyesTransition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const mouthTransition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    return (
        <svg viewBox="0 39 52 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="2.6em">           
            {/* eyes */}
            <motion.path 
                d={`M 18 58 c 0 -7 1 -16 -7 -16 c -10 0 -10 13 0 15 c 4.532 1.246 5.713 -2.118 2.9 -3.579 
                c -1.958 -1.46 -6.013 -1.341 -8.144 -0.066 c -5.169 2.792 1.288 7.243 7.12 0.979 
                c 2.975 -4.109 1.175 -9.525 -3.503 -8.666 c -3 1 -2 5 1 4 c 2 -1 1 -4 -1 -4
                M 48 58 c 0 -7 1 -16 -7 -16 c -10 0 -10 13 0 15 c 4.532 1.246 5.713 -2.118 2.9 -3.579 
                c -1.958 -1.46 -6.013 -1.341 -8.144 -0.066 c -5.169 2.792 1.288 7.243 7.12 0.979 
                c 2.975 -4.109 1.175 -9.525 -3.503 -8.666 c -3 1 -2 5 1 4 c 2 -1 1 -4 -1 -4`}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{x: '0%',y: '0%'}}
                animate={{
                    x: ['-0.3%', '0.3%', '-0.3%', '0.3%', '-0.3%'],
                    y: ['0%', '0%', '-0.5%', '-0.5%', '0%'],
                }}
                transition={{...eyesTransition}}
            />
            {/* mouth  */}
            <motion.path
                d="M 21 54 Q 23 52 23 45 L 29 45 L 29 54 M 20.5 57 l 0 -3 l 9.5 0 L 30 57"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={{d: "M 21 53.5 Q 23 52 23 45 L 29 45 L 29 53.5 M 20.5 57 l 0 -3.5 l 9.5 0 L 30 57"}}
                animate={{d: "M 21 54.5 Q 23 52 23 45 L 29 45 L 29 54.5 M 20.5 57 l 0 -2.5 l 9.5 0 L 30 57"}}
                transition={{...mouthTransition}}
            />

        </svg>
    )
}
export default Why;