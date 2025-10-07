const Leaf = ({
    size = '36px',
    baseColor = '#a9cca0', 
    shadowColor = '#7c997b8f', 
    stalkColor = '#6c8b6c'
}: {
    size?: string,
    baseColor?: string,
    shadowColor?: string,
    stalkColor?: string
}) => {
    return (
        <div
            style={{
                position: 'relative',
                height: size,
                aspectRatio: 1,
            }}
        >
            
            {/* base */}
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
                        d="M 90 20 c -60 -10 -70 30 -80 60 c 50 10 90 -10 80 -60"
                        fill={baseColor}
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
                        d="M 90 20 C 80 40 40 70 10 80 C 60 90 100 70 90 20"
                        fill={shadowColor}
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* stalk */}
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
                        d="M 31 71 C 63 53 93 16 92 8 L 96 10 C 89 31 53 60 31 71"
                        fill={stalkColor}
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
        </div>
    )
}
export default Leaf;