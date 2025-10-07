import {  motion } from "motion/react";
import './GlitchEffect.css';
import useMediaTypeContext from "../../../../../context/useMediaTypeContext";
import GlitchEffectContent from "./content/GlitchEffectContent";
// import MaskRevealContent from "./content/MaskRevealContent";
import LinkButtons from "../sharedComponent/buttons/linkButtons/LinkButtons";


const GlitchEffect = () => {
    
    const mediaType = useMediaTypeContext();


    return (
        <motion.article 
            className='documents-page-component-info'
            style={{ padding: mediaType === 'mobile' ? '6rem 0.5rem 0.5rem 0.5rem' : '8rem 2rem 2rem 2rem', }}
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{duration: 0.2, ease: 'easeInOut',}}
        >
            <div className='documents-page-component-info-title'>
                <span style={{ fontSize: mediaType === 'mobile' ? '3rem' : '4rem' }}> Glitch Effect </span>
                <LinkButtons links={[{text: 'motion/react', link: 'https://motion.dev/', title: 'build with motion'}]} />
            </div>
            <div className='documents-page-component-info-container'>
                <div className='documents-page-component-info-content'>
                    <div className='documents-page-component-preview-container'>
                        <GlitchEffectContent />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default GlitchEffect;