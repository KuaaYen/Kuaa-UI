import { motion, Transition } from "motion/react";

const Wail = () => {

    const transition = {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
    } as Transition

    const faceTrailTransition = {
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const faceTransition = {
        duration: 0.25,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const mouthTransition = {
        duration: 0.25,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    const dotTransition = {
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1    ,
        delay: 0.7,
    } as Transition

    const createDots = () => {
        const dotsData = [
            {x: 14, y: 49, size: 2},
            {x: 28, y: 49, size: 2},
            {x: 42, y: 49, size: 2},
            {x: 56, y: 49, size: 2},
            {x: 70, y: 49, size: 2},
        ];
        const dotLength = dotsData.length;
        return dotsData.map((dot, index) => {
            return (
                <motion.rect 
                    key={`dot-${index}`} 
                    x={dot.x} y={dot.y} rx={dot.size/2} ry={dot.size/2} width={dot.size} height={dot.size} fill="currentColor" 
                    initial={{opacity: 1}}
                    animate={{opacity: [0, 1, 1, 0]}}
                    transition={{...dotTransition, times: [(1/dotLength)*(index), (1/dotLength)*(index)+0.1, 0.8 ,1]}}
                />
            )
        })
    }

    const createCircle = () => {
        const circleData = [
            {x: 10, y: 46, r: 2, delay: 0.2},
            {x: 25, y: 42, r: 1, delay: 0.4},
            {x: 70, y: 44, r: 1.5, delay: 1},
            {x: 85, y: 44, r: 1.5, delay: 1.2},
        ]
        return circleData.map((circle, index) => {
            return (
                <motion.circle 
                    key={`circle-${index}`} 
                    cx={circle.x} cy={circle.y} r={circle.r} 
                    fill="transparent" 
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{y : '0%', x: '0%', opacity: 1, scale: 1}}
                    animate={{
                        y : ['0%', '-50%', '200%'],
                        x: '-100%',
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1, 1, 0],
                    }}
                    transition={{
                        y: {...transition, delay: circle.delay,},
                        x: {...transition, delay: circle.delay,},
                        opacity: {...transition, times: [0, 0.2, 0.8, 1], delay: circle.delay,},
                        scale: {...transition, times: [0, 0.2, 0.8, 1], delay: circle.delay,},
                    }}
                />
            )
        })
    }   

    return (
        <svg viewBox="0 39 100 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="5em"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)'}}
        >
            <motion.g
                initial={{x: '-100%', y: '0%'}}
                animate={{x: '300%', y: ['0%', '-5%', '0%']}}
                transition={{
                    x: {...faceTrailTransition},
                    y: {...faceTransition},
                }}
            >
                {/* face */}
                <path 
                    d="M 7 42 q -6 8 0 16 M 47 42 q 6 8 0 16"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* eyes */}
                <path 
                    d="M 36 42 l 2 0 l 1 2 l -1 0 l -2 -2"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* mouth  */}
                <motion.path
                    d="M 24.5 54 Q 27 52 27 45 L 33 45 L 33 54 M 24 58 l 0 -4 l 10 0 L 34 58"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    initial={{
                        d: "M 24.5 53.5 Q 27 52 27 45 L 33 45 L 33 53.5 M 24 58 l 0 -4.5 l 10 0 L 34 58"
                    }}
                    animate={{
                        d: "M 24.5 54.5 Q 27 52 27 45 L 33 45 L 33 54.5 M 24 58 l 0 -3.5 l 10 0 L 34 58"
                    }}
                    transition={{...mouthTransition}}
                />
                {/* hand */}
                <path
                    d="M 10 46 c 13 -7 15 4 7 6"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
            </motion.g>
            {createCircle()}
            {createDots()}
        </svg>
    )
}
export default Wail;