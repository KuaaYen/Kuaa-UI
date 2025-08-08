// import { motion } from 'motion/react';
import { memo , useState, useEffect} from 'react';
import MagnifierOutline from './MagnifierOutline';
import DocsIcon from './DocsIcon';

const Magnifier = () => {
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let magnifierAnimationId: number;
        const startTime = Date.now();
        let lastTime = 0;

        const animate = () => {
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTime;
            // console.log({currentTime: currentTime, lastTime: lastTime, deltaTime: deltaTime});
            if(deltaTime > 1000 / 60) {
                const elapsed = currentTime - startTime;
                const newX = Math.sin(elapsed * 0.002) * 45 + 12;
                const newY = Math.cos(elapsed * 0.002) * 63 + 12;
                setMagnifierPosition({ x: newX, y: newY });
                lastTime = currentTime;
            }
            magnifierAnimationId = requestAnimationFrame(animate);

        }

        animate();

        return () => cancelAnimationFrame(magnifierAnimationId);
    },[])


    const createMapURI = () => {
        const mapText = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <radialGradient id="leftTop-color" cx="0%" cy="0%" r="100%">
                        <stop offset="30%" stop-color="rgb(255, 0, 255)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(255, 0, 255)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="leftBottom-color" cx="0%" cy="100%" r="100%">
                        <stop offset="30%" stop-color="rgb(255, 0, 0)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(255, 0, 0)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="rightTop-color" cx="100%" cy="0%" r="100%">
                        <stop offset="30%" stop-color="rgb(0, 0, 255)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(0, 0, 255)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="rightBottom-color" cx="100%" cy="100%" r="100%">
                        <stop offset="30%" stop-color="rgb(0, 0, 0)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(0, 0, 0)" stop-opacity="0" />
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="rgb(127, 127, 127)" />
                <rect width="100%" height="100%" fill="url(#leftTop-color)" />
                <rect width="100%" height="100%" fill="url(#leftBottom-color)" />
                <rect width="100%" height="100%" fill="url(#rightTop-color)" />
                <rect width="100%" height="100%" fill="url(#rightBottom-color)" />
            </svg>
        `
        return 'data:image/svg+xml;base64,' + btoa(mapText);
    }

    // const mapURI = createMapURI();
    // console.log(mapURI);

    return (
        
        <div className='landing-page-dashboard-content-icon'>
            <DocsIcon />
            <div className="landing-page-magnifier-container">
                <div className="landing-page-magnifier-component-container"  >
                    <div 
                        className="landing-page-magnifier-component-wrapper"
                        style={{
                            transform: `translate(${magnifierPosition.x}px, ${magnifierPosition.y}px)`,
                        }} 
                    >
                        <div 
                            className="landing-page-magnifier-lens"
                            style={{
                                backdropFilter: 'url(#filter)',
                                // backgroundImage: `url(${mapURI})`,
                            }}
                        ></div>
                        <MagnifierOutline />
                    </div>
                </div>
                <svg style={{ display: 'none' }}>
                    <defs>
                        <filter id="filter">
                            <feImage href={createMapURI()} result="map" />
                            <feDisplacementMap in="SourceGraphic" in2="map" scale="35" xChannelSelector="R" yChannelSelector="B" result="displaced"/>
                            <feGaussianBlur in="displaced" stdDeviation="1.3" result="blurred" />
                            <feConvolveMatrix 
                                in="blurred"
                                order="3"
                                // 強度更高的銳化
                                kernelMatrix="-1 -1 -1 -1 9 -1 -1 -1 -1"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default memo(Magnifier);