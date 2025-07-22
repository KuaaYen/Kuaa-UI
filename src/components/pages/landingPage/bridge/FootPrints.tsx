import { motion, Variants } from "motion/react";

const FootPrints = ({stepLength=50, color='#3D405B'}: {stepLength: number, color: string}) => {

    const wrapperVariants: Variants = {
        hidden: {
        },
        show: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    }

    const footPrintVariants: Variants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        }
    }


    return (
        <motion.div
            style={{
                position: 'relative',
                width: '7rem',
                aspectRatio: 2/1,
                // backgroundColor: 'blue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}
            variants={wrapperVariants}
            initial="hidden"
            whileInView="show"
            viewport={{margin: '0px 0px -350px 0px'}}
        >
            {/* foot-print right */}
            <motion.div
                style={{
                    position: 'relative',
                    height: '3.5rem',
                    aspectRatio: 1,
                    // backgroundColor: 'red',
                    transform: `translate(-15%, ${stepLength}%) scaleX(-1)`,
                    order: 2,
                }}
                variants={footPrintVariants}
            >
                <div 
                    style={{
                        position:'absolute',
                        top:'50%',
                        left: '50%',
                        height: '100%',
                        width: '100%',
                        transform: 'translate(-50%, -50%) rotate(-3deg)',
                        backgroundColor: '#ffffff00',
                        zIndex: 1,
                    }}
                >
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <path 
                            d="M 62.344 63.804 L 39.447 63.549 C 35.85 52.705 31.486 39.638 32.703 26.573 C 36.332 9.978 50.397 4.742 58.545 5.932 C 65.997 7.592 72.29 16.218 69.307 29.735 C 65.022 44.004 63.028 54.088 62.508 63.749 M 39.768 70.463 L 63.033 70.104 C 65.017 81.694 64.905 91.384 54.031 91.357 C 39.857 91.454 40.263 78.736 39.479 70.544"
                            fill={color}
                            stroke={color}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>   
                </div>
                
            </motion.div>
            {/* foot-print left */}
            <motion.div
                style={{
                    position: 'relative',
                    height: '3.5rem',
                    aspectRatio: 1,
                    // backgroundColor: 'red',
                    transform: `translate(15%, -${stepLength}%)`,
                    order: 1,
                }}
                variants={footPrintVariants}
            >
                <div 
                    style={{
                        position:'absolute',
                        top:'50%',
                        left: '50%',
                        height: '100%',
                        width: '100%',
                        transform: 'translate(-50%, -50%) rotate(-3deg)',
                        backgroundColor: '#ffffff00',
                        zIndex: 1,
                    }}
                >
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <path 
                            d="M 62.344 63.804 L 39.447 63.549 C 35.85 52.705 31.486 39.638 32.703 26.573 C 36.332 9.978 50.397 4.742 58.545 5.932 C 65.997 7.592 72.29 16.218 69.307 29.735 C 65.022 44.004 63.028 54.088 62.508 63.749 M 39.768 70.463 L 63.033 70.104 C 65.017 81.694 64.905 91.384 54.031 91.357 C 39.857 91.454 40.263 78.736 39.479 70.544"
                            fill={color}
                            stroke={color}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>   
                </div>
                
            </motion.div>
        </motion.div>
    )
}
export default FootPrints;