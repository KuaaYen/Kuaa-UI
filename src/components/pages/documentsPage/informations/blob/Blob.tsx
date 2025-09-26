import {  motion } from "motion/react";
import useMediaTypeContext from "../../../../../context/useMediaTypeContext";
import BlobContent from "./content/BlobContent";
import LinkButtons from "../sharedComponent/buttons/linkButtons/LinkButtons";
import './Blob.css';


const Blob = () => {
    
    const mediaType = useMediaTypeContext();


    return (
        <motion.div 
            className='documents-page-component-info'
            style={{ padding: mediaType === 'mobile' ? '6rem 0.5rem 0.5rem 0.5rem' : '8rem 2rem 2rem 2rem', }}
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{duration: 0.2, ease: 'easeInOut',}}
        >
            <div className='documents-page-component-info-title'>
                <span> Blob </span>
                <LinkButtons links={[{text: 'motion/react', link: 'https://motion.dev/', title: 'build with motion'}]} />
            </div>
            <div className='documents-page-component-info-container'>
                <div className='documents-page-component-info-content'>
                    <div className='documents-page-component-preview-container'>
                        <BlobContent />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Blob;