import { featuredProducts } from '@/data';
import React from 'react';

const Members = () => {
  return (
    <>
      <div className='grid place-items-center w-full bg-base-100'>
        <div className='max-w-5xl py-24 content-center justify-center'>
          <h1 className='text-4xl  text-center font-bold'>
            Nos membres actifs
          </h1>
          <div className='grid mt-12 md:grid-cols-3 grid-cols-1 gap-8'>
            {featuredProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className='card w-full bg-base-100 shadow-xl'
                >
                  <figure className='avatar'>
                    <div className='w-24 rounded-xl'>
                      <img
                        src={item.img}
                        className='hover:rotate-[60deg] transition-all duration-500'
                      />
                    </div>
                  </figure>

                  <div className='card-body items-center text-center'>
                    <p>{item.desc}</p>
                    <p className='text-slate-500'>-{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
