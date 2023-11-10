import React from 'react';

const Association = () => {
  return (
    <>
      <div className='hero h-[calc(100vh-62px)] bg-[url("/andre-brauch-ducrot.jpg")]'>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md md:max-w-2xl'>
            <h1 className='mb-5 text-5xl font-bold'>
              Le Fort Ducrot et son histoire
            </h1>
            <p className='mb-5'>
              Découvrez les origines fascinantes de cette fortification
              emblématique, son rôle stratégique au fil des siècles et son
              impact sur l'histoire militaire. Plongez dans un récit détaillé de
              sa construction, de ses modifications au fil du temps et de son
              importance dans divers événements historiques.
            </p>
            <button className='btn btn-primary'>Tout savoir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Association;
