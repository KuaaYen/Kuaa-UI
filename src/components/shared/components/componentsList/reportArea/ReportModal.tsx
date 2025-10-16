import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "motion/react";
import LinkItem from './LinkItem';
// import PointIcon from './icons/PointIcon';
// import GithubIcon from './icons/GithubIcon';

const ReportModal = ({isModalOpen, setIsModalOpen}: {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void}) => {
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsModalOpen(false);
    }

    const modalVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1,},
        exit: {opacity: 0,},
    }


    return (
        createPortal(
            <AnimatePresence mode="wait">
                {isModalOpen && (
                    <motion.article 
                        className='report-modal'
                        onClick={handleClose}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration: 0.2,
                            ease: 'easeInOut',
                        }}
                    >
                        <LinkItem icon='E' text='Email' delay={0} />
                        <LinkItem icon='L' text='LinkedIn' delay={0.3} />
                        <LinkItem icon="G" text='Github' delay={0.1} />
                        <LinkItem icon='T' text='Threads' delay={0.3} />
                    </motion.article>
                )}
            </AnimatePresence>
            , document.body
        )
    )
}

export default ReportModal;