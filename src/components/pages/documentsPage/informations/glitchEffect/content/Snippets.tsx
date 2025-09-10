import Snippet from "../../sharedComponent/snippets/Snippet";

const Snippets = () => {
    const installationSnippet = `
    # This is made with motion/react, remember to install it first
    npm install motion/react
    `


    const usageSnippet = `
    // Import GlitchEffect component, your path may be different
    import { GlitchEffect } from './GlitchEffect';

    // Use the GlitchEffect component
    <GlitchEffect 
        // every prop is optional
        triggerType="always" 
        startAnimate={true}
        glitchDuration={1000}
        glitchRest={2000}
        maxFuzzIntensity={30}
        fuzzInterval={125}
    >
        {/* The content you want to glitch */}
        {children}
    </GlitchEffect>
    `

    const CompleteCodeSnippet = `
import { useState, useRef, useEffect } from 'react';
import { useMotionValue, useMotionValueEvent, useAnimationFrame, motion } from 'motion/react';

const GlitchEffect = ({
    children,
    triggerType = 'always',
    startAnimate = true,
    glitchDuration = 1000,
    glitchRest = 2000,
    maxFuzzIntensity = 30,
    fuzzInterval = 125,
}: {
    children?: React.ReactNode,
    triggerType?: 'always' | 'hover' | 'manual'
    startAnimate?: boolean,
    glitchDuration?: number,
    glitchRest?: number,
    maxFuzzIntensity?: number,
    fuzzInterval?: number,
}) => {
    const ifShouldAnimate = triggerType === 'manual' && startAnimate || triggerType === 'always';
    const [shouldAnimate, setShouldAnimate] = useState(ifShouldAnimate);
    const [isHovered, setIsHovered] = useState(false);
    const scaleValue = useMotionValue(0);
    const feDisplacementRef = useRef<SVGFEDisplacementMapElement>(null);
    const lastUpdateTime = useRef(0);
    const cycleStartTime = useRef(0);
    const updateInterval = fuzzInterval;
    const animationDuration = 4000;
    const restDuration = 600;
    const totalCycleDuration = animationDuration + restDuration;

    useEffect(() => {
        if (ifShouldAnimate) {
            setShouldAnimate(true);
        } else {
            setShouldAnimate(false);
        }
    }, [ifShouldAnimate]);

    useMotionValueEvent(scaleValue, "change", (latest) => {
        if (feDisplacementRef.current) {
            feDisplacementRef.current.setAttribute('scale', latest.toString());
        }
    });

    useAnimationFrame((time) => {
        if (shouldAnimate) {
            if (cycleStartTime.current === 0) {
                cycleStartTime.current = time;
            }
    
            const cyclePosition = (time - cycleStartTime.current) % totalCycleDuration;
            const isInAnimationPhase = cyclePosition < animationDuration;
    
            if (isInAnimationPhase) {
                if (time - lastUpdateTime.current >= updateInterval) {
                    const isIntenseGlitch = Math.random() < 0.1;
                    const maxScale = isIntenseGlitch ? maxFuzzIntensity : maxFuzzIntensity / 3;
                    
                    const randomScale = Number((Math.random() * maxScale).toFixed(2));
                    scaleValue.set(randomScale);
                    lastUpdateTime.current = time;
                }
            } else {
                if (Math.random() < 0.05 && time - lastUpdateTime.current >= updateInterval * 4) {
                    const intensity = Math.min(maxFuzzIntensity, 3);
                    const lightGlitch = Number((Math.random() * intensity).toFixed(2));
                    scaleValue.set(lightGlitch);
                    lastUpdateTime.current = time;
                } else if (scaleValue.get() !== 0) {
                    scaleValue.set(0);
                }
            }
        }
    });

    useEffect(() => {
        if (!shouldAnimate) {
            scaleValue.set(0);
            lastUpdateTime.current = 0;
            cycleStartTime.current = 0;
        }
    }, [shouldAnimate, scaleValue]);

    const notCliped = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

    const getMainClipPaths = () => {
        const clipPath1 =
            \`polygon(0% 58%,17% 58%,17% 72%,63% 72%,63% 84%,70% 84%,70% 15%,84% 15%,84% 94%,
            89% 94%,89% 13%,28% 13%,28% 97%,18% 97%,18% 89%,71% 89%,71% 62%,23% 62%,23% 49%,27% 49%,
            27% 95%,73% 95%,73% 31%,87% 31%,87% 68%,1% 68%,1% 61%,51% 61%,51% 68%,47% 68%,47% 80%,
            35% 80%,35% 10%,94% 10%,94% 72%,50% 72%,50% 53%,75% 53%,75% 70%,30% 70%,30% 6%,84% 6%)\`;
        const clipPath2 = 
            \`polygon(0% 59%,77% 59%,77% 67%,57% 67%,57% 30%,40% 30%,40% 90%,96% 90%,
            96% 48%,1% 48%,1% 60%,46% 60%,46% 68%,20% 68%,20% 50%,15% 50%)\`;
        const clipPath3 = 
            \`polygon(0% 74%,48% 74%,48% 41%,18% 41%,18% 97%,61% 97%,61% 51%,41% 51%,41% 4%,22% 4%,
            22% 11%,38% 11%,38% 18%,54% 18%,54% 36%,17% 36%,17% 43%,14% 43%,14% 17%,1% 17%,1% 84%,
            21% 84%,21% 96%,82% 96%,82% 12%,83% 12%,83% 8%,69% 8%,69% 52%,88% 52%,88% 61%,71% 61%,
            71% 48%,3% 48%,3% 57%,25% 57%,25% 98%,82% 98%,82% 59%)\`;

        return [
            notCliped, 
            notCliped, 
            clipPath1, 
            clipPath1, 
            notCliped, 
            notCliped, 
            clipPath2, 
            clipPath2, 
            notCliped, 
            notCliped, 
            clipPath3, 
            clipPath3, 
            notCliped, 
            notCliped, 
        ]
    }

    const getMainTransform = () => {
        return [
            'translate(0%, 0%)',
            'translate(0%, 0%)',
            'translate(-10%, -10%)',
            'translate(-10%, -10%)',
            'translate(0%, 0%)',
            'translate(0%, 0%)',
            'translate(12%, 0%)',
            'translate(12%, 0%)',
            'translate(0%, 0%)',
            'translate(0%, 0%)',
            'translate(2%, 8%)',
            'translate(2%, 8%)',
            'translate(0%, 0%)',
            'translate(0%, 0%)',
        ]
    }

    const containerVariants = {
        initial: {},
        animate: {}
    }

    const mainGlitchVariants = {
        initial: {
            clipPath: notCliped,
            transform: 'translate(0%, 0%)',
        },
        animate: {
            clipPath: getMainClipPaths(),
            transform: getMainTransform(),
        }
    }

    const sub1Variants = {
        initial: {
            opacity: 0,
            transform: 'translate(-55%, -55%)',
        },
        animate: {
            opacity: [0, 0, 0.2, 0.2, 0, 0],
        }
    }

    const sub2Variants = {
        initial: {
            opacity: 0,
            transform: 'translate(-43%, -45%)',
        },
        animate: {
            opacity: [0, 0, 0.2, 0.2, 0, 0, 0.2, 0.2, 0, 0],
            transform: [
                'translate(-43%, -45%)',
                'translate(-43%, -45%)',
                'translate(-43%, -40%)',
                'translate(-43%, -40%)',
                'translate(-43%, -45%)',
                'translate(-43%, -45%)',
                'translate(-40%, -45%)',
                'translate(-40%, -45%)',
                'translate(-43%, -45%)',
                'translate(-43%, -45%)',
            ],
        }
    }

    const getVariants = () => {
        switch (triggerType) {
            case 'hover':
                return isHovered ? 'animate' : 'initial';
            case 'manual':
                return startAnimate ? 'animate' : 'initial';
            case 'always':
                return 'animate';
        }
    }

    const handleHover = () => {
        setIsHovered(true);
        if (triggerType === 'hover') {
            setShouldAnimate(true);
        }
    }
    const handleLeave = () => {
        setIsHovered(false);
        if (triggerType === 'hover') {
            setShouldAnimate(false);
        }
    }

    return (
        <>
            <svg style={{display: 'none'}}>
                <defs>
                    <filter id="glitch-effect-filter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.4" numOctaves="2" />
                        <feDisplacementMap 
                            ref={feDisplacementRef}
                            in="SourceGraphic"
                            in2="turbulence"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced"
                        />
                        <feConvolveMatrix 
                            in="displaced"
                            order="3"
                            kernelMatrix="1 -4 1 
                                        1 0 -8 
                                        1 0 -4"
                        />
                    </filter>
                </defs>
            </svg>
            <div className="glitch-effect-wrapper">
                <motion.div 
                    className="glitch-effect" 
                    variants={containerVariants}
                    initial="initial"
                    animate={getVariants()}
                    style={{filter: 'url(#glitch-effect-filter)'}}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <motion.div 
                        className="glitch-effect-main"
                        variants={mainGlitchVariants}
                        transition={{
                            times: [0, 0.2, 0.201, 0.3, 0.301, 0.7, 0.701, 0.77, 0.771, 0.85, 0.851, 0.95, 0.951, 1],
                            duration: glitchDuration/1000,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            repeatDelay: glitchRest/1000,
                        }}
                    >
                        {children}
                    </motion.div>
                    <motion.div 
                        className="glitch-effect-sub sub1"
                        variants={sub1Variants}
                        initial="initial"
                        animate={shouldAnimate ? "animate" : "initial"}
                        transition={{
                            times: [0, 0.2, 0.201, 0.3, 0.301, 1],
                            duration: glitchDuration/1000,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            repeatDelay: glitchRest/1000,
                        }}
                    >
                        {children}
                    </motion.div>
                    <motion.div 
                        className="glitch-effect-sub sub2" 
                        variants={sub2Variants}
                        initial="initial"
                        animate={shouldAnimate ? "animate" : "initial"}
                        transition={{
                            times: [0, 0.7, 0.701, 0.77, 0.771, 0.85, 0.851, 0.95, 0.951, 1],
                            duration: glitchDuration/1000,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            repeatDelay: glitchRest/1000,
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default GlitchEffect;
    `
    const cssSnippet = `
.glitch-effect-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 2px 2px 0px #a39f92;
    font-size: 5rem;
}

.glitch-effect{
    position: relative;
    cursor: pointer;
}

.glitch-effect-main{
    position: relative;
    z-index: 1;
}

.glitch-effect-sub{
    position: absolute;
    top: 50%;
    left: 50%;
    text-wrap: nowrap;
}

.glitch-effect-sub.sub1{
    scale: 1.05;
    z-index: 2;
}
.glitch-effect-sub.sub2{
    z-index: 0;
}
    `


    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="jsx" delay={1000} />
            <Snippet title="Code" snippet={CompleteCodeSnippet} language="jsx" delay={1500} />
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={1800} />
        </div>
    )
}

export default Snippets;