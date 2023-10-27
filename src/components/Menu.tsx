import Link from 'next/link';
import React, { useState, useEffect, FunctionComponent } from 'react';
import Image from '../../node_modules/next/image';

const links = [
  {
    id: 2,
    name: "L'association",
    url: '/association',
  },
  {
    id: 3,
    name: "L'histoire",
    url: '/fort',
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
  },
];

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Menu: FunctionComponent<Props> = ({ open, setOpen }) => {
  const handleMenuToggle = () => {
    setOpen(!open);
  };

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
          onClick={handleMenuToggle}
        />
      ) : (
        <Image
          src='/close.png'
          alt=''
          width={20}
          height={20}
          onClick={handleMenuToggle}
        />
      )}
      {open && (
        <div className='bg-blue-300 text-white absolute left-0 top-24 w-full h-[calc(100hv-6rem) flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={handleMenuToggle}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <Link
              href='/member'
              onClick={handleMenuToggle}
            >
              Membre
            </Link>
          ) : (
            ''
          )}
          {!user ? (
            <Link
              href='/login'
              onClick={handleMenuToggle}
            >
              Login
            </Link>
          ) : (
            <Link
              href='/logout'
              onClick={handleMenuToggle}
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
