const ThreadsIcon = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '2.4rem',
                aspectRatio: 1,
            }}
        >
            
            {/* border */}
            {/* <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%) scale(1.13)',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 72.674 40.471 c -5.111 -19.416 -33.096 -21.238 -42.106 -5.854 c -4.256 6.487 -7.379 25.991 4.67 36.235 c 13.049 10.421 28.13 3.108 32.152 -2.032 c 3.583 -3.627 5.792 -16.625 -8.145 -19.632 c -14.387 -2.787 -18.866 3.731 -17.314 7.981 c 2.674 8.229 16.032 6.431 17.913 -1.469 c 5.845 -18.688 -12.453 -22.241 -17.537 -13.659"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="22"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                    />
                </svg>   
            </div> */}

            {/* stroke */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%) scale(1.13)',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        // d="M 72.674 40.471 c -5.111 -19.416 -33.096 -21.238 -42.106 -5.854 c -4.256 6.487 -7.379 25.991 4.67 36.235 c 13.049 10.421 28.13 3.108 32.152 -2.032 c 3.583 -3.627 5.792 -16.625 -8.145 -19.632 c -14.387 -2.787 -18.866 3.731 -17.314 7.981 c 2.674 8.229 16.032 6.431 17.913 -1.469 c 5.845 -18.688 -12.453 -22.241 -17.537 -13.659"
                        d="M 78 38 C 74 14 38 10 26 30 C 20 41 18 72 37 80 C 50 86 74 83 75 65 C 77 44 37 43 39 58 C 41 67 59 69 63 55 C 68 34 48 27 40 39"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                    />
                </svg>   
            </div>
            
        </div>
    )
}

export default ThreadsIcon;