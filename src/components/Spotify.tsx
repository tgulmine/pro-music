import * as React from 'react';
import spotifyLogo from '../img/logo-spotify.png';

const Spotify: React.FC = () => {
  return (
    <div className="spotify bg-pro-spotifyBg w-screen">
      <div className="w-full pt-24 pb-32 flex flex-col">
        <div
          className="mr-auto ml-auto p-8 flex items-center justify-center bg-pro-spotifyBanner 
          rounded shadow-spotify text-white hover:text-black cursor-pointer"
        >
          <div className="text-center font-bold text-4xl">MEET OUR PARTNERSHEEP WITH SPOTIFY!</div>
        </div>
        <div className="ml-auto mr-80 mt-48">
          <img className="object-none" alt="" src={spotifyLogo} />
        </div>

        <div className="ml-auto mr-56 mt-1 main-logo border border-black flex items-center justify-center">
          <div className="text-center rye text-white text-2xl">ProMusic</div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
