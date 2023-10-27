import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE  ITEM */}
        {featuredProducts.map((item, index) => (
          <div
            key={item.id}
            className='w-screen h-[60vh] flex flex-col items-center justify-around'
          >
            {/* IMAGE */}
            {item.img && (
              <div className='relative flex-1 w-full'>
                <Image
                  src={item.img}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            )}
            {/* TEXT */}
            <div className='flex-1 flex flex-col gap-4'>
              <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
