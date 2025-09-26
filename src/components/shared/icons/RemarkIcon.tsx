const RemarkIcon = ({iconColor = 'rgb(172, 175, 177)'}: {iconColor?: string}) => {
    return (
        <div
            style={{
                position: 'relative',
                height: '1.3rem',
                width: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red',
            }}
        >
            <div 
                style={{
                    position:'relative',
                    height: '1rem',
                    width: '1rem',
                    transform: 'translateY(-1px)',
                    backgroundColor: '#ffffff00',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 20 30 L 80 71 M 50 14 L 50 86 M 80 30 L 20 70"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="12"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                    />
                </svg>   
            </div>
            
        </div>
    )
}
export default RemarkIcon;