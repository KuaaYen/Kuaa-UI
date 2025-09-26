import { motion } from "motion/react";

const PopText = ({ishover, text}: {ishover: boolean, text: string}) => {

    const textVariants = {
        initial: {
            opacity: 0,
            x: '-50%',
            y: '50%',
        },
        hover: {
            opacity: 1,
            x: '-50%',
            y: '0%',
        },
    }

    return (
        <motion.div className="navbar-link-icon-text"
            variants={textVariants}
            initial="initial"
            animate={ishover ? "hover" : "initial"}
            transition={{
                type: 'spring',
                duration: 0.3,
                bounce: 0,
            }}
        >
            {text}
        </motion.div>
    )
}

export default PopText;