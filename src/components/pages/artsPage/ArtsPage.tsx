import { motion } from 'motion/react';

const ArtsPage = () => {
    return (
        <motion.div 
            // key="arts"
            style={{
                width: '100%',
                height: '100dvh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--basic-ivory)',
                color: 'var(--basic-sunset)',
                fontSize: '2rem',
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <h1>Arts</h1>
        </motion.div>
    );
};

export default ArtsPage;