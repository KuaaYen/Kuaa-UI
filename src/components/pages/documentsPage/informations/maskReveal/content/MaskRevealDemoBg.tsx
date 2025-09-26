import { motion, AnimatePresence } from "motion/react";

const MaskRevealDemoBg = ({isRevealed = false}: {isRevealed?: boolean}) => {
    return (
        <div className="mask-reveal-demo-bg">
            <AnimatePresence mode="wait">
                {isRevealed ? 
                    <motion.h1
                        key="hello"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                    >
                        Woo hoo
                    </motion.h1>
                    : 
                    <motion.h1
                        key="reveal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                    >
                        D'oh
                    </motion.h1>
                }
            </AnimatePresence>
        </div>
    )
}

export default MaskRevealDemoBg;