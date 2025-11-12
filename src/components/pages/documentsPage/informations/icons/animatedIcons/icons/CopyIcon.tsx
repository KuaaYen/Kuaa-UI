import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle} from "react";

interface CopyIconProps {
    data: string, 
    strokeColor?: string, 
    // fillInitialColor?: string,
    // fillActiveColor?: string
}

export interface CopyIconRef {
    handleCopy: () => void;
    handleHover: () => void;
    handleLeave: () => void;
}

const CopyIcon = forwardRef<CopyIconRef, CopyIconProps>(({
    data, 
    strokeColor = '#1A1B26', 
    // fillInitialColor = 'rgb(172, 175, 177)',
    // fillActiveColor = 'rgb(242, 251, 255)',

}, ref) => {

    // const [textScope, animateText] = useAnimate();
    const [block1Scope, animateBlock1] = useAnimate();
    const [block2Scope, animateBlock2] = useAnimate();

    const handleCopy = () => {
        // debugger;
        navigator.clipboard.writeText(data);
        // animateText(textScope.current, {
        //     opacity: [0, 1, 1, 0],
        //     y: [10, 0, 0, 10],
        //     x: '-50%',
        // }, {
        //     times: [0, 0.2, 0.8, 1],
        //     duration: 1.2,
        //     ease: 'easeInOut',
        // })
        animateBlock1(block1Scope.current, {
            x: '-50%',
            y: '-50%',
            rotate: 0,
            scale: 1.1,
        }, {
            duration: 0.15,
            ease: 'easeInOut',
            repeat: 1,
            repeatType: 'reverse',
        })
        animateBlock2(block2Scope.current, {
            x: '-50%',
            y: '-50%',
            rotate: 0,
            scale: 1.1,
        }, {
            duration: 0.15,
            ease: 'easeInOut',
            repeat: 1,
            repeatType: 'reverse',
        })
    }

    const handleHover = () => {
        animateBlock1(block1Scope.current, {
            x: '-65%',
            y: '-65%',
            rotate: -10,
            scale: 1.1,
        }, {
            duration: 0.1,
            ease: 'easeInOut',
        })
        animateBlock2(block2Scope.current, {
            x: '-35%',
            y: '-35%',
            rotate: 10,
            scale: 1.1,
        }, {
            duration: 0.1,
            ease: 'easeInOut',
        })
    }

    const handleLeave = () => {
        animateBlock1(block1Scope.current, {
            x: '-60%',
            y: '-60%',
            rotate: 0,
            scale: 1,
        }, {
            duration: 0.2,
            ease: 'easeInOut',
        })
        animateBlock2(block2Scope.current, {
            x: '-40%',
            y: '-40%',
            rotate: 0,
            scale: 1,
        }, {
            duration: 0.2,
            ease: 'easeInOut',
        })
    }

    useImperativeHandle(ref, () => ({
        handleCopy,
        handleHover,
        handleLeave,
    }));

    // const containerVariants = {
    //     initial: {color: fillInitialColor},
    //     hover: {color: fillActiveColor},
    //     tap: {color: fillActiveColor},
    // }

    // const svgVariants = {
    //     initial: {
    //         fill: 'rgb(172, 175, 177)',
    //     },
    //     hover: {
    //         fill: 'rgb(242, 251, 255)',
    //     },
    //     tap: {
    //         fill: 'rgb(242, 251, 255)',
    //     },
    // }

    return (
        <motion.div
            style={{
                position: 'relative',
                height: '100%',
                aspectRatio: 1,
            }}
            // variants={containerVariants}
            // initial="initial"
            // whileHover="hover"
            // whileTap="tap"
            // transition={{
            //     duration: 0.2,
            //     ease: 'easeInOut',
            // }}
            // onClick={handleCopy}
            // onMouseEnter={handleHover}
            // onMouseLeave={handleLeave}
        >
            {/* block1 */}
            <motion.div 
                ref={block1Scope}
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '85%',
                    aspectRatio: 1,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
                initial={{
                    x: '-60%',
                    y: '-60%',
                    rotate: 0,
                    scale: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 35 20 c -5 0 -10 5 -10 10 l 0 40 c 0 5 5 10 10 10 l 30 0 c 5 0 10 -5 10 -10 l 0 -40 c 0 -5 -5 -10 -10 -10 l -30 0"
                        stroke={strokeColor}
                        fill="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // variants={svgVariants}
                    />
                </svg>   
            </motion.div>

            {/* block2 */}
            <motion.div 
                ref={block2Scope}
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '85%',
                    aspectRatio: 1,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                }}
                initial={{
                    x: '-40%',
                    y: '-40%',
                    rotate: 0,
                    scale: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 35 20 c -5 0 -10 5 -10 10 l 0 40 c 0 5 5 10 10 10 l 30 0 c 5 0 10 -5 10 -10 l 0 -40 c 0 -5 -5 -10 -10 -10 l -30 0"
                        stroke={strokeColor}
                        fill="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // variants={svgVariants}
                    />
                </svg>   
            </motion.div>
            {/* <motion.div
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
                }}
                initial={{
                    opacity: 0,
                    y: 10,
                    x: '-50%',
                }}
            >
                Copied
            </motion.div> */}
        </motion.div>
    )
})

CopyIcon.displayName = 'CopyIcon';

export default CopyIcon;