const ReloadIcon = ({color = ' #22243b'}: {color?: string}) => {
    return (
        <div
            style={{
                height: '100%',
                aspectRatio: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="80%" height="80%">
                <path 
                    d="M 20 50 A 30 30 0 0 0 50 80 A 30 30 0 0 0 80 50 A 30 30 0 0 0 29 28 M 31 17 L 29 28 L 40 30"
                    fill="transparent"
                    stroke={color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>   
        </div>
    )
}

export default ReloadIcon;