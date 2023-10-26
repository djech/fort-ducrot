'use client';
import Link from 'next/link';
import React from 'react';
import Image from '../../node_modules/next/image';

const links = [
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

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  //   tmp
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src='/open.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src='/close.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100hv-6rem) flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href='/member'
            onClick={() => setOpen(false)}
          >
            Membre
          </Link>
          {!user ? (
            <Link
              href='/login'
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Link
              href='/logout'
              onClick={() => setOpen(false)}
            >
              Logout
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
