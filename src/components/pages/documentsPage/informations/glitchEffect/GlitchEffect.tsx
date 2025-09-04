import {  motion } from "motion/react";
import './GlitchEffect.css';
import useMediaTypeContext from "../../../../../context/useMediaTypeContext";
import GlitchEffectContent from "./content/GlitchEffectContent";
// import MaskRevealContent from "./content/MaskRevealContent";
import LinkButtons from "../sharedComponent/buttons/linkButtons/LinkButtons";


const GlitchEffect = () => {
    
    const mediaType = useMediaTypeContext();


    return (
        <motion.div 
            className='documents-page-component-info'
            style={{ paddingTop: mediaType === 'mobile' ? '6rem' : '8rem', }}
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{duration: 0.2, ease: 'easeInOut',}}
        >
            <div className='documents-page-component-info-title'>
                Glitch Effect
                <LinkButtons links={[{text: 'motion/react', link: 'https://motion.dev/', title: 'build with motion'}]} />
            </div>
            <div className='documents-page-component-info-container'>
                <div className='documents-page-component-info-content'>
                    <div className='documents-page-component-preview-container'>
                        <GlitchEffectContent />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default GlitchEffect;