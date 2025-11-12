import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import CrossIcon from "../staticIcons/icons/stroke/CrossIcon";
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';

const IconModal = ({
    isModalOpen, 
    setIsModalOpen, 
    content,
}: {
    isModalOpen: boolean,
    setIsModalOpen: (isModalOpen: boolean) => void,
    content: React.ReactNode
}) => {
    const mediaType = useMediaTypeContext();
    const isMobile = mediaType === 'mobile';

    return (
        createPortal(
            <AnimatePresence mode="wait">
                {isModalOpen && (
                    <motion.div 
                        className='icon-modal' 
                        onClick={() => setIsModalOpen(false)}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2, ease: 'easeInOut'}}
                    >
                        <motion.div 
                            className='icon-modal-content'
                            style={{
                                width: isMobile ? '100dvw' : '900px',
                                maxWidth: isMobile ? '100dvw' : '90dvw',
                                height: isMobile ? '100dvh' : 'fit-content',
                                maxHeight: isMobile ? '100dvh' : '90dvh',
                                borderRadius: isMobile ? '0' : '0.5rem',
                                padding: isMobile ? '1rem' : '3rem 4rem',
                            }}
                            onClick={(e) => e.stopPropagation()}
                            initial={{scale: 0.5, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.5, opacity: 0}}
                            transition={{duration: 0.5, type: 'spring', bounce: 0}}
                        >
                            <button 
                                className='icon-modal-close-button' 
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    top: isMobile ? '0.5rem' : '1rem',
                                    right: isMobile ? '0rem' : '0.6rem',
                                }}
                            >
                                <CrossIcon />
                            </button>
                            {content}
                            {/* <div className='icon-modal-title'>
                                
                            </div> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )
    )
}

export default IconModal;