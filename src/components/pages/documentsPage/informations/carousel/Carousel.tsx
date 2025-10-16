import {  motion } from "motion/react";
import './Carousel.css';
import useMediaTypeContext from "../../../../../context/useMediaTypeContext";
import CarouselContent from "./content/CarouselContent";
// import MaskRevealContent from "./content/MaskRevealContent";
import LinkButtons from "../sharedComponent/buttons/linkButtons/LinkButtons";


const Carousel = () => {
    
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
                <span style={{ fontSize: mediaType === 'mobile' ? '3rem' : '4rem' }}> Carousel </span>
                <LinkButtons links={[{text: 'motion/react', link: 'https://motion.dev/', title: 'build with motion'}]} />
            </div>
            <div className='documents-page-component-info-container'>
                <div className='documents-page-component-info-content'>
                    <div className='documents-page-component-preview-container'>
                        <CarouselContent />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default Carousel;