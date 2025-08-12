import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import NavBar from './components/nav/NavBar';
import NoiseMask from './components/mask/NoiseMask';
import LandingPage from './components/pages/landingPage/LandingPage';
import Footer from './components/footer/Footer';
import ArtsPage from './components/pages/artsPage/ArtsPage';
import DocumentsPage from './components/pages/documentsPage/DocumentsPage';
import './app.css';

function App() {

  const AnimatedOutlet = () => {
    const location = useLocation();
    const outlet = useOutlet();
    
    return (
      <AnimatePresence mode='wait'>
        {outlet && React.cloneElement(outlet, { key: location.pathname })}
      </AnimatePresence>
    );
  };

  const RootLayout = () => {
    return (
      <div className='app-container'>
        <NavBar />
        <NoiseMask />
        <AnimatedOutlet />
        <Footer />
      </div>
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
        },
      ],
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
      {/* <NavBar />
      <NoiseMask />
      <LandingPage />
      <Footer /> */}
    </div>
  )
}

export default App
