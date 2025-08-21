import { motion, AnimatePresence } from 'motion/react';
import './documentsPage.css';
import ComponentList from './componentsList/ComponentList';
// import SplitText from './Informations/splitText/SplitText';
// import { Outlet } from 'react-router-dom';
// import InfoBlock from './Informations/InfoBlock';
// import { useState } from 'react';
import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

const DocumentsPage = () => {
    const DocumentsAnimatedOutlet = () => {
        const location = useLocation();
        const outlet = useOutlet();
        
        return (
            <AnimatePresence mode='wait'>
                {outlet && React.cloneElement(outlet, { 
                    key: location.pathname // 這裡用完整路徑，因為我們只關心子路由切換
                })}
            </AnimatePresence>
        );
    };

    // const [selectedComponent, setSelectedComponent] = useState<string>('test1');
    return (
        <motion.div 
            // key="documents"
            className='documents-page-container'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <div className='documents-page-content'>
                <ComponentList />
                <DocumentsAnimatedOutlet />
            </div>
            {/* <div className="documents-page-mask"></div> */}
        </motion.div>
    );
};

export default DocumentsPage;