import Image from 'next/image';
import React from 'react';

const featuresData = [
  {
    title: 'Préservation du Patrimoine',
    description: 'Réhabiliter, entretenir et conserver le Fort et ses annexes.',
  },
  {
    title: 'Culture Associative',
    description: 'Constituer un centre d’intérêt culturel et associatif ',
  },
  {
    title: 'Mémoire',
    description:
      'Constituer une documentation liée tant à l’ouvrage du fort DUCROT qu’au passé militaire et historique de Mundolsheim.',
  },
  {
    title: 'Educatif',
    description:
      'Mettre à la disposition du monde scolaire et éducatif des moyens pour l’étude de l’histoire.',
  },
  {
    title: 'Découverte Historique',
    description:
      'Organiser des conférences historiques et des visites guidées.',
  },
];

const Features = () => {
  return (
    <>
      <div className='grid place-items-center w-full bg-base-200'>
        <div className='max-w-5xl py-24 content-center justify-center'>
          <h1 className='text-4xl  text-center font-bold'>Nos objectifs</h1>
          <div className='grid mt-12 md:grid-cols-3 grid-cols-1 gap-8'>
            {featuresData.map((i, k) => {
              return (
                <div
                  key={k}
                  className='card w-full bg-base-100 shadow-xl hover:shadow-2xl'
                >
                  <div className='card-body mt-4 items-center text-center'>
                    <h2 className='card-title'>{i.title}</h2>
                    <p>{i.description}</p>
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

export default Features;
