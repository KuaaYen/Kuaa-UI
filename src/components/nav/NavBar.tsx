import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
// import KuaaIcon from './KuaaIcon'
import HomeIcon from './icons/HomeIcon';
import DocsIcon from './icons/DocsIcon';
import ImageIcon from './icons/ImageIcon';
import StackIcon from './icons/StackIcon';
import MenuIcon from './icons/MenuIcon';
// import FallingAnimation from './FallingAnimation';
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

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        event.preventDefault();
        
        // if ( path === '/') {
        //     window.scrollTo({ top: 0, behavior: 'smooth' });
        // } 
        navigate(path);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
       
    }

    const getFirstLayerPath = (path: string) => {
        const pathArray = path.split('/');
        return pathArray[1];
    }

    const firstLayerPath = getFirstLayerPath(location.pathname);

    // const containerVariants = {
    //     initial: {backdropFilter: 'blur(0px)'},
    //     scrolled: {backdropFilter: 'blur(5px)'},
    // }


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
        // style={{
        //     height: isMobile ? '6rem' : '8rem',
        //     backdropFilter: isScrolled ? 'blur(5px)' : 'blur(0px)',
        //     backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, ${isScrolled ? '0.2' : '0'}) 0%, rgba(255, 255, 255, 0) 60%)`,
        // }}
    >
        <div 
            className="navbar-content"
            style={{
                width: firstLayerPath === 'documents' ? '1450px' : '1250px',
                padding: isMobile ? '1rem 0rem' : '1.5rem 0rem',
                // backgroundColor: 'red',
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
                className={isMobile ? 'navbar-links-mobile' : 'navbar-links'}
                initial={{scale: 0.7, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10}}
            >
                <a href="/" className="navbar-link" onClick={(e) => handleLinkClick(e, '/')}>
                    <HomeIcon isMobile={isMobile}/>
                </a>
                <a href="/documents" className="navbar-link" onClick={(e) => handleLinkClick(e, '/documents')}>
                    <DocsIcon isMobile={isMobile}/>
                </a>
                <a href="/arts" className="navbar-link" onClick={(e) => handleLinkClick(e, '/arts')}>
                    <ImageIcon isMobile={isMobile}/>
                </a>
                {mediaType !== 'pc' && (
                    <a href="/" className="navbar-link" onClick={(e) => handleLinkClick(e, '/')}>
                        <MenuIcon isMobile={isMobile}/>
                    </a>
                )}
            </motion.nav>
        </div>
        {/* <FallingAnimation /> */}
    </motion.header>
  );
};

export default NavBar;