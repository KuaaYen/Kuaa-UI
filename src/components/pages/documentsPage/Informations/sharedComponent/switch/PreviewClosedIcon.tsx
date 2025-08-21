import { motion } from "motion/react";

const PreviewClosedIcon = () => {
    return (
        <motion.div
            style={{
                position: 'relative',
                height: '20px',
                aspectRatio: 1,
                // transform: 'translateY(1px)',
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
            {/* closed */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '90%',
                    width: '90%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 6 50 C 17 64 32 76 50 76 C 72 76 89 56 92 50 M 25 68 L 18 76 M 50 76 L 50 86 M 76 67 L 83 74"
                        fill="transparent"
                        stroke="#ffffff"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
        </motion.div>
    );
};

export default PreviewClosedIcon;