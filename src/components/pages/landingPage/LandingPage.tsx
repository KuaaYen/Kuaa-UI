import './landingPage.css';
import LandingHero from './hero/LandingHero';
import FootPrintBlock from './bridge/FootPrintBlock';
// import LiquidGlassCursor from './cursor/LiquidGlassCursor';
import Oiiao, { OiiaoRef } from './cursor/Oiiao';
import Slogan from './slogan/Slogan';
import Dashboard from './dashboard/Dashboard';
import { useRef } from 'react';

const LandingPage = () => {
    const oiiaoRef = useRef<OiiaoRef>(null);
    const handleChangeOiiaoAnimation = (type: 'spin' | 'swing') => {
        if(oiiaoRef.current) {
            oiiaoRef.current?.setAnimationType(type);
        }
    }

    const footPrintData1 = [
        {right: '18%', top: '-15%', rotate: '-135deg', stepLength: 70, color: '#585b71'},
        {right: '30%', top: '15%', rotate: '-125deg', stepLength: 80, color: '#52556c'},
        {right: '45%', top: '38%', rotate: '-113deg', stepLength: 90, color: '#4b4e66'},
        {right: '62%', top: '55%', rotate: '-105deg', stepLength: 95, color: '#444761'},
        {right: '78%', top: '80%', rotate: '-130deg', stepLength: 90, color: '#3D405B'},
    ];
    
    const footPrintData2 = [
        {right: '76%', top: '-33%', rotate: '150deg', stepLength: 70, color: '#585b71'},
        {right: '64%', top: '5%', rotate: '120deg', stepLength: 80, color: '#52556c'},
        {right: '47%', top: '29%', rotate: '115deg', stepLength: 100, color: '#4b4e66'},
        {right: '35%', top: '75%', rotate: '145deg', stepLength: 120, color: '#444761'},
        // {right: '30%', top: '120%', rotate: '160deg', stepLength: 90, color: '#3D405B'},
    ];

    const footPrintData3 = [
        {right: '20%', top: '12%', rotate: '205deg', stepLength: 90, color: '#444761'},
        {right: '32%', top: '48%', rotate: '230deg', stepLength: 100, color: '#444761'},
        {right: '45%', top: '90%', rotate: '210deg', stepLength: 100, color: '#444761'},
    ];
    
    return (
        <div className="landing-page-container">
            <div className='landing-page-content'>

                <LandingHero handleChangeOiiaoAnimation={handleChangeOiiaoAnimation} />
                <FootPrintBlock footPrintData={footPrintData1} />
                <Slogan />
                <FootPrintBlock footPrintData={footPrintData2} />
                <Dashboard />
                <FootPrintBlock footPrintData={footPrintData3} blockHeight={400} />
                <Slogan />
            </div>
            {/* <LiquidGlassCursor /> */}
            <Oiiao ref={oiiaoRef} />
        </div>
    )
}

export default LandingPage;