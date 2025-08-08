import NavBar from './components/nav/NavBar';
import NoiseMask from './components/mask/NoiseMask';
import LandingPage from './components/pages/landingPage/LandingPage';
import Footer from './components/footer/Footer';
import './app.css';

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <NoiseMask />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App
