import { motion } from "motion/react";

const PreviewAnimatedIcon = () => {
    return (
        <motion.div
            style={{
                position: 'relative',
                height: '20px',
                aspectRatio: 1,
                transform: 'translateY(1px)',
            }}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
            }}
        >
            
            {/* outline */}
            <div 
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
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 6 50 c 7 -10 24 -28 44 -28 c 20 0 37 18 42 28 c -5 10 -22 26 -42 26 c -20 0 -37 -16 -44 -26"
                        fill="transparent"
                        stroke="#F2CC8F"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* pupil */}
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
                initial={{
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    x: ['-56%', '-44%', '-56%', '-44%'],
                    y: ['-52%', '-52%', '-48%', '-48%'],
                }}
                transition={{
                    duration: 2.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.5,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 50 27 C 59 28 63 36 63 50 C 63 61 60 70 50 71 C 40 70 37 61 37 50 C 37 39 39 28 50 27"
                        fill="#F2CC8F"
                        stroke="#F2CC8F"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </motion.div>
            
        </motion.div>
    );
};

export default PreviewAnimatedIcon;