import LandingHero from './hero/LandingHero';
import FootPrintBlock from './bridge/FootPrintBlock';
// import LiquidGlassCursor from './cursor/LiquidGlassCursor';
import Oiiao, { OiiaoRef } from './cursor/Oiiao';
import './landingPage.css';
import { useRef } from 'react';

const LandingPage = () => {
    const oiiaoRef = useRef<OiiaoRef>(null);
    const handleChangeOiiaoAnimation = (type: 'spin' | 'swing') => {
        if(oiiaoRef.current) {
            oiiaoRef.current?.setAnimationType(type);
        }
    }

    return (
        <div className="landing-page-container">
            <div className='landing-page-content'>

                <LandingHero handleChangeOiiaoAnimation={handleChangeOiiaoAnimation} />
                <FootPrintBlock />
                <div style={{width: '100%', height: '100dvh', backgroundColor: 'var(--basic-sunset)'}}>
                    just fot test
                </div>  
            </div>
            {/* <LiquidGlassCursor /> */}
            <Oiiao ref={oiiaoRef} />
        </div>
    )
}

export default LandingPage;