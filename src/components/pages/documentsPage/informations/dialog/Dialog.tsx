import {  motion } from "motion/react";
import useMediaTypeContext from "../../../../../context/useMediaTypeContext";
import DialogContent from "./content/DialogContent";
// import LinkButtons from "../sharedComponent/buttons/linkButtons/LinkButtons";
import './Dialog.css';


const Dialog = () => {
    
    const mediaType = useMediaTypeContext();


    return (
        <motion.article 
            className='documents-page-component-info'
            style={{ padding: mediaType === 'mobile' ? '6rem 0.5rem 0.5rem 0.5rem' : '8rem 2rem 2rem 2rem', }}
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{duration: 0.3, ease: 'easeInOut',}}
        >
            <div className='documents-page-component-info-title'>
                <span style={{ fontSize: mediaType === 'mobile' ? '3rem' : '4rem' }}> Dialog </span>
                {/* <LinkButtons links={[{text: 'motion/react', link: 'https://motion.dev/', title: 'build with motion'}]} /> */}
            </div>
            <div className='documents-page-component-info-container'>
                <div className='documents-page-component-info-content'>
                    <div className='documents-page-component-preview-container'>
                        <DialogContent />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default Dialog;