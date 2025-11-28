import { motion, Transition } from "motion/react";

const Sigh = () => {

    const transition = {
        duration: 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
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
            <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg" style={{...svgStyle, zIndex: 1}}>
                {/* face outer*/}
                <path 
                    d="M 7 42 q -6 8 0 16 M 53 42 q 6 8 0 16"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* face inner */}
                <motion.path 
                    d="M 14 50 l 5 0 m 12 0 l 5 0 m -15 -4 l 0 8 m 1 3 l 9 0"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{
                        d: "M 14 50 l 5 0 m 12 0 l 5 0 m -15 -4 l 0 8 m 1 3 l 9 0"
                    }}
                    animate={{
                        d: "M 13 50 l 5 0 m 12 0 l 5 0 m -15 -4 l 0 8 m 1 3 l 9 0"
                    }}
                    transition={{...transition}}
                />         
                {/* eyebrow 1 */}
                <path 
                    d="M 11 42 l 2 0 l -2 2 l -1 0 l 1 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                /> 
            </svg>
            
            <motion.svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg" style={{...svgStyle, y: '-15%', zIndex: 2}}>
                {/* eyebrow 2*/}
                <path 
                    d="M 42 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </div>
    )
}
export default Sigh;