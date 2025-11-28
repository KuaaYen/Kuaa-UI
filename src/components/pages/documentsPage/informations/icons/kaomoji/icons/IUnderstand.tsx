import { motion, Transition } from "motion/react";

const IUnderstand = () => {

    const faceTransition = {
        duration: 0.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.2,
    } as Transition

    const tearsTransition = {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const svgStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '1em',
        width: '3em',
    } as React.CSSProperties;

    return (
        <div
        style={{
            position: 'relative',
            height: '1em',
            width: '3em',
            display: 'inline-block',
        }}
        >
            <svg viewBox="1 39 60 20" xmlns="http://www.w3.org/2000/svg" style={{...svgStyle, zIndex: 1}}>
                {/* face */}
                <path 
                    d="M 7 42 q -6 8 0 16 M 56 42 q 6 8 0 16"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* phone */}
                <path 
                    d="M 40 44 l 8 0 l 0 11 l -8 0 l 0 -11 Z"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* tears */}
                <motion.path 
                    d="M 18 56 a 1 1 0 0 0 0 2 a 1 1 0 0 0 0 -2"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                        d: "M 18 51 a 0 0 0 0 0 0 0 a 0 0 0 0 0 0 0",
                        opacity: 1,
                    }}
                    animate={{
                        d: "M 18 57 a 1 1 0 0 0 0 2 a 1 1 0 0 0 0 -2",
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        d: {
                            ...tearsTransition
                        },
                        opacity: {
                            times: [0, 0.3, 0.6, 0.9],
                            ...tearsTransition,
                        },
                    }}
                />            
            </svg>
            <svg viewBox="1 39 60 20" xmlns="http://www.w3.org/2000/svg" style={{...svgStyle, transform: 'translateY(-10%)', zIndex: 2}}>
                {/* eyebrows */}
                <path 
                    d="M 16 41 l 2 0 l -2 2 l -1 0 l 1 -2 m 17 0 l 2 0 l 1 2 l -1 0 l -2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <motion.svg viewBox="1 39 60 20" xmlns="http://www.w3.org/2000/svg" 
                style={{...svgStyle, zIndex: 3}}
                initial={{ y: '0%'}}
                animate={{ y: ['0%', '3%', '0%']}}
                transition={{...faceTransition}}
            >
                {/* mouth */}
                <path
                    d="M 22 57 l 5 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* eyes */}
                <path 
                    d="M 15 49 l 0 0 m 20 0 l 0 0"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </div>
    )
}
export default IUnderstand;