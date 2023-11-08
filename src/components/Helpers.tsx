import Image from 'next/image';
import React, { ComponentElement } from 'react';

type Item = {
  id: number;
  titre: string;
  icon: () => JSX.Element;
};

const helpersData = [
  { id: 1, titre: 'Tronçonneuses', icon: 'chainsaw.svg' },
  {
    id: 2,
    titre: 'Débroussailleuses thermiques',
    icon: 'gardener-scissors.svg',
  },
  { id: 3, titre: 'Brouettes', icon: 'wheelbarrow.svg' },
  { id: 4, titre: 'Pelles, pioches, râteaux', icon: 'farming-shovel.svg' },
  {
    id: 5,
    titre: 'Drapeau Français avec hampe',
    icon: 'flag-flagpole.svg',
  },
  { id: 6, titre: 'Tondeuses', icon: 'lawn-mower.svg' },
  { id: 7, titre: 'Matériel électrique', icon: 'plug.svg' },
  { id: 8, titre: 'Matériel sanitaire', icon: 'plumber.svg' },
];

const Helpers = () => {
  return (
    <>
      <div className='grid place-items-center w-full bg-base-100'>
        <div className='max-w-5xl py-24 content-center justify-center'>
          <h1 className='text-4xl  text-center font-bold'>Nous aider</h1>
          <p className='text-center py-8 font-light'>
            Les travaux étant d'envergure, nous sommes toujours à la recherche
            de bonnes volontés pour nous aider mais nous recherchons également
            du matériel afin de pouvoir avancer dans de bonnes conditions. C'est
            pourquoi, si vous avez des éléments de la liste suivante dont vous
            ne vous servez plus, ou que vous seriez prêt à nous prêter,
            n'hésitez pas à nous contacter pour nous en faire part.
          </p>
          <div className='grid mt-12 md:grid-cols-3 grid-cols-1 gap-8'>
            {helpersData.map((i, k) => {
              return (
                <div
                  key={k}
                  className='card w-full bg-base-200 shadow-xl hover:shadow-2xl'
                >
                  <figure className='px-10 pt-10'>
                    <div className='w-24 rounded-xl'>
                      <img
                        src={i.icon}
                        className='hover:rotate-[60deg] transition-all duration-500'
                        width='96px'
                        height='96px'
                      />
                    </div>
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className='card-title'>{i.titre}</h2>
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

export default Helpers;
