import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link
        href='/'
        className='font-bold text-xl'
      >
        Fort ducrot
      </Link>
      <p>©FortDucrot. Tout droit réservé.</p>
    </div>
  );
};

export default Footer;
