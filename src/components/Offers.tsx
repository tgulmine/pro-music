import * as React from 'react';
import arrowLeft from '../img/arrow-left.png';
import arrowRight from '../img/arrow-right.png';
import offer1 from '../img/offer-1.png';
import offer2 from '../img/offer-2.png';
import offer3 from '../img/offer-3.png';
import iconOffer from '../img/icon-offer.png';

const Offers: React.FC = () => {
  return (
    <div className="bg-pro-offersBg w-screen">
      <div className="w-full pt-10 pb-10 flex flex-col">
        <div className="w-1/5 mr-auto ml-auto border border-white flex items-center justify-center">
          <div className="text-white text-center p-3 text-2xl">WEEK OFFERS</div>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div className="p-8 bg-pro-arrow flex justify-center items-center cursor-pointer">
            <img className="" alt="" src={arrowLeft} />
          </div>
          <div
            className="p-12 pb-6 flex flex-col items-center justify-between cursor-pointer 
            border border-transparent hover:border hover:border-white"
          >
            <div className="relative">
              <img className="" alt="" src={offer1} />
              <div className="z-20 absolute top-0">
                <img className="" alt="" src={iconOffer} />
              </div>
            </div>
            <div className="w-full bg-pro-offersDesc p-3 flex-col mt-8 leading-snug">
              <div className="text-center text-white text-2xl">Bart Reiter 12” Buckbee</div>
              <div className="text-center text-white text-2xl">Model Openback Banjo</div>
              <div className="text-center text-white text-2xl">$ 1.050</div>
            </div>
          </div>
          <div
            className="p-12 pb-6 flex flex-col items-center justify-between cursor-pointer 
              border border-transparent hover:border hover:border-white"
          >
            <div className="relative">
              <img className="" alt="" src={offer2} />
              <div className="z-20 absolute top-0">
                <img className="" alt="" src={iconOffer} />
              </div>
            </div>
            <div className="w-full bg-pro-offersDesc p-3 flex-col mt-8 leading-snug">
              <div className="text-center text-white text-2xl">Gibson ES-125TCD</div>
              <div className="text-center text-white text-2xl">(1960)</div>
              <div className="text-center text-white text-2xl">$ 2.750</div>
            </div>
          </div>
          <div
            className="p-12 pb-6 flex flex-col items-center justify-between cursor-pointer 
          border border-transparent hover:border hover:border-white"
          >
            <div className="relative">
              <img className="" alt="" src={offer3} />
              <div className="z-20 absolute top-0">
                <img className="" alt="" src={iconOffer} />
              </div>
            </div>
            <div className="w-full bg-pro-offersDesc p-3 flex-col mt-8 leading-snug">
              <div className="text-center text-white text-2xl">Albert Nebel Violin</div>
              <div className="text-center text-white text-2xl">(C.2010)</div>
              <div className="text-center text-white text-2xl">$ 1.200</div>
            </div>
          </div>

          <div className="p-8 bg-pro-arrow flex justify-center items-center cursor-pointer">
            <img className="" alt="" src={arrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
