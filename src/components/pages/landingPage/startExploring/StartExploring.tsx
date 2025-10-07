import { motion, useInView } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import SpaceContainer from "./SpaceContainer";
import useMediaTypeContext from "../../../../context/useMediaTypeContext";
// import SpaceShip from "./spaceShip/SpaceShip";

const StartExploring = ({ handleChangeOiiaoAnimation }: { handleChangeOiiaoAnimation: (type: 'spin' | 'swing') => void }) => {
    const navigate = useNavigate();
    const mediaType = useMediaTypeContext();
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        margin: '0px 0px -250px 0px',
    });

    const handleStartExploringClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('/documents');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const getButtonSize = () => {
        switch(mediaType) {
            case 'pc':
                return {
                    width: '25rem',
                    height: '6.5rem',
                }
            case 'tablet':
                return {
                    width: '25rem',
                    height: '6.5rem',
                }
            case 'mobile':
                return {
                    width: '18rem',
                    height: '5rem',
                }
        }
    }

    const getButtonTextSize = () => {
        switch(mediaType) {
            case 'pc':
                return '3rem';
            case 'tablet':
                return '2.5rem';
            case 'mobile':
                return '2rem';
        }
    }


    return (
        <div className="start-exploring-container">
            <article 
                className="start-exploring-content"
                style={{
                    width: mediaType === 'mobile' ? '80%' : '60%',
                }}
            >
                <motion.section 
                    ref={containerRef}
                    className="start-exploring-content-text-container"
                    style={{
                        width: getButtonSize().width,
                        height: getButtonSize().height,
                    }}
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
                        <motion.a 
                            className="start-exploring-content-text"
                            style={{
                                fontSize: getButtonTextSize(),
                            }}
                            onClick={(e) => handleStartExploringClick(e)}
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
                            Build With Ease
                        </motion.a>
                    </div>
                    <motion.div className="start-exploring-content-text-border"
                        // style={{
                        //     width: getButtonSize().width,
                        //     height: getButtonSize().height,
                        // }}
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
                <SpaceContainer containerInView={isInView} mediaType={mediaType}/>
            </article>
        </div>
    )
}

export default StartExploring;