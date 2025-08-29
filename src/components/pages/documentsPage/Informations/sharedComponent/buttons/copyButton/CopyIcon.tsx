import { motion, useAnimate } from "motion/react";

const CopyIcon = ({data}: {data: string}) => {

    const [textScope, animateText] = useAnimate();

    const handleCopy = () => {
        navigator.clipboard.writeText(data);
        animateText(textScope.current, {
            opacity: [0, 1, 1, 0],
            y: [10, 0, 0, 10],
            x: '-50%',
        }, {
            times: [0, 0.2, 0.8, 1],
            duration: 1.2,
            ease: 'easeInOut',
        })
    }


    const containerVariants = {
        initial: {},
        hover: {},
        tap: {},
    }

    const block1Variants = {
        initial: {
            x: '-60%',
            y: '-60%',
            rotate: 0,
            scale: 1,
        },
        hover: {
            x: '-65%',
            y: '-65%',
            rotate: -10,
            scale: 1.1,
        },
        tap: {
            x: '-50%',
            y: '-50%',
            rotate: 0,
            scale: 1.1,
        },
    }

    const svgVariants = {
        initial: {
            fill: 'rgb(172, 175, 177)',
        },
        hover: {
            fill: 'rgb(242, 251, 255)',
        },
        tap: {
            fill: 'rgb(242, 251, 255)',
        },
    }

    const block2Variants = {
        initial: {
            x: '-40%',
            y: '-40%',
            rotate: 0,
            scale: 1,
        },
        hover: {
            x: '-35%',
            y: '-35%',
            rotate: 10,
            scale: 1.1,
        },
        tap: {
            x: '-50%',
            y: '-50%',
            rotate: 0,
            scale: 1.1,
        },
    }


    return (
        <motion.div
            style={{
                position: 'relative',
                height: '100%',
                aspectRatio: 1,
            }}
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleCopy}
        >
            {/* block1 */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '85%',
                    aspectRatio: 1,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
                variants={block1Variants}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 35 20 c -5 0 -10 5 -10 10 l 0 40 c 0 5 5 10 10 10 l 30 0 c 5 0 10 -5 10 -10 l 0 -40 c 0 -5 -5 -10 -10 -10 l -30 0"
                        // fill="#ffffff"
                        stroke="#1A1B26"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={svgVariants}
                    />
                </svg>   
            </motion.div>

            {/* block2 */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '85%',
                    aspectRatio: 1,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                }}
                variants={block2Variants}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 35 20 c -5 0 -10 5 -10 10 l 0 40 c 0 5 5 10 10 10 l 30 0 c 5 0 10 -5 10 -10 l 0 -40 c 0 -5 -5 -10 -10 -10 l -30 0"
                        // fill="#ffffff"
                        stroke="#1A1B26"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={svgVariants}
                    />
                </svg>   
            </motion.div>
            <motion.div
                ref={textScope}
                style={{
                    position: 'absolute',
                    top: '-1.2rem',
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                    width: 'fit-content',
                    height: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    textWrap: 'nowrap',
                    // backgroundColor: 'red',
                }}
                initial={{
                    opacity: 0,
                    y: 10,
                    x: '-50%',
                }}
            >
                Copied
            </motion.div>
        </motion.div>
    )
}
export default CopyIcon;