import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const ArtsPage = () => {
    return (
        <>
        <Helmet>
            <title>Arts — Kuaa UI</title>
            <meta name="description" content="Creative arts and experiments by Kuaa UI." />
            <link rel="canonical" href="https://kuaa-ui.vercel.app/arts" />
            <meta property="og:title" content="Arts — Kuaa UI" />
            <meta property="og:url" content="https://kuaa-ui.vercel.app/arts" />
            <meta property="og:type" content="website" />
        </Helmet>
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
        </>
    );
};

export default ArtsPage;