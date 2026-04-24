import RootLayout from './RootLayout';
import LandingPage from './components/pages/landingPage/LandingPage';
import ArtsPage from './components/pages/artsPage/ArtsPage';
import DocumentsPage from './components/pages/documentsPage/DocumentsPage';
import SplitText from './components/pages/documentsPage/informations/splitText/SplitText';
import MaskReveal from './components/pages/documentsPage/informations/maskReveal/MaskReveal';
import RollingNumbers from './components/pages/documentsPage/informations/rollingNumbers/RollingNumbers';
import GlitchEffect from './components/pages/documentsPage/informations/glitchEffect/GlitchEffect';
import Carousel from './components/pages/documentsPage/informations/carousel/Carousel';
import DecodeText from './components/pages/documentsPage/informations/decodeText/DecodeText';
import TypeText from './components/pages/documentsPage/informations/typeText/TypeText';
import Blob from './components/pages/documentsPage/informations/blob/Blob';
import BorderBeam from './components/pages/documentsPage/informations/borderBeam/BorderBeam';
import LiquidGlass from './components/pages/documentsPage/informations/liquidGlass/LiquidGlass';
import Dialog from './components/pages/documentsPage/informations/dialog/Dialog';
import StaticIcons from './components/pages/documentsPage/informations/icons/staticIcons/StaticIcons';
import Kaomoji from './components/pages/documentsPage/informations/icons/kaomoji/Kaomoji';
import SwipeSlider from './components/pages/documentsPage/informations/swipeSlider/SwipeSlider';
import StackedCards from './components/pages/documentsPage/informations/stackedCards/StackedCards';
import './app.css';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
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
            element: <RollingNumbers />,
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
            path: 'swipeslider',
            element: <SwipeSlider />,
          },
          {
            path: 'stackedcards',
            element: <StackedCards />,
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
          {
            path: 'borderbeam',
            element: <BorderBeam />,
          },
          {
            path: 'liquidglass',
            element: <LiquidGlass />,
          },
          {
            path: 'dialog',
            element: <Dialog />,
          },
          {
            path: 'staticIcons',
            element: <StaticIcons />,
          },
          {
            path: 'kaomoji',
            element: <Kaomoji />,
          },
        ],
      },
    ],
  },
];
