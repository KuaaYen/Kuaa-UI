import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import KuaaIcon from './KuaaIcon'
import HomeIcon from './HomeIcon';
import DocsIcon from './DocsIcon';
import ImageIcon from './ImageIcon';
import useMediaTypeContext from '../../context/useMediaTypeContext';
import useScrollY from '../shared/hooks/UseScrollY';
// import LiquidGlass from '../shared/components/filter/LiquidGlass';
// import { startTransition } from 'react';

const NavBar = () => {
    const mediaType = useMediaTypeContext();
    const isMobile = mediaType === 'mobile';
    const navigate = useNavigate();
    const location = useLocation();
    const isScrolled = useScrollY(100);

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
    <header 
        className="navbar-container"
        style={{
            height: isMobile ? '6rem' : '8rem',
            backdropFilter: isScrolled ? 'blur(5px)' : 'blur(0px)',
        }}
    >
        <div 
            className="navbar-content"
            style={{
                width: firstLayerPath === 'documents' ? '1400px' : '1250px',
            }}
        >
            <motion.a 
                href="/" 
                onClick={(e) => handleLinkClick(e, '/')}
                className={isMobile ? 'navbar-home-mobile' : 'navbar-home'} 
                title="back to home"
                initial={{scale: 0.7, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10}}
            > 
                <KuaaIcon />
                <div>KuaaUI</div>
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
            </motion.nav>
        </div>
    </header>
  );
};

export default NavBar;