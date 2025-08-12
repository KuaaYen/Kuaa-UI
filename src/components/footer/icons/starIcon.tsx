const StarIcon = ({ spinDirection = 'clockwise' }: { spinDirection?: 'clockwise' | 'counter-clockwise' }) => {
    return (
        <span className="footer-info-inline-icon-wrapper">
            <div className="footer-info-inline-icon" style={{
                animation: spinDirection === 'clockwise' ? 'star-spin 5s linear infinite' : 'star-spin-reverse 5s linear infinite',
            }}>
                {/* shape-2 */}
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
                            d="M 50 20 L 60 39 L 81 42 L 68 59 L 71 80 L 50 71 L 29 80 L 33 59 L 19 42 L 40 39 L 50 20"
                            fill="#F2CC8F"
                            stroke="#F2CC8F"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>   
                </div>
            </div>
        </span>  
    )
}
export default StarIcon;