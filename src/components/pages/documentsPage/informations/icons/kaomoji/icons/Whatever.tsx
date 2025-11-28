import { motion, Transition } from "motion/react";

const Whatever = () => {

    const handTransition = {
        duration: 0.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    const faceTransition = {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        delay: 0.3,
    } as Transition

    const svgStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '1em',
        width: '3.5em',
    } as React.CSSProperties;

    return (
        <div
        style={{
            position: 'relative',
            height: '1em',
            width: '3.5em',
            display: 'inline-block',
        }}
        >
            <svg viewBox="-1 39 70 20" xmlns="http://www.w3.org/2000/svg" style={{...svgStyle, zIndex: 1}}>
                {/* face */}
                <path 
                    d="M 7 42 q -6 8 0 16 M 63 42 q 6 8 0 16"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* mouth  */}
                <motion.path 
                    d="M 17 54 l 5 -12 l 5 12 m -8 -4 l 6 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                    initial={{
                        d: "M 18.5 54.3 l 5 -12 l 5 12 m -8 -4 l 6 0"
                    }}
                    animate={{
                        d: "M 18 54 l 5 -12 l 5 12 m -8 -4 l 6 0"
                    }}
                    transition={{...faceTransition}}
                />
                {/* eye1 */}
                <motion.path 
                    d="M 11 42 l 2 0 l -2 2 l -1 0 l 1 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                        d: "M 11.3 42 l 2 0 l -2 2 l -1 0 l 1 -2"
                    }}
                    animate={{
                        d: "M 11 42 l 2 0 l -2 2 l -1 0 l 1 -2"
                    }}
                    transition={{...faceTransition}}
                />
                {/* hand */}
                <motion.path 
                    d="M 55 47 a 2 2 0 0 0 0 4 a 2 2 0 0 0 0 -4"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                        d: "M 49 52 a 2 2 0 0 0 0 4 a 2 2 0 0 0 0 -4"
                    }}
                    animate={{
                        d: "M 55 47 a 2 2 0 0 0 0 4 a 2 2 0 0 0 0 -4"
                    }}
                    transition={{...handTransition}}
                />
            </svg>
            <svg viewBox="-1 39 70 20" xmlns="http://www.w3.org/2000/svg" style={{...svgStyle, transform: 'translateY(-15%)', zIndex: 2}}>
                {/* eye2 */}
                <path 
                    d="M 36 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}
export default Whatever;