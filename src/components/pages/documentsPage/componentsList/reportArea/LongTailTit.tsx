import { motion } from 'framer-motion';
import { useState } from 'react';
import Dialog from '../../../../shared/components/dialog/Dialog';
// import PropTypes from 'prop-types';
// import { useEffect } from 'react';

// const LongTailedTit = ({ isHover }) => {
const LongTailedTit = () => {
    const [pointerStatus, setPointerStatus] = useState<'initial' | 'hover' | 'tap'>('initial');

    // // 創建一個動畫進度值 (0 到 1)
    // const circleProgress = useMotionValue(0);
    
    // // 創建控制器用於啟動/停止動畫
    // const controls = useAnimationControls();
    
    // // 將進度值轉換為 X 和 Y 坐標 (使用三角函數計算圓上的點)
    // const x = useTransform(circleProgress, (progress) => 
    //     `${Math.sin(progress * Math.PI * 2) * 3}%`
    // );
    // const y = useTransform(circleProgress, (progress) => 
    //     `${-Math.cos(progress * Math.PI * 2) * 3 *-1}%`
    // );


    // const path = useTransform(circleProgress, (progress) => {
    //     // 73.524 87.33
    //     const controlPointX = (73.524 + Math.sin(progress * Math.PI * 2) * 3).toFixed(3);
    //     const controlPointY = (87.33 + Math.cos(progress * Math.PI * 2) * 3).toFixed(3);


    //     return `M 73.582 96.038 L ${controlPointX} ${controlPointY} c 3.614 -0.217 8.859 -1.885 13.401 -5.737 
    //             c 5.384 -4.854 8.029 -10.362 7.417 -19.438 c -0.387 -4.681 -1.483 -13.201 -8.063 -20.381 
    //             c 0.446 -2.258 0.395 -4.423 0.325 -6.244 c -1.494 -10.468 -13.845 -18.284 -27.398 -17.119 
    //             c -7.313 0.691 -23.488 4.977 -26.794 19.652 c -2.718 0.336 -16.139 3.631 -22.983 10.706 
    //             c -0.788 7.766 0.663 26.134 20.59 33.58 c 12.644 4.501 30.332 6.585 42.963 5.074 m -28.26 -0.849 L 43.182 96.96`
    // });

    // useEffect(() => {
    //     controls.start({
    //         circleProgress: 1,
    //         transition: { 
    //             duration: 0.5, 
    //             repeat: Infinity, 
    //             ease: "linear",
    //             from: 0
    //         }
    //     });
    // }, [controls]);


    // const bodyPathVariants = {
    //     normal: {},
    //     hover: {}
    // }

    const getBodyStroke = (status: 'initial' | 'hover' | 'tap') => {
        const yPosition = status === 'initial' ? '87.33' : status === 'hover' ? '84.33' : '89.33';
        return `M 73.582 96.038 L 73.524 ${yPosition} c 3.614 -0.217 8.859 -1.885 13.401 -5.737 
                                c 5.384 -4.854 8.029 -10.362 7.417 -19.438 c -0.387 -4.681 -1.483 -13.201 -8.063 -20.381 
                                c 0.446 -2.258 0.395 -4.423 0.325 -6.244 c -1.494 -10.468 -13.845 -18.284 -27.398 -17.119 
                                c -7.313 0.691 -23.488 4.977 -26.794 19.652 c -2.718 0.336 -16.139 3.631 -22.983 10.706 
                                c -0.788 7.766 0.663 26.134 20.59 33.58 c 12.644 4.501 30.332 6.585 42.963 5.074 m -28.26 -0.849 L 43.182 96.96`
    }

    // const bodyStrokeInitial = `M 73.582 96.038 L 73.524 87.33 c 3.614 -0.217 8.859 -1.885 13.401 -5.737 
    //                             c 5.384 -4.854 8.029 -10.362 7.417 -19.438 c -0.387 -4.681 -1.483 -13.201 -8.063 -20.381 
    //                             c 0.446 -2.258 0.395 -4.423 0.325 -6.244 c -1.494 -10.468 -13.845 -18.284 -27.398 -17.119 
    //                             c -7.313 0.691 -23.488 4.977 -26.794 19.652 c -2.718 0.336 -16.139 3.631 -22.983 10.706 
    //                             c -0.788 7.766 0.663 26.134 20.59 33.58 c 12.644 4.501 30.332 6.585 42.963 5.074 m -28.26 -0.849 L 43.182 96.96`

    // const bodyStrokeHover = `M 73.582 96.038 L 73.524 84.33 c 3.614 -0.217 8.859 -1.885 13.401 -5.737 
    //                             c 5.384 -4.854 8.029 -10.362 7.417 -19.438 c -0.387 -4.681 -1.483 -13.201 -8.063 -20.381 
    //                             c 0.446 -2.258 0.395 -4.423 0.325 -6.244 c -1.494 -10.468 -13.845 -18.284 -27.398 -17.119 
    //                             c -7.313 0.691 -23.488 4.977 -26.794 19.652 c -2.718 0.336 -16.139 3.631 -22.983 10.706 
    //                             c -0.788 7.766 0.663 26.134 20.59 33.58 c 12.644 4.501 30.332 6.585 42.963 5.074 m -28.26 -0.849 L 43.182 96.96`

    

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '0',
                left: '0%',
                height: '6dvh',
                aspectRatio: 1,
                cursor: 'pointer',
                // backgroundColor: 'blue',
            }}
            onMouseEnter={() => setPointerStatus('hover')}
            onMouseLeave={() => setPointerStatus('initial')}
            onMouseDown={() => setPointerStatus('tap')}
            onMouseUp={() => setPointerStatus('hover')}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '13%',
                    right: 0,
                    transform: 'rotate(-5deg)',
                    height: '100%',
                    aspectRatio: 1,
                    zIndex: 3,
                    // backgroundColor: 'red',
                }}
            >
                {/* body-parts-container */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        // x, 
                        // y,
                    }}
                    initial={{
                        y: '0%',
                    }}
                    animate={{
                        y: pointerStatus === 'hover' ? '-3%' : '0%',
                    }}
                    transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                    }}
                    // animate={controls}
                    // onUpdate={(latest) => {
                    //     if (latest.circleProgress !== undefined) {
                    //         circleProgress.set(latest.circleProgress);
                    //     }
                    // }}
                >
                    {/* body-color */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 1,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 32.673 37.483 c 3.625 -11.957 14.367 -18.471 29.559 -19.555 c 15.419 -0.057 27.661 13.536 24.213 23.378 c 17.97 26.696 1.072 42.661 -3.795 43.825 c -8.526 4.881 -38.147 4.639 -57.188 -4.353 c -14.112 -6.482 -17.399 -24.153 -16.53 -32.476 c 5.24 -4.325 14.985 -9.62 23.539 -11.186"
                                fill="#ffffff"
                                stroke="transparent"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                    
                    {/* body-shadow */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 2,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 9.109 49.635 c -1.874 11.169 5.985 26.524 16.141 30.756 c 8.296 4.309 44.361 13.611 59.157 2.941 c 5.087 -1.245 10.045 -9.708 9.478 -22.626 c -3.019 13.35 -13.254 17.089 -26.121 17.414 c -29.19 -0.317 -59.019 -18.659 -58.573 -28.299 m 75.864 -9.654 c 0.033 1.795 -1.982 3.863 -3.482 4.226 c 2.56 0.482 4.827 1.553 8.379 5.573 l -4.552 -7.786"
                                fill="#adadad9c"
                                stroke="transparent"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                    
                    {/* wings-grey */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 3,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 32.669 38.446 c 8.392 -0.461 13.66 11.429 11.764 17.754 c -1.812 6.765 -4.685 11.698 -17.964 11.033 c -5.261 -0.694 -14.165 -0.86 -16.483 -7.274 c -1.295 -1.964 -1.839 -8.534 -0.476 -11.45 c 5.031 -5.718 17.758 -10.571 22.957 -10.208"
                                fill="#e9e9e9"
                                stroke="transparent"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                    
                    {/* wings-brown */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 4,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 28.87 38.352 c 9.194 -2.539 15.582 5.268 15.965 13.161 c 0.86 7.423 -2.751 14.87 -10.738 15.314 c -7.853 -1.211 -11.414 -18.675 -5.412 -28.487"
                                fill="#e5c3b0"
                                stroke="transparent"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                    
                    {/* wings-black */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 5,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 18.495 43.532 c -4.003 3.715 -8.226 14.469 4.619 23.104 c -11.452 -0.063 -13.842 -6.795 -14.433 -17.571 c 1.377 -1.557 3.015 -3.597 8.894 -4.776"
                                fill="#4c4037"
                                stroke="transparent"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                    
                    {/* wings-shadow */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 6,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 9.859 49.033 c -1.602 2.586 -1.097 9.604 0.837 12.022 c 4.417 7.126 17.543 6.131 22.908 5.851 c 5.728 -0.242 9.754 -3.089 11.059 -10.052 c -5.352 7.326 -19.466 6.963 -26.248 5.82 c -3.697 -1.36 -7.687 -4.866 -8.508 -13.694"
                                fill="#7f7f7f59"
                                stroke="transparent"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                    
                    {/* eyes */}
                    <motion.div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 8,
                        }}
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: pointerStatus === 'hover' ? 1 : 0,
                        }}
                        transition={{
                            duration: 0,
                        }}
                        
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 53.756 32.854 c -2.28 -0.091 -3.852 4.141 -0.465 4.963 c 2.292 -0.061 2.998 -4.952 0.716 -4.982 M 77.16 34.469 c 1.3 -0.06 2.443 4.394 0.283 4.269 c -1.81 0.012 -1.987 -4.061 -0.298 -4.243"
                                fill="#000000"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </motion.div>

                    {/* eyes-chill */}
                    <motion.div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 8,
                        }}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: pointerStatus === 'hover' ? 0 : 1,
                        }}
                        transition={{
                            duration: 0,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 50.121 35.705 l 8.059 -0.259 M 75.728 36.691 l 4.672 1.013"
                                fill="#c9c9c9"
                                stroke="#000000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </motion.div>
                    
                    {/* beak */}
                    <div 
                        style={{
                            position:'absolute',
                            top:'50%',
                            left: '50%',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff00',
                            zIndex: 9,
                        }}
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path 
                                d="M 61.541 42.882 C 63.551 41.975 65.776 40.074 67.023 39.931 C 68.055 39.823 69.214 41.767 71.529 43.743 Q 68.459 45.536 66.929 45.889 Q 62.907 43.868 61.484 43.006"
                                fill="#432c10"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>   
                    </div>
                </motion.div>
                
                {/* body-stroke */}
                <motion.div 
                    style={{
                        position:'absolute',
                        top:'50%',
                        left: '50%',
                        height: '100%',
                        width: '100%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffffff00',
                        zIndex: 2,
                    }}
                    // variants={bodyPathVariants}
                >
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <motion.path 
                            // d="M 73.582 96.038 L 73.524 87.33 c 3.614 -0.217 8.859 -1.885 13.401 -5.737 c 5.384 -4.854 8.029 -10.362 7.417 -19.438 c -0.387 -4.681 -1.483 -13.201 -8.063 -20.381 c 0.446 -2.258 0.395 -4.423 0.325 -6.244 c -1.494 -10.468 -13.845 -18.284 -27.398 -17.119 c -7.313 0.691 -23.488 4.977 -26.794 19.652 c -2.718 0.336 -16.139 3.631 -22.983 10.706 c -0.788 7.766 0.663 26.134 20.59 33.58 c 12.644 4.501 30.332 6.585 42.963 5.074 m -28.26 -0.849 L 43.182 96.96"
                            fill="transparent"
                            stroke="#000000"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M 73.582 96.038 L 73.524 87.33 c 3.614 -0.217 8.859 -1.885 13.401 -5.737 
                                c 5.384 -4.854 8.029 -10.362 7.417 -19.438 c -0.387 -4.681 -1.483 -13.201 -8.063 -20.381 
                                c 0.446 -2.258 0.395 -4.423 0.325 -6.244 c -1.494 -10.468 -13.845 -18.284 -27.398 -17.119 
                                c -7.313 0.691 -23.488 4.977 -26.794 19.652 c -2.718 0.336 -16.139 3.631 -22.983 10.706 
                                c -0.788 7.766 0.663 26.134 20.59 33.58 c 12.644 4.501 30.332 6.585 42.963 5.074 m -28.26 -0.849 L 43.182 96.96"
                            initial={{
                                d: getBodyStroke('initial'),
                            }}
                            animate={{
                                d: pointerStatus === 'hover' ? getBodyStroke('hover') : getBodyStroke('initial'),
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut',
                            }}
                        />
                    </svg>   
                </motion.div>
          
                
            </motion.div>
            {/* branch */}
            <div 
                style={{
                    position:'absolute',
                    bottom: 0,
                    left: 0,
                    height: '100%',
                    aspectRatio: 1,
                    zIndex: 4,
                    // backgroundColor: 'red',
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 10 89 L 97 79 M 38 86 L 29 101"
                        stroke="rgb(0, 0, 0)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>  
            <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '100%',
                fontSize: '0.85rem',
                fontFamily: 'sriracha',
                userSelect: 'none',
            }}>
                <Dialog 
                    width={120}
                    height={40}
                    borderRadius={10}
                    strokeWidth={3}
                    arrowSize={12}
                    arrowPosition={0.03}
                    arrowDirection="left"
                    strokeColor="#22243b"
                    textColor="#3D405B"
                >
                    {/* <AnimatePresence mode="popLayout"> */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '200%',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                            initial={{
                                y: '0%'
                            }}
                            animate={{
                                y: pointerStatus === 'hover' || pointerStatus === 'tap' ? '-50%' : '0%'
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut',
                            }}
                        >
                            <div style={{
                                height: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                Find an issue ?
                            </div>
                            <div style={{
                                height: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                Click to report
                            </div>
                        </motion.div>
                    {/* </AnimatePresence> */}
                </Dialog>
            </div>
        </div>
    )
}

// LongTailedTit.propTypes = {
//     isHover: PropTypes.bool.isRequired,
// };

export default LongTailedTit;