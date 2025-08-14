import './landingPage.css';
import { useRef } from 'react';
import { motion } from 'motion/react';
import LandingHero from './hero/LandingHero';
import FootPrintBlock from './bridge/FootPrintBlock';
// import LiquidGlassCursor from './cursor/LiquidGlassCursor';
import Oiiao, { OiiaoRef } from './cursor/Oiiao';
import Slogan from './slogan/Slogan';
import Dashboard from './dashboard/Dashboard';
import StartExploring from './startExploring/StartExploring';
import useMediaTypeContext from '../../../context/useMediaTypeContext';
import Footer from '../../footer/Footer';

const LandingPage = () => {
    const mediaType = useMediaTypeContext();
    const oiiaoRef = useRef<OiiaoRef>(null);
    const handleChangeOiiaoAnimation = (type: 'spin' | 'swing') => {
        if(oiiaoRef.current) {
            oiiaoRef.current?.setAnimationType(type);
        }
    }

    const footPrintData1 = [
        {right: '18%', top: '0%', rotate: '-135deg', stepLength: 70, color: '#585b71'},
        {right: '30%', top: '30%', rotate: '-125deg', stepLength: 80, color: '#52556c'},
        {right: '45%', top: '53%', rotate: '-113deg', stepLength: 90, color: '#4b4e66'},
        {right: '62%', top: '70%', rotate: '-120deg', stepLength: 95, color: '#444761'},
        {right: '78%', top: '100%', rotate: '-130deg', stepLength: 90, color: '#3D405B'}
    ];
    
    const footPrintData2 = [
        {right: '76%', top: '0%', rotate: '150deg', stepLength: 70, color: '#585b71'},
        {right: '65%', top: '25%', rotate: '125deg', stepLength: 80, color: '#52556c'},
        {right: '47%', top: '45%', rotate: '135deg', stepLength: 100, color: '#4b4e66'},
        {right: '35%', top: '75%', rotate: '145deg', stepLength: 120, color: '#444761'}
        // {right: '30%', top: '120%', rotate: '160deg', stepLength: 90, color: '#3D405B'},
    ];

    const footPrintData3 = [
        {right: '20%', top: '12%', rotate: '205deg', stepLength: 90, color: '#585b71'},
        {right: '32%', top: '48%', rotate: '230deg', stepLength: 100, color: '#52556c'},
        {right: '45%', top: '90%', rotate: '210deg', stepLength: 100, color: '#4b4e66'}
    ];
    
    const mobileFootPrintData = [
        {right: '38%', top: '20%', rotate: '180deg', stepLength: 70, color: '#585b71'},
        {right: '42%', top: '80%', rotate: '180deg', stepLength: 70, color: '#52556c'},
    ];

    const tabletFootPrintData1 = [
        {right: '18%', top: '20%', rotate: '-140deg', stepLength: 70, color: '#585b71'},
        {right: '35%', top: '50%', rotate: '-130deg', stepLength: 70, color: '#52556c'},
        {right: '53%', top: '85%', rotate: '-145deg', stepLength: 70, color: '#4b4e66'},
    ];
    const tabletFootPrintData2 = [
        {right: '65%', top: '10%', rotate: '155deg', stepLength: 70, color: '#585b71'},
        {right: '52%', top: '40%', rotate: '140deg', stepLength: 70, color: '#52556c'},
        {right: '40%', top: '72%', rotate: '165deg', stepLength: 70, color: '#4b4e66'},
    ];
    const tabletFootPrintData3 = [
        {right: '38%', top: '20%', rotate: '180deg', stepLength: 70, color: '#585b71'},
        {right: '42%', top: '80%', rotate: '180deg', stepLength: 70, color: '#52556c'},
    ];
    

    const getFootPrintData = ({block}: {block: number}) => {
        const footPrintMapping = {
            pc: [footPrintData1, footPrintData2, footPrintData3],
            tablet: [tabletFootPrintData1, tabletFootPrintData2, tabletFootPrintData3],
            mobile: [mobileFootPrintData, mobileFootPrintData, mobileFootPrintData]
        };
        
        return footPrintMapping[mediaType]?.[block - 1] || mobileFootPrintData;
    }

    const getBlockHeight = (block: number) => {
        const blockHeightMapping = {
            pc: [450, 650, 400],
            tablet: [400, 600, 400],
            mobile: [300, 300, 300]
        };
        return blockHeightMapping[mediaType]?.[block - 1] || 300;
    }

    return (
        <motion.div 
            // key="landing"
            className="landing-page-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <div 
                className='landing-page-content-wrapper'
                style={{marginTop: mediaType === 'mobile' ? '0' : '11rem'}}
            >
                <div className='landing-page-content'>
                    <LandingHero handleChangeOiiaoAnimation={handleChangeOiiaoAnimation} />
                    <FootPrintBlock 
                        footPrintData={getFootPrintData({block: 1})} 
                        blockHeight={getBlockHeight(1)} 
                    />
                    <Slogan />
                    <FootPrintBlock 
                        footPrintData={getFootPrintData({block: 2})} 
                        blockHeight={getBlockHeight(2)} 
                    />
                    <Dashboard />
                    <FootPrintBlock 
                        footPrintData={getFootPrintData({block: 3})} 
                        blockHeight={getBlockHeight(3)} 
                    />
                    <StartExploring handleChangeOiiaoAnimation={handleChangeOiiaoAnimation} />
                </div>
                <Footer />
            </div>
            {/* <LiquidGlassCursor /> */}
            {mediaType === 'pc' && <Oiiao ref={oiiaoRef} />}
        </motion.div>
    )
}

export default LandingPage;