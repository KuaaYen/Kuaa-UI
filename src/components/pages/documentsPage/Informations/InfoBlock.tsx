import useMediaTypeContext from '../../../../context/useMediaTypeContext';
import { useState } from 'react';
import { Illustration, Box } from 'react-zdog';
import { AnimatePresence, motion } from 'motion/react';
import SwitchBlock from './sharedComponent/switch/SwitchBlock';


const PreviewContent = () => {
    return (
        <>
            <div className='documents-page-component-demo'>
                <Illustration 
                    dragRotate
                    style={{
                        width: '400px',
                        height: '400px',
                    }}
                >
                    <Box 
                        width={100}
                        height={100}
                        depth={100}
                        color='white'
                        stroke={10}
                        leftFace="var(--basic-eggshell)"
                        rightFace="var(--basic-eggshell)"
                        frontFace="var(--basic-eggshell)"
                        rearFace="var(--basic-eggshell)"
                    />
                </Illustration>
            </div>
            <div className='documents-page-component-preview-props-title'>
                Props
            </div>
        </>
    )
}
const InfoBlock = () => {
    const mediaType = useMediaTypeContext();
    const [switchState, setSwitchState] = useState<'preview' | 'code'>('preview');


    return (
        <motion.div 
            className='documents-page-component-info'
            style={{ paddingTop: mediaType === 'mobile' ? '6rem' : '8rem', }}
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{duration: 0.2, ease: 'easeInOut',}}
        >
            <div className='documents-page-component-info-title'>
                Ramdom Shit
            </div>
            <div className='documents-page-component-info-container'>
                <SwitchBlock switchState={switchState} setSwitchState={setSwitchState} />
                <div className='documents-page-component-info-content'>
                    <AnimatePresence mode='popLayout'>                        
                        {switchState === 'preview' && (
                            <motion.div
                                key='preview'
                                className='documents-page-component-preview-container'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <PreviewContent />
                            </motion.div>
                        )}
                        {switchState === 'code' && (
                            <motion.div 
                                key='code'
                                className='documents-page-component-demo'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                code
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            {/* info block */}
        </motion.div>
    );
};

export default InfoBlock;