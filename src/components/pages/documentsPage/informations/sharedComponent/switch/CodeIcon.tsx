import { motion } from "motion/react";

const CodeIcon = ({ switchState }: { switchState: 'preview' | 'code' }) => {
    return (
        <div className='documents-page-component-switch-button-code-icon'>
            <motion.div
                initial={{
                    x: 0,
                }}
                animate={{
                    x: switchState === 'code' ? '-0.1em' : 0,
                    y: switchState === 'code' ? [0, '-1px', 0, 0] : 0,
                }}
                transition={{
                    x:{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                    },
                    y:{
                        duration: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 1,
                        delay: 0.4,
                    }
                }}
            >
                {"<"}
            </motion.div>
            <motion.div 
                initial={{
                    y: 0,
                }}
                animate={{
                    y: switchState === 'code' ? [0, '-1px', 0, 0] : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 1,
                    delay: 0.55,
                }}
            >
                /
            </motion.div>
            <motion.div      
                initial={{
                    x: 0,
                }}
                animate={{
                    x: switchState === 'code' ? '0.1rem' : 0,
                    y: switchState === 'code' ? [0, '-1px', 0, 0] : 0,
                }}
                transition={{
                    x:{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                    },
                    y:{
                        duration: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 1,
                        delay: 0.7,
                    }
                }}
            >
                {">"}
            </motion.div>
        </div>
    );
};

export default CodeIcon;