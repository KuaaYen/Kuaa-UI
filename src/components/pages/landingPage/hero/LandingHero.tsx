import { motion } from 'motion/react';
import PaperPlane from './paperPlane/PaperPlane';
import HeroPopOut from './HeroPopOut';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useMediaTypeContext from '../../../../context/useMediaTypeContext';
// import MarchingAnts from '../../../shared/components/marchingAnts/MarchingAnts';
// import Wind from './Wind';

const LandingHero = ({handleChangeOiiaoAnimation}: {handleChangeOiiaoAnimation: (type: 'spin' | 'swing') => void}) => {
    const mediaType = useMediaTypeContext();
    const navigate = useNavigate();

    const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('/documents');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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

    const createHeroContent = () => {
        if(mediaType === 'pc') {
            return (
                <div className='landing-page-hero-content-text-container'>
                    <PaperPlane />
                    <div className='landing-page-hero-content-text'>
                        Build your project with
                        <HeroPopOut/>
                    </div>
                    <div>
                        <span className='landing-page-brick-highlight'>{createSplitText('creative', 0.9)}</span>
                        <span> and </span>
                        <span className='landing-page-brick-highlight'>{createSplitText('unique', 1.4)}</span>
                        <span> React components</span>
                    </div>
                    <a 
                        className='landing-page-CTA'
                        onPointerEnter={() => handleChangeOiiaoAnimation('swing')}
                        onPointerLeave={() => handleChangeOiiaoAnimation('spin')}
                        onClick={(e) => handleGetStartedClick(e)}
                    >
                        <div className='landing-page-CTA-text'>
                            <span>Get Started</span>
                        </div>
                    </a>
                </div>
            )
        } else {
            return (
                <div className='landing-page-hero-content-text-container'>
                    <div className='landing-page-hero-content-text-mobile'>
                        Build your project with
                    </div>
                    <div className='landing-page-hero-content-text-mobile'>
                        <span className='landing-page-brick-highlight'>{createSplitText('creative', 0.9)}</span>
                        <span> and </span>
                        <span className='landing-page-brick-highlight'>{createSplitText('unique', 1.4)}</span>
                        <span> React components</span>
                    </div>
                    <div className='landing-page-hero-CTA-mobile-wrapper'>
                        <a 
                            className='landing-page-CTA-mobile'
                            onPointerEnter={() => handleChangeOiiaoAnimation('swing')}
                            onPointerLeave={() => handleChangeOiiaoAnimation('spin')}
                            onClick={(e) => handleGetStartedClick(e)}
                        >
                            <div className='landing-page-CTA-text'>
                                <span>Get Started</span>
                            </div>
                        </a>
                            
                        <PaperPlane mediaType={mediaType}/>
                    </div>
                </div>
            )
        }
    }

    // const createMarchingAnts = () => {
    //     if(mediaType === 'pc') {
    //         return (
    //             <MarchingAnts 
    //                 path='M 0 10 C 23 17 6 37 30 42 C 46 46 51 61 44 71 C 34 87 2 86 0 100'
    //                 style={{
    //                     position: 'absolute',
    //                     left: '-30%',
    //                     top: '0%',
    //                     width: '800px',
    //                 }}
    //                 maskDirection='180deg'
    //                 strokeWidth='0.8'
    //                 duration={2}
    //                 delay={1.5}
    //                 maskEase='linear'
    //             />
    //         )
    //     }
    // }

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
                {/* {createMarchingAnts()} */}
                <motion.h1>
                    {createHeroContent()}
                </motion.h1>
            </motion.div>
        </article>
    )
}

export default memo(LandingHero);