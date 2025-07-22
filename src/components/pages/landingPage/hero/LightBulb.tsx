import { memo } from 'react';
import { motion } from 'motion/react';

const LightBulb = () => {

    return (
        <motion.div
            style={{
                position: 'absolute',
                right: '50%',
                top: '50%',
                width: '2em',
                aspectRatio: '1/1',
                // transform: 'translate(50%, -30%) rotate(45deg)',
                // backgroundColor: 'red',
            }}
            initial={{
                transform: 'translate(50%, 100%) rotate(45deg)',
            }}
            animate={{
                transform: 'translate(50%, -20%) rotate(45deg)',
            }}
            transition={{
                type: 'spring',
                stiffness: 90,
                damping: 10,
                mass: 1,
                delay: 1.5,
            }}
        >
            
            {/* lightbulb */}
            <motion.div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    // backgroundColor: '#ffffff00',
                    zIndex: 1,
                }}
                initial={{
                    filter: 'drop-shadow(0 0 10px #F2CC8F00)',
                }}
                animate={{
                    filter: 'drop-shadow(0 0 10px #F2CC8F)',
                    transition: {
                        type: 'spring', 
                        stiffness: 200,
                        damping: 20,
                        mass: 1,
                        delay: 2.2,
                    }
                }}
                
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 42.181 88.488 l -2.876 -17.504 c -23.363 -1.15 -32.45 -19.428 -31.684 -33.734 c 2.63 -23.845 22.747 -33.54 35.975 -34.764 c 29.289 -2.033 40.843 17.917 42.662 32 c 1.765 12.905 -6.005 25.783 -18.71 31.812 l 3.554 16.488 l -28.689 5.87"
                        fill="rgb(255, 255, 255)"
                        stroke="#000000"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            fill: 'rgb(255, 255, 255)'
                        }}
                        animate={{
                            fill: 'rgb(255, 241, 150)',
                            transition: {
                                duration: 0.1,
                                delay: 2.2,
                            }
                        }}
                    />
                </svg>   
            </motion.div>
            
            {/* lighjtbulbBase */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 39.891 78.029 l 29.621 -5.925 l 2.917 15.448 c -2.735 3.295 -8.189 6.323 -12.555 8.505 c -7.893 -0.486 -12.71 -0.954 -16.955 -2.792 l -3.121 -15.185"
                        fill="#ffffff"
                        stroke="#000000"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* filament */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 48.549 75.753 L 43.594 56.104 C 34.273 59.78 22.171 55.337 18.799 47.508 C 14.429 37.968 17.344 28.165 25.804 23.321 C 37.911 17.79 48.855 26.696 51.372 32.478 C 56.451 45.608 39.141 50.283 35.89 38.663 C 34.239 31.396 40.033 17.433 54.511 14.928 C 68.483 13.47 76.423 28.12 74.077 38.797 C 72.73 45.608 64.153 50.416 57.143 52.242 L 59.3 73.635"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            stroke: '#000000',
                        }}
                        animate={{
                            stroke: 'rgb(255, 115, 0)',
                            transition: {
                                duration: 0.2,
                                delay: 2.2,
                            }
                        }}
                    />
                </svg>   
            </div>
        </motion.div>
    )
}

export default memo(LightBulb);