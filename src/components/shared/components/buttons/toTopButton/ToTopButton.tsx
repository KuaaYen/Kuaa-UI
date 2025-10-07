import { motion } from "motion/react";
import { useState, useRef } from "react";
import ToTopIcon, { ToTopIconRef } from "./ToTopIcon";
import useScrollY from "../../../hooks/UseScrollY";

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
    const isScrolled = useScrollY(300);

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

    const buttonVariants = {
        initial: {
            border: `2px solid ${initialColor}`,
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? 'auto' : 'none',
        },
        hover: {
            border: `2px solid ${hoverColor}`,
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? 'auto' : 'none',
        },
        tap: {
            scale: 0.95,
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? 'auto' : 'none',
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