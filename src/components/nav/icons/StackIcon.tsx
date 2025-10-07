import { motion } from 'motion/react';

const StackIcon = ({animateState}: {animateState: 'default' | 'hover' | 'active'}) => {
    const bottomVariants = {
        default: {
            x: '-50%',
            y: '-50%',
        },
        hover: {
            x: '-50%',
            y: '-46.5%',
        },
        active: {
            x: '-50%',
            y: '-53%',
        },
    }

    const midVariants = {
        default: {
            x: '-50%',
            y: '-50%',
        },
        hover: {
            x: '-50%',
            y: '-48%',
        },
        active: {
            x: '-50%',
            y: '-50%',
        },
    }

    const topVariants = {
        default: {
            x: '-50%',
            y: '-50%',
        },
        hover: {
            x: '-50%',
            y: '-51.5%',
        },
        active: {
            x: '-50%',
            y: '-48%',
        },
    }

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                aspectRatio: 1,
            }}
        >
            
            {/* bottom */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 1,
                }}
                variants={bottomVariants}
                initial="default"
                animate={animateState}
                transition={{
                    type: 'spring',
                    duration: 0.5,
                    bounce: 0.5,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 50 51 L 15 63 L 50 77 L 85 63 z"
                        fill="rgb(255, 255, 255)"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </motion.div>
            
            {/* mid */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 2,
                }}
                variants={midVariants}
                initial="default"
                animate={animateState}
                transition={{
                    type: 'spring',
                    duration: 0.5,
                    bounce: 0.5,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 50 39 L 25 50 L 50 61 L 75 50 Z"
                        fill="rgb(205, 205, 205)"
                        stroke="rgb(205, 205, 205)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </motion.div>
            
            {/* top */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 3,
                }}
                variants={topVariants}
                initial="default"
                animate={animateState}
                transition={{
                    type: 'spring',
                    duration: 0.5,
                    bounce: 0.5,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 50 22 L 21 34 L 50 46 L 79 34 z"
                        fill="#ffffff"
                        stroke="#ffffff"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </motion.div>
            
        </div>
    )
}
export default StackIcon;