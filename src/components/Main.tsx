import React, { useState } from 'react';
import searchIcon from '../img/icon-search.png';
import star from '../img/star.png';

const Main: React.FC = () => {
  const [hoverInst, setHoverInst] = useState(false);
  const [hoverAcce, setHoverAcce] = useState(false);

  return (
    <div>
      <div className="w-screen h-screen">
        <div className="w-full p-10 pb-16 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="main-logo border border-black flex items-center justify-center cursor-pointer">
              <div className="text-center rye text-white text-2xl">ProMusic</div>
            </div>
            <div className="border-b border-black flex items-center">
              <div
                className="cursor-pointer p-8 pt-4 pb-4 text-white text-base first:hover:visible"
                onMouseEnter={() => setHoverInst(true)}
                onMouseLeave={() => setHoverInst(false)}
              >
                INSTRUMENTS
                {hoverInst && (
                  <div
                    className="absolute mt-4 rounded-lg bg-white shadow-main w-1/7 flex flex-col
                text-black text-sm font-light p-2 cursor-default"
                  >
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Acoustic Guitars</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Acoustic-Electric Guitars</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Electric Guitars</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Basses</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Ukuleles</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Banjos</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Mandolin Family</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Violin Family</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Left-Handed Instruments</div>
                  </div>
                )}
              </div>
              <div
                className="cursor-pointer p-8 pt-4 pb-4 text-white text-base first:hover:visible"
                onMouseEnter={() => setHoverAcce(true)}
                onMouseLeave={() => setHoverAcce(false)}
              >
                ACCESSORIES
                {hoverAcce && (
                  <div
                    className="absolute mt-4 rounded-lg bg-white shadow-main w-1/7 flex flex-col
                text-black text-sm font-light p-2 cursor-default"
                  >
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Strings</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Capos</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Stands</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Picks</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Banjo Heads</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Cases & Gigbags</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Humidification</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Cables</div>
                    <div className="hover:bg-pro-guitar p-1 rounded mt-1 mb-1 cursor-pointer">Gift Cards</div>
                  </div>
                )}
              </div>
              <div className="bg-pro-searchBg rounded flex">
                <img className="object-none pr-2 pl-2" alt="" src={searchIcon} />
                <input className="outline-none p-1 bg-transparent text-white placeholder-pro-searchPh" type="text" placeholder="search" />
              </div>
              <div className="cursor-pointer p-8 pt-4 pb-4 text-white text-base">CART</div>
              <div className="cursor-pointer p-8 pt-4 pb-4 text-white text-base">LOGIN</div>
            </div>
          </div>
          <div className="mt-20 mb-16 mr-auto ml-auto w-13/18 p-8 pr-10 pl-10 bg-black rounded shadow-main flex flex-col">
            <img className="object-none mr-auto" alt="" src={star} />
            <div className="font-bold text-white text-2xl text-center">GET 15% OFF ON YOUR FIRST PURCHASE AND AN ACCESSORIE AS A GIFT!</div>
            <img className="object-none ml-auto" alt="" src={star} />
          </div>
          <div className="text-center text-4xl font-bold">New, Used & Vintage Instruments</div>
          <div className="text-center font-light text-3xl w-3/5 pt-8 mr-auto ml-auto">
            Whether you play indie rock, bluegrass, modern folk, classic country, or almost anything else, we can help you find something
            that fits your style and budget.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
