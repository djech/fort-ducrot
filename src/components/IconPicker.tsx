import React from 'react';
import Tronconneuse from './Icons/Chainsaw';
import Brouette from './Icons/Wheelbarrow';
import Pelles from './Icons/Shovel';
import Drapeau from './Icons/Flagpole';
import Tondeuse from './Icons/Mower';
import MaterielElectrique from './Icons/Plug';
import MaterielSanitaire from './Icons/Plumber';
import Image from 'next/image';

type Item = {
  id: number;
  titre: string;
};

const IconPicker: React.FC<{ item: Item }> = ({ item }) => {
  switch (item.id) {
    case 1:
      return <Tronconneuse />;
    case 2:
      return (
        <Image
          alt=''
          src='/brushcutter.png'
          height='96'
          width='96'
          className='hover:rotate-[-60deg] transition-all duration-500'
        />
      );
    case 3:
      return <Brouette />;
    case 4:
      return <Pelles />;
    case 5:
      return <Drapeau />;
    case 6:
      return <Tondeuse />;
    case 7:
      return <MaterielElectrique />;
    case 8:
      return <MaterielSanitaire />;
    default:
      return null;
  }
};

export default IconPicker;
