import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] gap-8 lg:gap-0 lg:flex-row'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 font-bold lg:h-full'>
        <h1 className='text-4xl md:text-5xl xl:text-6xl text-center uppercase p-4 md:p-10 bg-gradient-to-b from-red-500 to-gray-300 bg-clip-text text-transparent'>
          FORT PODBIELSKI DUCROT MUNDOLSHEIM
        </h1>
        <button className='bg-red-500 text-white py-4 px-8'>facebook</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='flex-1 lg:h-full relative'>
        <Image
          src='/slide1.png'
          alt=''
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
