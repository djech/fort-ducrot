import Featured from '@/components/Featured';
import Image from 'next/image';
import React from 'react';

const Association = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='min-h-screen'>
        <div className='bg-fuchsia-50 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] gap-8 lg:gap-0 lg:flex-row'>
          {/* TEXT CONTAINER */}
          <div className='flex-1 flex items-center justify-center flex-col gap-8 font-bold lg:h-full'>
            <h1 className='text-4xl md:text-5xl xl:text-6xl text-center uppercase p-4 md:p-10 bg-gradient-to-b from-red-500 to-gray-300 bg-clip-text text-transparent'>
              Les Amis du Fort Ducrot
            </h1>
            <p className='p-4'>
              Rendez-vous tous les jeudis et samedis, à 14h00 à l'entrée du
              Fort, ainsi que sur rendez-vous.
            </p>
            <button className='btn btn-primary'>facebook</button>
          </div>
          {/* IMAGE CONTAINER */}
          <div className='flex-1 lg:h-full relative'>
            <Image
              src='/photo-groupe-pa.jpg'
              alt=''
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='min-h-screen'>
        <Featured />
      </div>
    </div>
  );
};

export default Association;
