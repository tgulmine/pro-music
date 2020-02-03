import * as React from 'react';
import './styles/main.scss';
import Main from './components/Main';
import Offers from './components/Offers';
import Spotify from './components/Spotify';
import Vitu from './components/Vitu';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App w-screen overflow-hidden">
      <div className="flex flex-col bg-pro-guitar">
        <Main />
        <Offers />
        <Spotify />
        <Vitu />
        <Footer />
      </div>
    </div>
  );
};

export default App;
