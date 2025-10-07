import { Easing, motion } from "motion/react";

const MarchingAnts = ({
    style, 
    svgStyle,
    path, 
    maskDirection = '90deg',
    strokeWidth = '0.5',
    duration = 2,
    delay = 0.5,
    maskEase = 'easeInOut',
    dasharray = [2, 3],

}: {
    style?: React.CSSProperties, 
    svgStyle?: React.CSSProperties,
    path: string, 
    maskDirection?: string,
    strokeWidth?: string,
    duration?: number,
    delay?: number,
    maskEase?: Easing | Easing[] | undefined,
    dasharray?: [number, number],
}) => {
    const totalLength = dasharray[0] + dasharray[1];


    return (
        <motion.div
            style={{
                position: 'fixed',
                aspectRatio: 1,
                overflow: 'hidden',
                pointerEvents: 'none',
                ...style,
            }}
            initial={{maskImage: `linear-gradient(${maskDirection}, black 0%, black 0%, transparent 0%)`}}
            animate={{maskImage: `linear-gradient(${maskDirection}, black 0%, black 100%, transparent 100%)`}}
            transition={{
                duration: duration,
                ease: maskEase,
                delay: delay,
            }}
        >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{...svgStyle}}>
                <motion.path 
                    // d="M -1 30 C 35 30 11 84 44 80 C 73 75 80 92 96 100"
                    d={path}
                    fill="transparent"
                    stroke="rgba(224, 123, 95, 0.6)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={dasharray.join(' ')}
                    initial={{strokeDashoffset: 0}}
                    animate={{strokeDashoffset: -totalLength}}
                    transition={{
                        duration: 1.5,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                />
            </svg>   
            
        </motion.div>
    )
}
export default MarchingAnts;