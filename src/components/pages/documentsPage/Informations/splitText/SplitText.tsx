import {  motion } from "motion/react";
import useMediaTypeContext from "../../../../../context/useMediaTypeContext";
import SplitTextContent from "./content/SplitTextContent";
import LinkButtons from "../sharedComponent/buttons/linkButtons/LinkButtons";


const SplitText = () => {
    
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
                <span> Split Text </span>
                <LinkButtons links={[{text: 'motion/react', link: 'https://motion.dev/', title: 'build with motion'}]} />
            </div>
            <div className='documents-page-component-info-container'>
                <div className='documents-page-component-info-content'>
                    <motion.div
                        key='preview'
                        className='documents-page-component-preview-container'
                    >
                        <SplitTextContent />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default SplitText;