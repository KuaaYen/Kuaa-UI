const MenuIcon = ({isMobile}: {isMobile: boolean}) => {
    return (
        <div className="navbar-link-icon"
            style={{
                width: isMobile ? '1.7rem' : '2rem',
                height: isMobile ? '1.7rem' : '2rem',
            }}
        >
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
                        d="M 15 30 l 65 0 M 15 50 l 50 0 M 15 70 l 35 0"
                        fill="transparent"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
        </div>
    )
}
export default MenuIcon;