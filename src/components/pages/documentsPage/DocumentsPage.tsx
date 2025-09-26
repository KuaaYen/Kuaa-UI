import './documentsPage.css';
import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import ComponentList from './componentsList/ComponentList';
import useMediaTypeContext from '../../../context/useMediaTypeContext';
import MarchingAnts from '../../shared/components/marchingAnts/MarchingAnts';

// 必須放在外面，否則mediaType更新時，DocumentsAnimatedOutlet會被重新建立，
// 而React.cloneElement便會複製一個新的outlet，導致outlet內的組件重新掛載
const DocumentsAnimatedOutlet = () => {
    const location = useLocation();
    const outlet = useOutlet();
    
    return (
        <AnimatePresence mode='wait'>
            {outlet && React.cloneElement(outlet, { 
                key: location.pathname
            })}
        </AnimatePresence>
    );
};

const DocumentsPage = () => {
    const mediaType = useMediaTypeContext();
    const createMarchingAnts = () => {
        if(mediaType === 'pc' || mediaType === 'tablet') {
            return (
                <>
                    <MarchingAnts
                        path='M 10 0 C 2 29 26 17 52 16 C 71 16 90 21 101 37'
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: mediaType === 'pc' ? '780px' : '700px',
                            maxWidth:  mediaType === 'pc' ? '55dvw' : '100dvw',
                        }}
                        strokeWidth='0.8'
                        svgStyle={{transform: `translateX(${mediaType === 'pc' ? '10%' : '48%'})`}}
                        maskDirection='140deg'
                        duration={3}
                    />  
                    <MarchingAnts
                        path='M 10 100 C 43 100 46 70 57 86 C 65 97 83 87 100 76'
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: mediaType === 'pc' ? '600px' : '600px',
                            maxWidth:  mediaType === 'pc' ? '55dvw' : '55dvw',
                        }}
                        strokeWidth={mediaType === 'pc' ? '1.1' : '1.2'}
                        svgStyle={{transform: `translateX(0%)`}}
                        maskDirection='90deg'
                        dasharray={[2.4, 3.6]}
                        duration={3}
                    />  
                </>
            );
        }
    }

    return (
        <>
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
            {createMarchingAnts()}
        </>
    );
};

export default DocumentsPage;