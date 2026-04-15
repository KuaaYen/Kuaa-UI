// import CardPasteReady from './CardPasteReady';
// import CardInteractive from './CardInteractive';
import { motion, Transition } from 'motion/react';
import useMediaTypeContext from '../../../../context/useMediaTypeContext';
import MountainSvg from './mountainBox/MountainSvg.tsx';
// import Cloud from './mountainBox/Cloud.tsx';

const Slogan = () => {

    const mediaType = useMediaTypeContext();
    // console.log(mediaType);

    const animationTransition: Transition = {
        duration: 5, 
        times: [0, 0.2, 0.8, 1],
        ease: 'easeInOut', 
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 3,
    }

    const animationTransitionText1: Transition = {
        opacity:{
            duration: 5, 
            times: [0, 0.2, 0.8, 0.9],
            ease: 'easeInOut', 
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 3,
        },
        y:{
            duration: 5, 
            times: [0, 0.2, 0.8, 1],
            ease: 'easeInOut', 
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 3,
        },
    }

    const animationTransitionText2: Transition = {
        opacity:{
            duration: 5, 
            times: [0, 0.2, 0.8, 0.9],
            ease: 'easeInOut', 
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 3,
            delay: 4,
        },
        y:{
            duration: 5, 
            times: [0, 0.2, 0.8, 1],
            ease: 'easeInOut', 
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 3,
            delay: 4,
        },
    }

    return (
        
        <article className='landing-page-slogan-block-mountain-box'>
            {/* <div className='landing-page-slogan-block-mountain-box-background'></div> */}
            <motion.div 
                className='landing-page-slogan-sky'
                initial={{backgroundColor: ' #CAF4FF'}}
                animate={{backgroundColor: [' #CAF4FF', ' #2D3250', ' #2D3250', ' #CAF4FF']}}
                transition={{...animationTransition}}
            >
                <motion.div 
                    className='landing-page-slogan-sky-light'
                    initial={{backgroundColor: ' #DAF5FF'}}
                    animate={{backgroundColor: [' #DAF5FF', ' #424769', ' #424769', ' #DAF5FF']}}
                    transition={{...animationTransition}}
                ></motion.div>
                <motion.div 
                    className='landing-page-slogan-sun-moon-wrapper'
                    initial={{rotate: 0, x: '-50%', y: '-50%'}}
                    animate={{rotate: [0, 180, 180, 360], x: '-50%', y: '-50%'}}
                    transition={{...animationTransition}}
                >
                    <div className='landing-page-slogan-sun'></div>
                </motion.div>
                <div 
                    className='landing-page-slogan-sun-moon-wrapper'
                    style={{transform: 'translate(-50%, -50%) rotate(180deg)'}}
                >
                    <motion.div 
                        className='landing-page-slogan-sun-moon-wrapper'
                        initial={{rotate: 0, x: '-50%', y: '-50%'}}
                        animate={{rotate: [0, 180, 180, 360], x: '-50%', y: '-50%'}}
                        transition={{...animationTransition}}
                    >
                        <div className='landing-page-slogan-moon'>
                            <motion.div 
                                className='landing-page-slogan-moon-shadow'
                                initial={{backgroundColor: ' #DAF5FF'}}
                                animate={{backgroundColor: [' #DAF5FF', ' #424769', ' #424769', ' #DAF5FF']}}
                                transition={{...animationTransition}}
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <MountainSvg />
            <div 
                className='landing-page-slogan-text-wrapper'
                style={{top: mediaType === 'mobile' ? '25%' : '35%'}}
            >
                <motion.h2
                    initial={{ y: '0%' , opacity: 0 }}
                    animate={{ y: ['100%', '0%', '0%', '-100%'], opacity: [0, 1, 1, 0] }}
                    transition={{...animationTransitionText1}}
                    style={{fontSize: mediaType === 'mobile' ? '2rem' : (mediaType === 'tablet' ? '2rem' : '3rem')}}
                >
                    <span className='landing-page-brick-highlight'>Copy-Paste</span>
                    <span>Ready</span>
                </motion.h2>
            </div>
            <div 
                className='landing-page-slogan-text-wrapper'
                style={{top: mediaType === 'mobile' ? '25%' : '35%'}}
            > 
                <motion.h2
                    initial={{ y: '0%' , opacity: 0 }}
                    animate={{ y: ['100%', '0%', '0%', '-100%'], opacity: [0, 1, 1, 0] }}
                    transition={{...animationTransitionText2}}
                    style={{
                        fontSize: mediaType === 'mobile' ? '2rem' : (mediaType === 'tablet' ? '2rem' : '3rem'),
                        flexDirection: mediaType === 'mobile' ? 'column' : 'row',
                        gap: mediaType === 'mobile' ? '0' : '0.25em',
                        lineHeight: mediaType === 'mobile' ? '1.2' : '1.2',
                        
                    }}
                >
                    <span className='landing-page-brick-highlight'>Interactive</span>
                    <span>and</span>
                    <span className='landing-page-brick-highlight'>Customizable</span>
                </motion.h2>
            </div>
            {/* <div 
                className='landing-page-slogan-block-mountain-box-cloud'
                style={{ width: '500px', height: '200px' }}
            >
                <Cloud seed={4}/>
            </div> */}
            {/* <Clouds style={{ width: '30%', height: '30%' }}/>
            <Clouds style={{ width: '20%', height: '20%' }}/> */}
        </article>
        // <article 
        //     className='landing-page-slogan-block'
        //     style={{
        //         height: mediaType === 'pc' ? '700px' : '1000px'
        //     }}
        // >
        //     <div 
        //         className='landing-page-slogan-block-content-wrapper'
        //         style={{
        //             flexDirection: mediaType === 'pc' ? 'row' : 'column',
        //             gap: mediaType === 'pc' ? '0px' : '100px',
        //             transform: mediaType === 'pc' ? 'translateY(0)' : 'translateY(70px)'
        //         }}
        //     >
        //         <CardInteractive mediaType={mediaType} draggable={mediaType === 'pc' ? true : false}/>
        //         <div className='landing-page-slogan-and-text'>
        //             &
        //         </div>
        //         <CardPasteReady mediaType={mediaType} draggable={mediaType === 'pc' ? true : false}/>
        //     </div>
        // </article>  
    )
}

export default Slogan;