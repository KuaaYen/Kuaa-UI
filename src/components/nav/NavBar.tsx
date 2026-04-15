import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import KuaaIcon from './KuaaIcon'
import HomeIcon from './icons/HomeIcon';
import DocsIcon from './icons/DocsIcon';
import GithubHollow from './icons/GithubHollow';
// import ImageIcon from './icons/ImageIcon';
import StackIcon from './icons/StackIcon';
import MenuIcon from './icons/MenuIcon';
import ListModal from './modal/ListModal';
import useMediaTypeContext from '../../context/useMediaTypeContext';
import useScrollY from '../shared/hooks/UseScrollY';
// import LiquidGlass from '../shared/components/filter/LiquidGlass';
// import { startTransition } from 'react';

const NavBar = () => {
    const mediaType = useMediaTypeContext();
    const isMobile = mediaType === 'mobile';
    const navigate = useNavigate();
    const location = useLocation();
    const isScrolled = useScrollY(300);
    const [animateState, setAnimateState] = useState<'default' | 'hover' | 'active'>('default');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);


    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        event.preventDefault();
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleMenuClick = () => {
        setIsMenuOpen(true);
    }

    const getFirstLayerPath = (path: string) => {
        const pathArray = path.split('/');
        return pathArray[1];
    }

    const firstLayerPath = getFirstLayerPath(location.pathname);

    console.log(location.pathname);
    console.log(firstLayerPath);

    const createNavbarContent = () => {
        switch (mediaType) {
            case 'mobile':
                return (
                    <div className="navbar-content-mobile">
                        <motion.a 
                            href="/" 
                            onClick={(e) => handleLinkClick(e, '/')}
                            onMouseEnter={() => setAnimateState('hover')}
                            onMouseLeave={() => setAnimateState('default')}
                            onMouseDown={() => setAnimateState('active')}
                            onMouseUp={() => setAnimateState('hover')}
                            className='navbar-home-mobile'
                            title="back to home"
                        > 
                            <StackIcon animateState={animateState}/>
                            <div className="navbar-home-text-mobile">
                                KuaaUI
                            </div>
                        </motion.a>
                        <motion.nav 
                            className='navbar-links-mobile'
                            initial={{width: '7rem'}}
                            animate={{
                                width: firstLayerPath === 'documents' ? '9rem' : '7rem',
                            }}
                            transition={{ 
                                duration: 0.4,
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                            }}
                        
                        >
                            <a href="/" className="navbar-link" onClick={(e) => handleLinkClick(e, '/')}>
                                <HomeIcon isMobile={isMobile} isCurrentPath={location.pathname === '/'}/>
                            </a>
                            <a href="/documents" className="navbar-link" onClick={(e) => handleLinkClick(e, '/documents')}>
                                <DocsIcon isMobile={isMobile} isCurrentPath={firstLayerPath === 'documents'}/>
                            </a>
                            <a href="https://github.com/KuaaYen/Kuaa-UI" className="navbar-link" target="_blank" rel="noopener noreferrer">
                                <GithubHollow/>
                            </a>
                            <AnimatePresence>
                                { firstLayerPath === 'documents' && (
                                    <motion.button 
                                        className="navbar-link" 
                                        onClick={handleMenuClick}
                                        initial={{scale: 0, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        exit={{scale: 0, opacity: 0}}
                                        transition={{
                                            duration: 0.3,
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 20,
                                        }}
                                    >
                                        <MenuIcon isMobile={isMobile}/>
                                    </motion.button>
                                )}
                            </AnimatePresence>
                            <ListModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} mediaType={mediaType}/>
                        </motion.nav>
                    </div>
                )
            case 'pc':
            case 'tablet':      
            default:
                return (
                    <div 
                        className="navbar-content"
                        style={{
                            width: firstLayerPath === 'documents' ? '1450px' : '1250px',
                            padding: isMobile ? '1rem 0rem' : '1.5rem 0rem',
                        }}
                    >
                        <motion.a 
                            href="/" 
                            onClick={(e) => handleLinkClick(e, '/')}
                            onMouseEnter={() => setAnimateState('hover')}
                            onMouseLeave={() => setAnimateState('default')}
                            onMouseDown={() => setAnimateState('active')}
                            onMouseUp={() => setAnimateState('hover')}
                            className={isMobile ? 'navbar-home-mobile' : 'navbar-home'} 
                            title="back to home"
                            initial={{scale: 0.7, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10}}
                        > 
                            <StackIcon animateState={animateState}/>
                            {/* <KuaaIcon /> */}
                            <div 
                                className="navbar-home-text"
                                style={{
                                    width: isMobile ? '3rem' : '5rem',
                                }}
                            >
                                KuaaUI
                            </div>
                        </motion.a>
            
                        <motion.nav 
                            className='navbar-links'
                            // style={{gap: '2.8rem'}}
                            initial={{scale: 0.7, opacity: 0}}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                width: firstLayerPath === 'documents' && mediaType !== 'pc' ? '24.5rem' : '21rem',
                            }}
                            transition={{ 
                                delay: 0.4, 
                                type: 'spring', 
                                stiffness: 100, 
                                damping: 10,
                                width: {
                                    duration: 0.4,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 20,
                                },
                            }}
                        >
                            <motion.a 
                                href="/" className="navbar-link"
                                onClick={(e) => handleLinkClick(e, '/')}
                                initial={{color: 'rgba(255, 255, 255, 0.75)'}}
                                animate={{color: location.pathname === '/' ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.75)'}}
                                whileHover={{color: 'var(--primary-color)'}}
                                transition={{
                                    duration: 0.2,
                                    ease: 'easeInOut',
                                }}
                            >
                                Home
                                <motion.div 
                                    className='navbar-link-indicator'
                                    initial={{width: 0, opacity: 0}}
                                    animate={{width: location.pathname === '/' ? '5px' : '0px', opacity: 1}}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                ></motion.div>
                                {/* <HomeIcon isMobile={isMobile}/> */}
                            </motion.a>
                            <motion.a 
                                href="/documents" className="navbar-link" 
                                onClick={(e) => handleLinkClick(e, '/documents')}
                                initial={{color: 'rgba(255, 255, 255, 0.75)'}}
                                animate={{color: firstLayerPath === 'documents' ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.75)'}}
                                whileHover={{color: 'var(--primary-color)'}}
                                transition={{
                                    duration: 0.2,
                                    ease: 'easeInOut',
                                }}
                            >
                                <motion.div 
                                    className='navbar-link-indicator'
                                    initial={{width: 0, opacity: 0}}
                                    animate={{width: firstLayerPath === 'documents' ? '5px' : '0px', opacity: 1}}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                ></motion.div>
                                Documents
                                {/* <DocsIcon isMobile={isMobile}/> */}
                            </motion.a>
                            <motion.a 
                                href="https://github.com/KuaaYen/Kuaa-UI"
                                className="navbar-link" target="_blank"
                                rel="noopener noreferrer"
                                initial={{color: 'rgba(255, 255, 255, 0.75)'}}
                                animate={{color: 'rgba(255, 255, 255, 0.75)'}}
                                whileHover={{color: 'var(--primary-color)'}}
                                transition={{
                                    duration: 0.2,
                                    ease: 'easeInOut',
                                }}
                            >
                                Github
                            </motion.a>
                            <AnimatePresence>
                                { (mediaType !== 'pc') && (firstLayerPath === 'documents') && (
                                    <motion.button 
                                        className="navbar-link" 
                                        onClick={handleMenuClick}
                                        initial={{scale: 0, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        exit={{scale: 0, opacity: 0}}
                                        transition={{
                                            duration: 0.3,
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 20,
                                        }}
                                    >
                                        <MenuIcon isMobile={isMobile}/>
                                    </motion.button>
                                )}
                            </AnimatePresence>
                            <ListModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} mediaType={mediaType}/>
                        </motion.nav>
                    </div>
                )
        }
    }


    return (
        <motion.header 
            className="navbar-container"
            initial={{
                height: isMobile ? '6rem' : '8rem',
                backdropFilter: 'blur(0px)',
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, ${isScrolled ? '0.2' : '0'}) 0%, rgba(255, 255, 255, 0) 60%)`,
            }}
            animate={{
                height: isMobile ? '6rem' : '8rem',
                backdropFilter: isScrolled ? 'blur(5px)' : 'blur(0px)',
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, ${isScrolled ? '0.2' : '0'}) 0%, rgba(255, 255, 255, 0) 60%)`,
            }}
            style={{alignItems: isMobile ? 'flex-start' : 'center'}}
        >
            {createNavbarContent()}
            {/* <div 
                className="navbar-content"
                style={{
                    width: firstLayerPath === 'documents' ? '1450px' : '1250px',
                    padding: isMobile ? '1rem 0rem' : '1.5rem 0rem',
                }}
            >
                <motion.a 
                    href="/" 
                    onClick={(e) => handleLinkClick(e, '/')}
                    onMouseEnter={() => setAnimateState('hover')}
                    onMouseLeave={() => setAnimateState('default')}
                    onMouseDown={() => setAnimateState('active')}
                    onMouseUp={() => setAnimateState('hover')}
                    className={isMobile ? 'navbar-home-mobile' : 'navbar-home'} 
                    title="back to home"
                    initial={{scale: 0.7, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10}}
                > 
                    <StackIcon animateState={animateState}/>
                    <div 
                        className="navbar-home-text"
                        style={{
                            width: isMobile ? '3rem' : '5rem',
                        }}
                    >
                        KuaaUI
                    </div>
                </motion.a>
    
                <motion.nav 
                    className={isMobile ? 'navbar-links-mobile' : 'navbar-links'}
                    initial={{scale: 0.7, opacity: 0}}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        width: firstLayerPath === 'documents' && mediaType !== 'pc' ? '22.5rem' : '18.5rem',
                    }}
                    transition={{ 
                        delay: 0.4, 
                        type: 'spring', 
                        stiffness: 100, 
                        damping: 10,
                        width: {
                            duration: 0.4,
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                        },
                    }}
                >
                    <a href="/" className="navbar-link" onClick={(e) => handleLinkClick(e, '/')}>
                        Home
                    </a>
                    <a href="/documents" className="navbar-link" onClick={(e) => handleLinkClick(e, '/documents')}>
                        Documents
                    </a>
                    <a href="https://github.com/KuaaYen/Kuaa-UI" className="navbar-link" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <AnimatePresence>
                        { (mediaType !== 'pc') && (firstLayerPath === 'documents') && (
                            <motion.button 
                                className="navbar-link" 
                                onClick={handleMenuClick}
                                initial={{scale: 0, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0, opacity: 0}}
                                transition={{
                                    duration: 0.3,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 20,
                                }}
                            >
                                <MenuIcon isMobile={isMobile}/>
                            </motion.button>
                        )}
                    </AnimatePresence>
                    <ListModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} mediaType={mediaType}/>
                </motion.nav>
            </div> */}
        </motion.header>
    );
};

export default NavBar;