import { motion } from 'motion/react';

const LanguagesIcon = () => {
    return (
        <div className="landing-page-dashboard-content-icon">
            <div className="landing-page-languages-icon-wrapper">
                <motion.div 
                    className="landing-page-languages-icon"
                    initial={{
                        x: '-30%',
                        y: '-30%',
                    }}
                    animate={{
                        x: ['-30%', '30%', '30%', '-30%', '-30%'],
                        y: '-30%',
                    }}
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        // repeatType: 'reverse',
                    }}
                >
                    <motion.div 
                        className="landing-page-languages-icon-background"
                        initial={{
                            rotate: 0,
                            backgroundColor: 'var(--basic-sunset)',
                        }}
                        animate={{
                            rotate: ['0deg', '90deg', '90deg', '0deg', '0deg'],
                            backgroundColor: ['#F2CC8F', 'rgb(143, 194, 242)', 'rgb(143, 194, 242)', '#F2CC8F', '#F2CC8F'],
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                    ></motion.div>
                    <div className="landing-page-languages-icon-text-wrapper">
                        <motion.div 
                            className="landing-page-languages-icon-text-relative"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [1, 0, 0, 1, 1],
                            }}
                            transition={{
                                duration: 3,
                                // ease: ['easeIn', 'easeOut', 'easeOut', 'easeIn', 'easeIn'],
                                ease: ['easeOut', 'easeIn', 'easeIn', 'easeIn', 'easeIn'],
                                repeat: Infinity,
                            }}
                        >
                            JS
                        </motion.div>
                        <motion.div 
                            className="landing-page-languages-icon-text-absolute"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 1, 1, 0, 0],
                            }}
                            transition={{
                                duration: 3,
                                // ease: ['easeOut', 'easeIn', 'easeIn', 'easeOut', 'easeOut'],
                                ease: ['easeOut', 'easeIn', 'easeIn', 'easeIn', 'easeIn'],
                                repeat: Infinity,
                            }}
                        >
                            TS
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LanguagesIcon;