import { motion } from 'motion/react';
import KuaaIcon from './KuaaIcon'

const NavBar = () => {
  return (
    <header className="navbar-container">
        <div className="navbar-content">
            <motion.a 
                href="/" 
                className="navbar-home" 
                title="back to home"
                initial={{scale: 0.7, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10}}
            > 
                <KuaaIcon />
                <div>Kuaa UI</div>
            </motion.a>
 
            <motion.nav 
                className="navbar-links"
                initial={{scale: 0.7, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10}}
            >
                <div className="navbar-link">Home</div>
                <div className="navbar-link">Docs</div>
                <div className="navbar-link">Arts</div>
            </motion.nav>
        </div>
    </header>
  );
};

export default NavBar;