import { motion } from 'motion/react';

const DocumentsPage = () => {
    return (
        <motion.div 
            // key="documents"
            style={{
                width: '100%',
                height: '100dvh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--basic-ivory)',
                color: 'var(--basic-brick)',
                fontSize: '2rem',
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <h1>Documents</h1>
        </motion.div>
    );
};

export default DocumentsPage;