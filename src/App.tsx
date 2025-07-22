import NavBar from './components/nav/NavBar';
import NoiseMask from './components/mask/NoiseMask';
import LandingPage from './components/pages/landingPage/LandingPage';

import './app.css';

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <NoiseMask />
      <LandingPage />
    </div>
  )
}

export default App
