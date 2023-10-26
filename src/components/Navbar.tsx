import React from 'react';
import Link from 'next/link';
import Menu from './Menu';

const linksleft = [
  {
    id: 1,
    name: 'Accueil',
    url: '/',
  },
  {
    id: 2,
    name: 'Galleries',
    url: '/gallery',
  },
  {
    id: 3,
    name: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  const user = false;

  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        {linksleft.map((link) => (
          <Link
            href={link.url}
            key={link.id}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>Fort ducrot</Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 justify-end flex-1'>
        <Link href='/member'>Membre</Link>
        {!user ? (
          <Link href='/login'>Login</Link>
        ) : (
          <Link href='/logout'>Logout</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
