import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import ComponentsList from "../../shared/components/componentsList/ComponentsList";

const ListModal = ({
    isMenuOpen,
    setIsMenuOpen,
    mediaType
}: {
    isMenuOpen: boolean, 
    setIsMenuOpen: (isMenuOpen: boolean) => void,
    mediaType: 'pc' | 'tablet' | 'mobile'
}) => {
    const handleClose = () => {
        setIsMenuOpen(false);
    }

    const backgroundColor = mediaType === 'tablet' ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.8)';

    useEffect(() => {
        if (mediaType === 'pc') {
            setIsMenuOpen(false);
        }
    }, [mediaType, setIsMenuOpen]);




    return (
        createPortal(
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.section 
                        className="list-modal"
                        style={{ backgroundColor: backgroundColor}}
                        onClick={handleClose}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{
                            duration: 0.2,
                            ease: 'easeInOut',
                        }}
                    >
                        {/* <div className="list-modal-close-button-container"> */}
                            <motion.button 
                                className="list-modal-close-button"
                                onClick={handleClose}
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                exit={{scale: 0}}
                                transition={{
                                    duration: 0.4,
                                    type: 'spring',
                                    bounce: 0,
                                }}
                            >
                                <div className="list-modal-close-icon">
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                        <path d="M 10 10 L 90 90" stroke="var(--basic-purple)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M 10 90 L 90 10" stroke="var(--basic-purple)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.button>
                        {/* </div> */}
                        <motion.div 
                            className={mediaType === 'tablet' ? 'list-modal-content-container-tablet' : 'list-modal-content-container'}
                            onClick={(e) => e.stopPropagation()}
                            initial={{scale: mediaType === 'tablet' ? 0.5 : 1,}}
                            animate={{scale: 1}}
                            exit={{scale: mediaType === 'tablet' ? 0 : 1}}
                            transition={{
                                duration: 0.4,
                                type: 'spring',
                                bounce: 0,
                                // delay: 0.2,
                            }}
                        >
                            <div className="list-modal-content">
                                <ComponentsList setIsMenuOpen={setIsMenuOpen}/>
                            </div>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
            , document.body
        )
    )
}

export default ListModal;