import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

export interface ToTopIconRef {
    handleClick: () => Promise<void>;
}

interface ToTopIconProps {
    initialColor?: string;
    hoverColor?: string;
    isHovering?: boolean;
}

const ToTopIcon = forwardRef<ToTopIconRef, ToTopIconProps>(
    ({ initialColor = 'rgb(172, 175, 177)', hoverColor = 'rgb(242, 251, 255)', isHovering = false }, ref) => {
        const [iconScope, animateIcon] = useAnimate();

        const handleClick = async () => {
            await animateIcon(iconScope.current, {
                y: ['-50%', '-200%']
            }, {
                duration: 0.6,
                ease: "easeInOut",
            });

            await animateIcon(iconScope.current, {
                y: ['100%', '-50%']
            }, {
                duration: 0.6,
                ease: "easeInOut",
            });
        }

        // 將 handleClick 暴露給父組件
        useImperativeHandle(ref, () => ({
            handleClick
        }));

        const containerVariants = {
            initial: {},
            hover: {},
            tap: {},
        }

        const svgVariants = {
            initial: {
                fill: initialColor,
                stroke: initialColor,
            },
            hover: {
                fill: hoverColor,
                stroke: hoverColor,
            },
            tap: {
                fill: hoverColor,
                stroke: hoverColor,
            },
        }

        return (
            <motion.div 
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
               }}
               variants={containerVariants}
               initial="initial"
               animate={isHovering ? "hover" : "initial"}
               whileTap="tap"
               transition={{
                   duration: 0.2,
                   ease: "easeInOut",
               }}
            >
                <motion.div 
                    ref={iconScope}
                    style={{
                        position:'absolute',
                        left: '50%',
                        top: '50%',
                        height: '75%',
                        width: '75%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                    }}
                    initial={{
                        x: '-50%',
                        y: '-50%',
                    }}
                >
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <motion.path 
                            d="M 50 15 l -30 40 l 15 0 l 0 30 l 30 0 l 0 -30 l 15 0 l -30 -40"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={svgVariants}
                            initial="initial"
                            animate={isHovering ? "hover" : "initial"}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>   
                </motion.div>
            </motion.div>
        )
    }
);

ToTopIcon.displayName = 'ToTopIcon';

export default ToTopIcon;