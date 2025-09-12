import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import MediaTypeProvider from './context/MediaTypeProvider';
import NavBar from './components/nav/NavBar';
import NoiseMask from './components/mask/NoiseMask';
import LandingPage from './components/pages/landingPage/LandingPage';
// import Footer from './components/footer/Footer';
import ArtsPage from './components/pages/artsPage/ArtsPage';
import DocumentsPage from './components/pages/documentsPage/DocumentsPage';
import './app.css';
import SplitText from './components/pages/documentsPage/informations/splitText/SplitText';
import MaskReveal from './components/pages/documentsPage/informations/maskReveal/MaskReveal';
import RollingNumbers from './components/pages/documentsPage/informations/rollingNumbers/RollingNumbers';
import GlitchEffect from './components/pages/documentsPage/informations/glitchEffect/GlitchEffect';
import Carousel from './components/pages/documentsPage/informations/carousel/Carousel';
import DecodeText from './components/pages/documentsPage/informations/decodeText/DecodeText';
import TypeText from './components/pages/documentsPage/informations/typeText/TypeText';
import Blob from './components/pages/documentsPage/informations/blob/Blob';
import ToTopButton from './components/shared/components/buttons/toTopButton/ToTopButton';

function App() {

  const AnimatedOutlet = () => {
    const location = useLocation();
    const outlet = useOutlet();
    
    // 只取第一層路徑作為 key
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
      <>
        <NavBar />
        <div className='app-container'>
          <NoiseMask />
          <AnimatedOutlet />
          <ToTopButton targetType='page' initialColor='rgb(172, 175, 177)' hoverColor='var(--basic-purple)' />
          {/* <Footer /> */}
      </div>
    </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          path: '/',
          element: <LandingPage />,
        },
        {
          path: 'arts',
          element: <ArtsPage />,
        },
        {
          path: 'documents',
          element: <DocumentsPage />,
          children: [
            {
              index: true,
              element: <RollingNumbers />, // 預設顯示的組件
            },
            {
              path: 'splittext',
              element: <SplitText />,
            },
            {
              path: 'maskreveal',
              element: <MaskReveal />,
            },
            { 
              path: 'rollingnumbers',
              element: <RollingNumbers />,
            },
            {
              path: 'glitcheffect',
              element: <GlitchEffect />,
            },
            {
              path: 'carousel',
              element: <Carousel />,
            },
            {
              path: 'decodetext',
              element: <DecodeText />,
            },
            {
              path: 'typeText',
              element: <TypeText />,
            },
            {
              path: 'blob',
              element: <Blob />,
            },
          ]
        },
      ],
    },
  ]);



  return (
    <MediaTypeProvider>
      <RouterProvider router={router} />
    </MediaTypeProvider>
  )
}

export default App
