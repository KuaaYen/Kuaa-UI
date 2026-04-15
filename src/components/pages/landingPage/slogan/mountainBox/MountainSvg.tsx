const MountainSvg = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '100%',
                width: '100%',
                aspectRatio: 1,
                // backgroundColor: '#66d4fc',
                // backgroundSize: 'contain',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
            }}
        >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            {/* mountain main */}
                <path 
                    d="M 0 100 L 18 83 L 20 85 L 42 64 L 51 74 L 55 71 L 70 84 L 75 79 L 100 100"
                    fill="#326b3e"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* snow */}
                <path 
                    d="M 0 100 L 18 83 L 20 85 L 42 64 L 51 74 L 55 71 L 70 84 L 75 79 L 100 100 L 76 84 L 78 94 L 57 77 L 54 77 L 59 83 L 59 83 L 45 76 L 35 90 L 25 88 L 18 95 L 16 89"
                    fill="#ffffff"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* shadow */}
                <path 
                    d="M 75 79 L 78 94 L 70 84 M 55 71 L 59 83 L 51 74 M 42 64 L 20 85 L 18 95 L 23 97 L 26 93 M 18 83 L 0 100 L 13 97 L 18 83"
                    fill="#00325d38"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>   
            
        </div>
    )
}
export default MountainSvg;