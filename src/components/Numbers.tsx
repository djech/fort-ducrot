import React from 'react';

const Numbers = () => {
  return (
    <div className='grid place-items-center w-full bg-base-100'>
      <div className='max-w-5xl py-24 content-center justify-center'>
        <h1 className='text-4xl  text-center font-bold'>
          Quelques chiffres sur l'association
        </h1>
        <div className='stats shadow mt-12'>
          <div className='stat'>
            <div className='stat-figure text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                ></path>
              </svg>
            </div>
            <div className='stat-title'>Heures de travail</div>
            <div className='stat-value text-primary'>+60000</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                ></path>
              </svg>
            </div>
            <div className='stat-title'>Visiteurs</div>
            <div className='stat-value text-secondary'>+5000</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <div className='avatar online'>
                <div className='w-16 rounded-full'>
                  <img src='/logo_fort.jpg' />
                </div>
              </div>
            </div>
            <div className='stat-value'>14 ans</div>
            <div className='stat-title'>d'existence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
