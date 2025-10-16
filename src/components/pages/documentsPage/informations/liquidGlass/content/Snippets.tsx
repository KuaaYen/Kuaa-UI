import Snippet from "../../sharedComponent/snippets/Snippet";
import { memo } from "react";

const Snippets = () => {
    const installationSnippet = `
    # No installation needed
    `


    const usageSnippet = `
    // Import LiquidGlass component, your path may be different
    import { LiquidGlass } from './LiquidGlass';

    // Use the LiquidGlass component
    <LiquidGlass 
        // every prop is optional
        width={250}
        height={250}
        borderRadius={125}
        intensity={1.5}
        centerSize={0.76}
        centerBlur={7}
        backgroundBlur={0.6}
        backgroundOpacity={0.05}
    >
        {/* The content you want to put inside the liquid glass */}
        {children}
    </LiquidGlass>
    `

    const CompleteCodeSnippetTS = `

interface LiquidGlassProps {
    width?: number;
    height?: number;
    borderRadius?: string | number;
    intensity?: number;
    centerSize?: number;
    centerBlur?: number;
    backgroundBlur?: number;
    backgroundOpacity?: number;
    children?: React.ReactNode;
}

const LiquidGlass = ({ 
    width = 250, 
    height = 250,
    borderRadius = 125, 
    intensity = 1.5,
    centerSize = 0.76,
    centerBlur = 7,
    backgroundBlur = 0.6,
    backgroundOpacity = 0.05,
    children,
}: LiquidGlassProps) => {
    
    const parseRadius = (radius: string | number, containerWidth: number, containerHeight: number) => {
        if (typeof radius === 'number') {
            const maxRadius = Math.min(containerWidth, containerHeight) / 2;
            return Math.min(radius, maxRadius);
        }
        
        if (radius.includes('rem')) {
            const remValue = parseFloat(radius.replace('rem', ''))*16;
            const maxRadius = Math.min(containerWidth, containerHeight) / 2;
            return Math.min(remValue, maxRadius);
        }

        if (radius.includes('%')) {
            const percentage = parseFloat(radius.replace('%', ''));
            const baseSize = Math.min(containerWidth, containerHeight);
            const calculatedRadius = (baseSize / 2) * (percentage / 100);
            return calculatedRadius;
        }
        
        if (radius.includes('px')) {
            const pxValue = parseFloat(radius.replace('px', ''));
            const maxRadius = Math.min(containerWidth, containerHeight) / 2;
            return Math.min(pxValue, maxRadius);
        }
        
        const numValue = parseFloat(radius) || 20;
        const maxRadius = Math.min(containerWidth, containerHeight) / 2;
        return Math.min(numValue, maxRadius);
    };
    
    const createDisplacementMap = () => {
        const rectWidth = width * centerSize;
        const rectHeight = height * centerSize;
        
        const actualRadius = parseRadius(borderRadius, rectWidth, rectHeight);
        
        const displacementMap = \`
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="100%" 
                height="100%"
                preserveAspectRatio="none"
            >
                <defs>
                    <radialGradient id="gradient-purple" cx="0%" cy="0%" r="100%">
                        <stop offset="0%" stop-color="rgb(255, 0, 255)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(255, 0, 255)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="gradient-red" cx="0%" cy="100%" r="100%">
                        <stop offset="0%" stop-color="rgb(255, 0, 0)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(255, 0, 0)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="gradient-blue" cx="100%" cy="0%" r="100%">
                        <stop offset="0%" stop-color="rgb(0, 0, 255)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(0, 0, 255)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="gradient-black" cx="100%" cy="100%" r="100%">
                        <stop offset="0%" stop-color="rgb(0, 0, 0)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(0, 0, 0)" stop-opacity="0" />
                    </radialGradient>
                    <filter id="blur-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="\${centerBlur}" />
                    </filter>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-purple)"/>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-red)"/>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-blue)"/>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-black)"/>
                <rect 
                    x="\${(1-centerSize)/2*100}%" y="\${(1-centerSize)/2*100}%" 
                    width="\${centerSize*100}%"
                    height="\${centerSize*100}%"
                    fill="rgba(127, 127, 127, 1)"
                    rx="\${actualRadius}"
                    filter="url(#blur-filter)"
                />

            </svg>\`;
        return 'data:image/svg+xml;base64,' + btoa(displacementMap);
    }
    
    return (
        <>
            <div className="liquid-glass-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="liquid-glass-displacement-map"
                >
                    <defs>
                        <filter id="liquid-glass-map" colorInterpolationFilters="sRGB"  >
                            <feImage href={createDisplacementMap()} result="map" />
                            
                            <feDisplacementMap in="SourceGraphic" in2="map" scale={intensity*100} xChannelSelector="R" yChannelSelector="B" result="displaced-red"/>
                            <feDisplacementMap in="SourceGraphic" in2="map" scale={intensity*90} xChannelSelector="R" yChannelSelector="B" result="displaced-green"/>
                            <feDisplacementMap in="SourceGraphic" in2="map" scale={intensity*80} xChannelSelector="R" yChannelSelector="B" result="displaced-blue"/>
                            
                            <feColorMatrix 
                                in="displaced-red"
                                mode="matrix"
                                values="1 0 0 0 0 
                                        0 0 0 0 0 
                                        0 0 0 0 0 
                                        0 0 0 1 0" 
                                result="red-channel"
                            />
                            <feColorMatrix 
                                in="displaced-green"
                                mode="matrix"
                                values="0 0 0 0 0 
                                        0 1 0 0 0 
                                        0 0 0 0 0 
                                        0 0 0 1 0" 
                                result="green-channel"
                            />
                            <feColorMatrix 
                                in="displaced-blue"
                                mode="matrix"
                                values="0 0 0 0 0 
                                        0 0 0 0 0 
                                        0 0 1 0 0 
                                        0 0 0 1 0" 
                                result="blue-channel"
                            />
                            
                            <feBlend in="red-channel" in2="green-channel" mode="screen" result="rg-combined"/>
                            <feBlend in="rg-combined" in2="blue-channel" mode="screen" result="final-result"/>
                            <feGaussianBlur in="final-result" stdDeviation={backgroundBlur}/>
                        </filter>
                    </defs>
                </svg>
                <div 
                    className="liquid-glass"
                    style={{
                        width: width,
                        height: height,
                        borderRadius: borderRadius,
                        backdropFilter: 'url(#liquid-glass-map)',
                        backgroundColor: \`rgba(0, 0, 0, \${backgroundOpacity})\`,
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default LiquidGlass;
    `

    const CompleteCodeSnippetJS = `

const LiquidGlass = ({ 
    width = 250, 
    height = 250,
    borderRadius = 125, 
    intensity = 1.5,
    centerSize = 0.76,
    centerBlur = 7,
    backgroundBlur = 0.6,
    backgroundOpacity = 0.05,
    children,
}) => {
    
    const parseRadius = (radius, containerWidth, containerHeight) => {
        if (typeof radius === 'number') {
            const maxRadius = Math.min(containerWidth, containerHeight) / 2;
            return Math.min(radius, maxRadius);
        }
        
        if (radius.includes('rem')) {
            const remValue = parseFloat(radius.replace('rem', ''))*16;
            const maxRadius = Math.min(containerWidth, containerHeight) / 2;
            return Math.min(remValue, maxRadius);
        }

        if (radius.includes('%')) {
            const percentage = parseFloat(radius.replace('%', ''));
            const baseSize = Math.min(containerWidth, containerHeight);
            const calculatedRadius = (baseSize / 2) * (percentage / 100);
            return calculatedRadius;
        }
        
        if (radius.includes('px')) {
            const pxValue = parseFloat(radius.replace('px', ''));
            const maxRadius = Math.min(containerWidth, containerHeight) / 2;
            return Math.min(pxValue, maxRadius);
        }
        
        const numValue = parseFloat(radius) || 20;
        const maxRadius = Math.min(containerWidth, containerHeight) / 2;
        return Math.min(numValue, maxRadius);
    };
    
    const createDisplacementMap = () => {
        const rectWidth = width * centerSize;
        const rectHeight = height * centerSize;
        
        const actualRadius = parseRadius(borderRadius, rectWidth, rectHeight);
        
        const displacementMap = \`
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="100%" 
                height="100%"
                preserveAspectRatio="none"
            >
                <defs>
                    <radialGradient id="gradient-purple" cx="0%" cy="0%" r="100%">
                        <stop offset="0%" stop-color="rgb(255, 0, 255)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(255, 0, 255)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="gradient-red" cx="0%" cy="100%" r="100%">
                        <stop offset="0%" stop-color="rgb(255, 0, 0)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(255, 0, 0)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="gradient-blue" cx="100%" cy="0%" r="100%">
                        <stop offset="0%" stop-color="rgb(0, 0, 255)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(0, 0, 255)" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="gradient-black" cx="100%" cy="100%" r="100%">
                        <stop offset="0%" stop-color="rgb(0, 0, 0)" stop-opacity="1" />
                        <stop offset="100%" stop-color="rgb(0, 0, 0)" stop-opacity="0" />
                    </radialGradient>
                    <filter id="blur-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="\${centerBlur}" />
                    </filter>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-purple)"/>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-red)"/>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-blue)"/>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-black)"/>
                <rect 
                    x="\${(1-centerSize)/2*100}%" y="\${(1-centerSize)/2*100}%" 
                    width="\${centerSize*100}%"
                    height="\${centerSize*100}%"
                    fill="rgba(127, 127, 127, 1)"
                    rx="\${actualRadius}"
                    filter="url(#blur-filter)"
                />

            </svg>\`;
        return 'data:image/svg+xml;base64,' + btoa(displacementMap);
    }
    
    return (
        <>
            <div className="liquid-glass-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="liquid-glass-displacement-map"
                >
                    <defs>
                        <filter id="liquid-glass-map" colorInterpolationFilters="sRGB"  >
                            <feImage href={createDisplacementMap()} result="map" />
                            
                            <feDisplacementMap in="SourceGraphic" in2="map" scale={intensity*100} xChannelSelector="R" yChannelSelector="B" result="displaced-red"/>
                            <feDisplacementMap in="SourceGraphic" in2="map" scale={intensity*90} xChannelSelector="R" yChannelSelector="B" result="displaced-green"/>
                            <feDisplacementMap in="SourceGraphic" in2="map" scale={intensity*80} xChannelSelector="R" yChannelSelector="B" result="displaced-blue"/>
                            
                            <feColorMatrix 
                                in="displaced-red"
                                mode="matrix"
                                values="1 0 0 0 0 
                                        0 0 0 0 0 
                                        0 0 0 0 0 
                                        0 0 0 1 0" 
                                result="red-channel"
                            />
                            <feColorMatrix 
                                in="displaced-green"
                                mode="matrix"
                                values="0 0 0 0 0 
                                        0 1 0 0 0 
                                        0 0 0 0 0 
                                        0 0 0 1 0" 
                                result="green-channel"
                            />
                            <feColorMatrix 
                                in="displaced-blue"
                                mode="matrix"
                                values="0 0 0 0 0 
                                        0 0 0 0 0 
                                        0 0 1 0 0 
                                        0 0 0 1 0" 
                                result="blue-channel"
                            />
                            
                            <feBlend in="red-channel" in2="green-channel" mode="screen" result="rg-combined"/>
                            <feBlend in="rg-combined" in2="blue-channel" mode="screen" result="final-result"/>
                            <feGaussianBlur in="final-result" stdDeviation={backgroundBlur}/>
                        </filter>
                    </defs>
                </svg>
                <div 
                    className="liquid-glass"
                    style={{
                        width: width,
                        height: height,
                        borderRadius: borderRadius,
                        backdropFilter: 'url(#liquid-glass-map)',
                        backgroundColor: \`rgba(0, 0, 0, \${backgroundOpacity})\`,
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default LiquidGlass;
    `
    
    const cssSnippet = `
.liquid-glass-container{
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
}

.liquid-glass {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0; /* to avoid width and height being affected by other settings */
    box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.1),
                inset 0px -2px 5px 0px rgba(0, 0, 0, 0.3),
                inset 0px 2px 5px 0px rgba(255, 255, 255, 0.1);
}  

.liquid-glass-displacement-map{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
}
    `


    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="jsx" delay={1000} />
            <Snippet title="Code" snippet={CompleteCodeSnippetTS} language="jsx" delay={1500} toggleSnippet={CompleteCodeSnippetJS}/>
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={1800} />
        </div>
    )
}

export default memo(Snippets);