import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Menu from './Menu';

const linksLeft = [
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

const Navbar: FunctionComponent<Props> = ({ open, setOpen }) => {
  const handleMenuToggle = () => {
    setOpen(false);
  };
  //   tmp
  const user = false;

  return (
    <div className='h-12 text-red-300 p-4 flex justify-between items-center border-b-2 border-b-blue-300 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        {linksLeft.map((link) => (
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
        <Link
          href='/'
          onClick={handleMenuToggle}
        >
          Fort ducrot
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu
          open={open}
          setOpen={setOpen}
        />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 justify-end flex-1'>
        {user ? <Link href='/member'>Membre</Link> : ''}
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
