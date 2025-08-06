const MagnifierOutline = () => {
    return (
        <div className="landing-page-magnifier-outline">
            <div
                style={{
                    position: 'absolute',
                    top: '-23%',
                    left: '-22%',
                    height: '180%',
                    aspectRatio: '1/1',
                    filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))',
                }}
            >
                
                {/* frame */}
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
                            d="M 40 10 A 30 30 0 0 0 10 40 A 30 30 0 0 0 40 70 A 30 30 0 0 0 70 40 A 30 30 0 0 0 40 10"
                            fill="transparent"
                            stroke="#22243b"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>   
                </div>
                
                {/* grip */}
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
                            d="M 57 66 L 72 86 L 77.296 86.547 L 78 82 L 61 64"
                            fill="#22243b"
                            stroke="#22243b"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>   
                </div>
                
            </div>
        </div>
    )
}
export default MagnifierOutline;