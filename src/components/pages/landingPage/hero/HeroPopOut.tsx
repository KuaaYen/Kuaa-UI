// import LightBulb from './LightBulb';
import ChillSun from './ChillSun';

const HeroPopOut = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: '0.2em',
                right: '1.5em',
                width: '3.5em',
                aspectRatio: 1,
                borderBottom: '4px solid #3D405B',
                overflow: 'hidden',
            }}
        >
            {/* <LightBulb/> */}
            <ChillSun/>
        </div>
    )
}

export default HeroPopOut;