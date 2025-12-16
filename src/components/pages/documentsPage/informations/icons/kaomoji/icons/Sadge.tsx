import { motion, Transition } from "motion/react";

const Sadge = () => {
    const transition = {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
    } as Transition

    const createTears = () => {

        const circleData = [
            {x: 23, y: 40, r: 1.3, dropDelay: 0},
            {x: 23, y: 40, r: 1.3, dropDelay: 0.6},
            {x: 23, y: 40, r: 1.3, dropDelay: 1.2},
            {x: 40, y: 40, r: 1.3, dropDelay: 0.1},
            {x: 40, y: 40, r: 1.3, dropDelay: 0.7},
            {x: 40, y: 40, r: 1.3, dropDelay: 1.3},
        ]

        const createCircles = () => {
            return circleData.map((circle, index) => {
                return (
                    <motion.circle
                        key={`circle-${index}`}
                        cx={circle.x}
                        cy={circle.y}
                        r={circle.r}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="0.25"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        initial={{r: 0, y: '0%', opacity: 1}}
                        animate={{r: circle.r, y: '600%', opacity: [0, 1, 1, 0]}}
                        transition={{
                            r: {...transition, delay: circle.dropDelay},
                            y: {...transition, delay: circle.dropDelay},
                            opacity: {...transition, times: [0, 0.3, 0.6, 0.9], delay: circle.dropDelay},
                        }}
                    />
                )
            })
        }

        return (
            <motion.svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: '55%',
                    height: '1em',
                    width: '3em',
                    zIndex: 2,
                }}
            >
                {createCircles()}
            </motion.svg>
        )
    }

    return (
        <div
            style={{
                position: 'relative',
                height: '1em',
                width: '3em',
                display: 'inline-block',
            }}
        >
            <svg viewBox="0 39 60 20" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '1em',
                    width: '3em',
                    zIndex: 1,
                }}
            >
                {/* face */}
                <path 
                    d="M 7 42 q -6 8 0 16 m 46 -16 q 6 8 0 16 L 53 58 m -26 -12 c -4 7 3 10 3 4 l 0 -2 l 0 2 c 0 6 7 3 3 -4"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* eyes */}
                <path 
                    d="M 20 48 a 1.5 1.5 0 0 0 3 0 a 1.5 1.5 0 0 0 -3 0 M 37 48 a 1.5 1.5 0 0 0 3 0 a 1.5 1.5 0 0 0 -3 0"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                {/* eyebrow */}
                <path 
                    d="M 16 42 l 2 0 l -2 2 l -1 0 Z M 44 42 l -2 0 l 2 2 l 1 0 Z"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
            </svg>
            {createTears()}
        </div>
    )
}
export default Sadge;