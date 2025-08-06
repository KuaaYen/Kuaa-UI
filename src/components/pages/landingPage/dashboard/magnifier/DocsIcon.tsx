import { memo } from "react";

const DocsIcon = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '65%',
                aspectRatio: 1,
                zIndex: 1,
                // backgroundColor: 'red',
            }}
        >
            
            {/* color */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 30 10 c -6 0 -10 4 -10 9 l 0 63 c 0 4 3 8 8 8 l 43 0 c 7 0 9 -5 9 -9 l 0 -56 l -15 -15 Z"
                        fill="#ffffff"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* shadow */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 2,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 65 10 l 0 10 c 0 4 3 5 5 5 l 10 0 Z"
                        fill="#dedede"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* outline */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 3,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 65 10 l -35 0 c -6 0 -10 4 -10 10 l 0 60 c 0 7 3 10 10 10 l 39 0 c 8 0 11 -3 11 -10 l 0 -55 l -15 -15 l 0 9 c 0 4 2 6 6 6 l 9 0"
                        fill="transparent"
                        stroke="#3D405B"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* title */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 4,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 31 22 l 26 0 l 0 10 l -26 0 l 0 -10 M 31 43 l 37 0 M 31 53 l 37 0 M 31 63 L 58 63"
                        fill="rgb(128, 128, 136)"
                        stroke="rgb(128, 128, 136)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <text 
                        x="44" 
                        y="28" 
                        fill="#F2CC8F" 
                        fontSize="8" 
                        fontFamily="francois, Arial, sans-serif"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        Docs
                    </text>
                    <text 
                        x="65" 
                        y="80" 
                        fill="#81B29A" 
                        fontSize="8" 
                        fontFamily="francois, Arial, sans-serif"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        Free!
                    </text>
                </svg>   
            </div>
            
        </div>
    )
}
export default memo(DocsIcon);