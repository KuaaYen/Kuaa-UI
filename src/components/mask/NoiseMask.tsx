import { memo, useMemo } from "react";

const NoiseMask = () => {
    // 生成包含噪點的 SVG 的 data URL
    const noiseBgUrl = useMemo(() => {
        const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="1" seed="3" />
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="1.5" intercept="0.05" />
                        <feFuncG type="linear" slope="1.5" intercept="0.05" />
                        <feFuncB type="linear" slope="1.5" intercept="0.05" />
                    </feComponentTransfer>
                </filter>
                <rect width="500" height="500" filter="url(#noise)" opacity="1" />
            </svg>
        `;
        return `data:image/svg+xml;base64,${btoa(svgContent)}`;
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url("${noiseBgUrl}")`,
            backgroundRepeat: 'repeat',
            // mixBlendMode: 'overlay',
            opacity: 0.2,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 200,
        }}>
        </div>
    )
}  

export default memo(NoiseMask);
