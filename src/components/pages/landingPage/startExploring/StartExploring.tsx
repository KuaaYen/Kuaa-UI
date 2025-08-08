import { motion, useInView } from "motion/react";

import { useRef } from "react";
import SpaceContainer from "./SpaceContainer";
// import SpaceShip from "./spaceShip/SpaceShip";

const StartExploring = ({ handleChangeOiiaoAnimation }: { handleChangeOiiaoAnimation: (type: 'spin' | 'swing') => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        margin: '0px 0px -350px 0px',
    });


    return (
        <div className="start-exploring-container">
            <article className="start-exploring-content">
                <motion.section 
                    ref={containerRef}
                    className="start-exploring-content-text-container"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        margin: '0px 0px -350px 0px',
                    }}
                    transition={{
                        type: 'spring',
                        bounce: 0,
                    }}                           
                >

                    <div 
                        className="start-exploring-content-text-wrapper"
                        onPointerEnter={() => handleChangeOiiaoAnimation('swing')}
                        onPointerLeave={() => handleChangeOiiaoAnimation('spin')}
                    >   
                        <motion.div 
                            className="start-exploring-content-text"
                            initial={{
                                backgroundImage: 'linear-gradient(0deg, var(--basic-brick) 0%, var(--basic-sunset) 100%)',
                            }}
                            animate={{
                                backgroundImage: [
                                    'linear-gradient(0deg, var(--basic-brick) 0%, var(--basic-sunset) 100%)',
                                    'linear-gradient(360deg, var(--basic-brick) 0%, var(--basic-sunset) 100%)',
                                ],
                            }}
                            transition={{
                                backgroundImage:{
                                    duration: 4,
                                    ease: 'linear',
                                    repeat: Infinity,
                                },                            
                            }}
                        >
                            Start Exploring
                        </motion.div>
                    </div>
                    <motion.div className="start-exploring-content-text-border"
                        initial={{
                            background: 'conic-gradient(from 0turn, var(--basic-sunset) 0turn, var(--basic-brick) 0.25turn, var(--basic-sunset) 0.5turn, var(--basic-brick) 0.75turn, var(--basic-sunset) 1turn)',
                        }}
                        animate={{
                            background: 'conic-gradient(from 1turn, var(--basic-sunset) 0turn, var(--basic-brick) 0.25turn, var(--basic-sunset) 0.5turn, var(--basic-brick) 0.75turn, var(--basic-sunset) 1turn)',
                        }}
                        transition={{
                            duration: 4,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >

                    </motion.div>
                </motion.section>
                <SpaceContainer containerInView={isInView} />
            </article>
        </div>
    )
}

export default StartExploring;