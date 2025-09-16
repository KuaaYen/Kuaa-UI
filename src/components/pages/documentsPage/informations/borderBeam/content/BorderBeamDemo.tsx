import { useState } from "react";
import { motion} from "motion/react";

const BorderBeamDemo = ({
    triggerType = 'auto',
    startAnimate = true,
    borderColor = 'rgba(255, 255, 255, 0.25)',
    borderHighlightColor = 'rgba(255, 255, 255, 0.7)',
    backgroundColor = 'rgba(255, 255, 255, 0)',
    borderWidth = 2,
    borderRadius = '1rem',
    duration = 5,
    children,
}: {
    triggerType?: 'auto' | 'hover' | 'manual',
    startAnimate?: boolean,
    borderColor?: string,
    borderHighlightColor?: string,
    backgroundColor?: string,
    borderWidth?: number,
    borderRadius?: string,
    duration?: number,
    children?: React.ReactNode,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const getOpacity = () => {
        switch (triggerType) {
            case 'hover':
                return isHovered ? 1 : 0;
            case 'manual':
                return startAnimate ? 1 : 0;
            case 'auto':
                return 1;
        }
    }

    const borderVariants = {
        initial: {
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: borderRadius,
        },  
        animate: {
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: borderRadius,
        }
    }

    const getBorderHighlightStyles = (from: number = 0) => {
        return {
            mask:
            `linear-gradient(#0000, #0000), 
                conic-gradient(
                    from ${from}turn,
                    transparent 0turn,
                    white 0.125turn,
                    transparent 0.25turn,
                    transparent 0.5turn,
                    white 0.625turn,
                    transparent 0.75turn,
                    transparent 1turn
                )`,
            maskComposite: 'intersect',
            maskClip: 'padding-box, border-box',
            backgroundColor: borderHighlightColor,
            border: `${borderWidth}px solid transparent`,
            borderRadius: borderRadius,
        }
    }


    const borderHighlightVariants = {
        initial: {
            ...getBorderHighlightStyles(0),
            opacity: 0,
        },
        animate: {
            ...getBorderHighlightStyles(1),
            opacity: getOpacity(),
        }
    }

    return (
        <div 
            className="border-beam-demo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div 
                className="border-beam-demo-border"
                variants={borderVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, ease: "easeInOut"}}
            ></motion.div>
            <motion.div 
                className="border-beam-demo-border-highlight"
                variants={borderHighlightVariants}
                initial="initial"
                animate="animate"
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    mask: {
                        duration: duration,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                }}
            ></motion.div>
            <motion.div 
                className="border-beam-demo-content-container"
                initial={{backgroundColor: backgroundColor,borderRadius: borderRadius}}
                animate={{backgroundColor: backgroundColor,borderRadius: borderRadius}}
                transition={{duration: 0.3,ease: "easeInOut"}}                
            >
                {children}
            </motion.div>
        </div>
    )
}

export default BorderBeamDemo;