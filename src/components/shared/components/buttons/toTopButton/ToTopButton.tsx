import { motion } from "motion/react";
import { useState, useRef } from "react";
import ToTopIcon, { ToTopIconRef } from "./ToTopIcon";

const ToTopButton = ({
    scrollRef, 
    targetType = 'component',
    initialColor = 'rgb(172, 175, 177)',
    hoverColor = 'rgb(242, 251, 255)',
}: {
    scrollRef?: React.RefObject<HTMLDivElement>,
    targetType?: 'page' | 'component'
    initialColor?: string,
    hoverColor?: string,
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const iconRef = useRef<ToTopIconRef>(null);

    const handleToTop = () => {
        iconRef.current?.handleClick();

        if(targetType === 'component' && scrollRef?.current){
            scrollRef?.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (targetType === 'page'){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            console.log('toTopButton must have a scrollRef or targetType is page');
        }
    }

    // 統一的動畫 variants
    const buttonVariants = {
        initial: {
            border: `2px solid ${initialColor}`,
        },
        hover: {
            border: `2px solid ${hoverColor}`,
        },
        tap: {
            scale: 0.95,
        }
    }

    return (
        <motion.div 
            className="to-top-btn" 
            onClick={handleToTop}
            style={{
                position: targetType === 'page' ? 'fixed' : 'absolute',
            }}
            variants={buttonVariants}
            initial="initial"
            animate={isHovering ? "hover" : "initial"}
            whileTap="tap"
            transition={{
                duration: 0.2,
                ease: "easeInOut",
            }}
            onHoverStart={() => {
                setIsHovering(true);
            }}
            onHoverEnd={() => {
                setIsHovering(false);
            }}
        >
            <ToTopIcon ref={iconRef} initialColor={initialColor} hoverColor={hoverColor} isHovering={isHovering} />
        </motion.div>
    )
}
export default ToTopButton;