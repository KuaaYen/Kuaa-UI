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
import MarchingAnts from '../../shared/components/marchingAnts/MarchingAnts';

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

    const createMarchingAnts = () => {

        switch(mediaType) {
            case 'pc':
                return (
                    <>
                        <MarchingAnts
                            key='pc-ants-1'
                            path='M 10 0 C 2 29 26 17 52 16 C 71 16 90 21 101 37'
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '780px',
                            }}
                            strokeWidth='0.8'
                            svgStyle={{transform: 'translateX(10%)'}}
                            maskDirection='140deg'
                            duration={3}
                        />                  
                        <MarchingAnts
                            key='pc-ants-2'
                            path='M 100 10 C 94 17 69 20 77 38 S 97 64 100 80'
                            style={{
                                position: 'absolute',
                                top: '700px',
                                right: 0,
                                width: '780px',
                            }}
                            strokeWidth='0.8'
                            svgStyle={{transform: 'translateX(0%)'}}
                            maskDirection='180deg'
                            duration={3}
                            delay={2}
                        />

                        <MarchingAnts 
                            key='pc-ants-3'
                            path='M 0 10 C 23 17 6 37 30 42 C 46 46 51 61 44 71 C 34 87 2 86 0 100'
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: '280px',
                                width: '800px',
                            }}
                            maskDirection='180deg'
                            strokeWidth='0.8'
                            duration={2}
                            delay={1.5}
                            maskEase='linear'
                        />                                        
                    </>
                )
            case 'tablet':
                return (
                    <>
                        <MarchingAnts
                            key='tablet-ants-1'
                            path='M 10 0 C 2 29 26 17 52 16 C 71 16 90 21 101 37'
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '95dvw',
                            }}
                            strokeWidth='0.65'
                            svgStyle={{transform: 'translateX(35%)'}}
                            maskDirection='140deg'
                            duration={3}
                        />                  
                        <MarchingAnts
                            key='tablet-ants-2'
                            path='M 0 10 C 52 15 38 36 0 80'
                            style={{
                                position: 'absolute',
                                top: '580px',
                                left: 0,
                                width: '60%',
                            }}
                            strokeWidth='1.1'
                            dasharray={[3, 4]}
                            maskDirection='180deg'
                            duration={2}
                            delay={1.5}
                        />                  
                    </>
                )
            case 'mobile':
                return (
                    <MarchingAnts
                        key='mobile-ants-1'
                        path='M 0 18 C 30 50 60 -5 100 33'
                        style={{
                            position: 'absolute',
                            top: '2.5dvh  ',
                            left: 0,
                            width: '100%',
                        }}
                        svgStyle={{transform: 'translateX(0%)'}}
                        strokeWidth='0.8'
                    />
                )
        }

        // if(mediaType === 'pc' || mediaType === 'tablet') {
        //     return (
        //         <MarchingAnts
        //             path='M 10 0 C 2 29 26 17 52 16 C 71 16 90 21 101 37'
        //             style={{
        //                 position: 'absolute',
        //                 top: 0,
        //                 right: 0,
        //                 width: getMarchingAntsWidth(),
        //             }}
        //             strokeWidth='0.8'
        //             svgStyle={getMarchingAntsSvgStyle()}
        //             maskDirection='140deg'
        //             duration={3}
        //         />                  
        //     )
        // } else {
        //     return (
        //         <MarchingAnts
        //             path='M 0 18 C 30 50 60 -5 100 33'
        //             style={{
        //                 position: 'absolute',
        //                 top: '2.5dvh  ',
        //                 left: 0,
        //                 width: getMarchingAntsWidth(),
        //             }}
        //             svgStyle={getMarchingAntsSvgStyle()}
        //             strokeWidth='0.8'
        //         />                  
        //     );
        // }

    }

    // console.log(mediaType);

    return (
        <motion.div 
            // key="landing"
            className="landing-page-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            {createMarchingAnts()}
            {/* <MarchingAnts
                path='M 10 0 C 2 29 26 17 52 16 C 71 16 90 21 101 37'
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: getMarchingAntsWidth(),
                }}
                svgStyle={getMarchingAntsSvgStyle()}
            />   */}
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