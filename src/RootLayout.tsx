import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import MediaTypeProvider from './context/MediaTypeProvider';
import NavBar from './components/nav/NavBar';
import NoiseMask from './components/mask/NoiseMask';
import ToTopButton from './components/shared/components/buttons/toTopButton/ToTopButton';

const AnimatedOutlet = () => {
  const location = useLocation();
  const outlet = useOutlet();

  const getAnimationKey = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.length > 0 ? `/${segments[0]}` : '/';
  };

  return (
    <AnimatePresence mode='wait'>
      {outlet && React.cloneElement(outlet, { key: getAnimationKey(location.pathname) })}
    </AnimatePresence>
  );
};

const RootLayout = () => {
  return (
    <HelmetProvider>
      <MediaTypeProvider>
        <NavBar />
        <main className='app-container'>
          <NoiseMask />
          <AnimatedOutlet />
          <ToTopButton
            targetType='page'
            initialColor='rgb(172, 175, 177)'
            hoverColor='var(--basic-purple)'
          />
        </main>
      </MediaTypeProvider>
    </HelmetProvider>
  );
};

export default RootLayout;
