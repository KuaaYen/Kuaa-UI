import LandingHero from './hero/LandingHero';
import FootPrintBlock from './bridge/FootPrintBlock';
// import LiquidGlassCursor from './cursor/LiquidGlassCursor';
import './landingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className='landing-page-content'>

                <LandingHero />
                <FootPrintBlock />
                <div style={{width: '100%', height: '100dvh', backgroundColor: 'var(--basic-sunset)'}}>
                    just fot test
                </div>
            </div>
            {/* <LiquidGlassCursor /> */}
        </div>
    )
}

export default LandingPage;