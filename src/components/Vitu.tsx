import * as React from 'react';
import vitu from '../img/vitu.png';

const Vitu: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="w-full p-24 flex justify-between">
        <div className="flex flex-col w-2/5">
          <div className="pr-16 pl-16 pb-6 border-b border-white">
            <div className="text-center text-white text-4xl">Vitor Bichara</div>
          </div>
          <div className="italic text-white text-2xl pt-6 leading-snug">
            ProMusic is an Brazilian musical institution streeped in tradition with an ear to the future. I’ve always felt fortunate that a
            musical environment like ProMusic exists in the world, and I am proud to be associated with them in every way. <br></br>{' '}
            <br></br> Thanks Gugu!
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img className="object-none" alt="" src={vitu} />
          <div className="text-white text-2xl text-center pt-4">Pianist</div>
        </div>
      </div>
    </div>
  );
};

export default Vitu;
