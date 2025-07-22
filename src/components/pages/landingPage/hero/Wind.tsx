import { motion } from 'motion/react';

const Wind = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '0.8em',
                right: '2em',
                width: '3em',
                transform: 'translateY(-50%) scaleX(1.3) scaleY(0.95)',
                aspectRatio: 1,
            }}
        >
            
            {/* main */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                }}
                initial={{
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) -30%,rgba(0,0,0,1) -30%, rgba(0,0,0,1) -30%, rgba(0,0,0,0) 0%',
                    // opacity: 0,
                }}
                animate={{
                    maskImage: [
                        'linear-gradient(to right, rgba(0,0,0,0.5) -30%,rgba(0,0,0,1) -30%, rgba(0,0,0,1) -30%, rgba(0,0,0,0) 0%',
                        'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 130%)',
                    ],
                    // opacity: [0,1,1,0],
                    transition: {
                        maskImage: {
                            duration: 1,
                            ease: 'easeInOut',
                            delay: 1,
                            // repeat: Infinity,
                            // repeatType: 'loop',
                            // repeatDelay: 1.2,
                        },
                        // opacity: {
                        //     times: [0, 0.2, 0.8, 1],
                        //     duration: 2.6,
                        //     ease: 'easeInOut',
                        //     repeat: Infinity,
                        //     repeatType: 'loop',
                        // },
                    },
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 2.371 54.2 C 20.97 37.063 40.45 41.593 50.771 45.457 C 59.368 48.63 88.59 52.531 82.61 42.001 C 80.215 37.464 62.211 33.204 70.121 42.817 C 58.458 40.016 56.875 32.212 67.006 30.725 C 86.351 29.08 102.122 46.186 90.394 53.969 C 82.637 59.145 63.874 57.772 44.01 49.072 C 38.157 46.924 20.826 42.113 2.786 53.754 Z"
                        fill="#3D405B"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </motion.div>
            
            {/* sub */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
                initial={{
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) -30%,rgba(0,0,0,1) -30%, rgba(0,0,0,1) -30%, rgba(0,0,0,0) 0%',
                    // opacity: 0,
                }}
                animate={{
                    maskImage: [
                        'linear-gradient(to right, rgba(0,0,0,0.5) -30%,rgba(0,0,0,1) -30%, rgba(0,0,0,1) -30%, rgba(0,0,0,0) 0%',
                        'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 130%)',
                    ],
                    // opacity: [0,1,1,0],
                    transition: {
                        maskImage: {
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: 1.2,
                            // repeat: Infinity,
                            // repeatType: 'loop',
                            // repeatDelay: 1.2,
                        },
                        // opacity: {
                        //     times: [0, 0.2, 0.8, 1],
                        //     duration: 2.6,
                        //     ease: 'easeInOut',
                        //     repeat: Infinity,
                        //     repeatType: 'loop',
                        // },
                    },
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 48.876 50 C 64.255 55.231 59.965 61.46 56.102 63.109 C 52.409 64.766 43.074 64.512 43.675 60.677 C 44.518 56.087 55.169 56.202 54.169 60.131 C 56.92 52.989 45.001 53.221 39.477 56.359 C 33.081 60.481 34.851 66.218 42.95 68.893 C 59.427 72.691 66.413 67.006 68.2 62.876 C 70.454 57.315 62.604 50.576 49.333 49.981"
                        fill="rgb(91, 95, 126)"
                        stroke="#ff0000"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </motion.div>
            
        </div>
    )
}
export default Wind;