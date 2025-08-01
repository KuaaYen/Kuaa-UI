import { motion, useMotionValue, useTransform, useAnimationFrame } from 'motion/react';
import Helicpoter from './Helicpoter';

const CardInteractive = () => {

    const progress1 = useMotionValue(0);
    // const progress2 = useMotionValue(0);
    // const progress3 = useMotionValue(0);
    
    useAnimationFrame((time) => {
        const slowTime = time/1000;
        progress1.set(slowTime);
    });

    const rotateX1 = useTransform(progress1, (value) => {
        return Math.sin(value) * 8;
    });

    const rotateY1 = useTransform(progress1, (value) => {
        return Math.cos(value * 0.8) * 4 + 25;
    });

    const y1 = useTransform(progress1, (value) => {
        return Math.sin(value) * 10;
    });

    return (
        <motion.div 
            className='landing-page-slogan-block-card-interactive-wrapper'
            drag={true}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            dragElastic={0.1}
            dragTransition={{
                bounceStiffness: 100,
                bounceDamping: 10,
            }}
        >
            <motion.div 
                className='landing-page-slogan-block-card'
                style={{
                    y: y1,
                    rotateX: rotateX1,
                    rotateY: rotateY1,
                }}
                initial={{
                    scale: 0.3,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                }}
                viewport={{
                    margin: '0px 0px -250px 0px',
                }}
            >
                <Helicpoter tiltSide='left' />
                {/* <span>100%</span> */}
                <span className='landing-page-brick-highlight'> Interactive </span>
                <span>and</span>
                <span className='landing-page-brick-highlight'> Customizable</span> 
            </motion.div>
        </motion.div>
    )
}

export default CardInteractive;