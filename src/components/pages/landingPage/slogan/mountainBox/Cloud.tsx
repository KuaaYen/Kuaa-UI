import { memo } from 'react';
const CloudSVG = memo(({seed}: {seed: number}) => (
    <svg width="0" height="0">
        <filter id="cloudBasicFilter">
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency={0.012} 
                numOctaves={4}
                seed={seed}
            />
            <feDisplacementMap in="SourceGraphic" scale="170" />
        </filter>
        <filter id="cloudShadowFilter">
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency={0.015} 
                numOctaves={2}
                seed={4}
            />
            <feDisplacementMap in="SourceGraphic" scale="140" />
        </filter>
    </svg>
));


const Cloud = ({style, seed = 3}: {style?: React.CSSProperties, seed?: number}) => {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                ...style,
            }}
        >
            {/* filter */}
            <CloudSVG seed={seed}/>
            {/* cloud container decide the size and shape of the cloud*/}
            <div style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse 50% 35% at 50% 50%, rgb(255, 255, 255) 30%, rgba(255,255,255,0) 100%)',
                filter: 'url(#cloudBasicFilter)',
            }}>
                {/* cloud shadow, put inside the cloud container can make shadow fit the shape of the cloud*/}
                {/* middle of the cloud */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(ellipse 70% 20% at 40% 60%, rgba(150, 196, 240, 0.1), transparent 70%)',
                    filter: 'url(#cloudShadowFilter)',
                }}></div>   
                {/* front of the cloud */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(ellipse 50% 20% at 40% 60%, rgba(196, 229, 240, 0.05), transparent 40%)',
                    filter: 'url(#cloudShadowFilter)',
                }}></div>
            </div>
        </div>
    )
}


export default memo(Cloud);
