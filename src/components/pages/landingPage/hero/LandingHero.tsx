import { motion } from 'motion/react';
import PaperPlane from '../paperPlane/PaperPlane';
import HeroPopOut from './HeroPopOut';
// import Wind from './Wind';

const LandingHero = ({handleChangeOiiaoAnimation}: {handleChangeOiiaoAnimation: (type: 'spin' | 'swing') => void}) => {

    const createSplitText = (text: string, delay: number) => {
        const baseDelay = delay;

        return text.split('').map((char, index) => (
            <motion.span 
                key={index} 
                style={{display: 'inline-block'}}
                initial={{opacity: 0, y: '50%'}}
                animate={{opacity: 1, y: '0%'}}
                transition={{delay: baseDelay + index * 0.05}}
            >
                {char}
            </motion.span>
        ))
    }

    return (
        <article 
            className="landing-page-hero-wrapper"
        >
            <motion.div 
                className="landing-page-hero-content"   
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1.2, delay: 0.6, type: 'spring', stiffness: 100, damping: 12}}      
            >
                <motion.h1>
                    <div className='landing-page-hero-content-text'>
                        <PaperPlane />
                        <div className='landing-page-hero-content-text-top'>
                            Build your project with
                            <HeroPopOut/>
                            {/* <Wind/> */}
                        </div>
                        <div>
                            <span className='landing-page-brick-highlight'>{createSplitText('creative', 0.9)}</span>
                            <span> and </span>
                            <span className='landing-page-brick-highlight'>{createSplitText('unique', 1.4)}</span>
                            <span> React components</span>
                        </div>
                        <button 
                            className='landing-page-CTA'
                            onPointerEnter={() => handleChangeOiiaoAnimation('swing')}
                            onPointerLeave={() => handleChangeOiiaoAnimation('spin')}
                        >
                            <div className='landing-page-CTA-text'>
                                <span>Get Started</span>
                            </div>
                        </button>
                    </div>
                </motion.h1>
            </motion.div>
        </article>
    )
}

export default LandingHero;