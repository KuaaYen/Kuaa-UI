const PointIcon = () => {
    return (
        <div
            style={{
                // position: 'absolute',
                // top: '50%',
                // left: 'calc(100% + 1rem)',
                position: 'relative',
                height: '4rem',
                aspectRatio: 1,
                // transform: 'translate(0%, -50%)',
                // filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
            }}
        >
            {/* <div 
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
            > */}
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    {/* hand-color */}
                    <path 
                        d="M 85 46 L 74 43 L 65 13 L 55 15 L 53 19 L 56 36 L 13 30 L 7 35 L 11 43 L 35 48 L 33 63 L 37 76 L 57 80 L 75 76 L 79 71 L 87 69 Z"
                        fill="#ffffff"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* hand-shadow */}
                    <path 
                        d="M 12 43 L 10 36 C 14 40 35 41 39 44 C 41 46 37 51 34 49 M 35 55 C 35 72 53 74 87 62 C 91 71 77 67 73 76 C 65 81 40 79 36 74 M 63 14 C 63 24 66 51 85 47 Q 71 42 63 14"
                        fill="#00000042"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* hand */}
                    <path 
                        d="M 86 46 C 82 46 75 46 73 41 L 65 13 C 59 12 51 12 54 25 L 56 36 L 15 30 C 5 29 6 43 15 44 L 35 48 C 30 55 35 71 37 75 C 41 82 66 80 72 77 C 75 76 76 75 77 71 L 87 69"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* sleeve-color */}
                    <path 
                        d="M 80 43 L 82 73 L 95 73 L 94 44 Z"
                        // fill="#223741"
                        fill="#3D405B"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* sleeve-shadow */}
                    <path 
                        d="M 80 60 L 96 58 L 96 74 L 81 74 Z"
                        fill="#00000060"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* sleeve */}
                    <path 
                        d="M 80 43 L 82 73 L 95 73 L 94 44 Z"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            {/* </div> */}
            
        </div>
    )
}
export default PointIcon;