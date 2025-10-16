import { motion } from "motion/react";

interface RevealConfig {
    x: number;
    y: number;
    duration?: number;
    delay?: number;
}

interface MaskRevealDemoProps {
    children?: React.ReactNode;
    isRevealed?: boolean;
    revealConfigs?: RevealConfig[];
    reverseMask?: boolean;
}

const MaskRevealDemo = ({
    children,
    isRevealed = false,
    revealConfigs = [
        {x: 1, y: 0, duration: 2.5, delay: 0},
        {x: 0, y: 1, duration: 2, delay: 0.3},
    ],
    reverseMask = false
}: MaskRevealDemoProps) => {

    const circleVariants = {
        initial: {
            r: 0
        },
        animate: {
            r: 2
        }
    }

    const stopColor = reverseMask ? "black" : "white";
    const rectColor = reverseMask ? "white" : "black";

    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <radialGradient id="revealMaskGradient" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor={stopColor} stopOpacity="1" />
                        <stop offset="50%" stopColor={stopColor} stopOpacity="1"/>
                        <stop offset="100%" stopColor={stopColor} stopOpacity="0" />
                    </radialGradient>
                    <mask 
                        id="revealMask" 
                        maskUnits="objectBoundingBox" 
                        maskContentUnits="objectBoundingBox"
                    >
                        <rect x="-0.1" y="-0.1" width="1.2" height="1.2" fill={rectColor} />
                        {revealConfigs.map((revealConfig, index) => (
                            <motion.circle 
                                key={index}
                                cx={revealConfig.x} 
                                cy={revealConfig.y} 
                                fill="url(#revealMaskGradient)"
                                variants={circleVariants}
                                initial="initial"
                                animate={isRevealed ? "animate" : "initial"}
                                transition={{
                                    duration: revealConfig.duration,
                                    ease: "easeInOut",
                                    delay: revealConfig.delay
                                }}
                            />
                        ))}
                    </mask>
                </defs>
            </svg>

            <div 
                className="mask-reveal-demo"
                style={{ 
                    mask: 'url(#revealMask)',
                    WebkitMask: 'url(#revealMask)'
                }}
            >
                {children}
            </div>
        </>
    )
}

export default MaskRevealDemo;