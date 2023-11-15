import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Navlinks from '@/components/Navlinks';

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Provider = ({ children }: ContainerProps) => {
  return (
    <div className='drawer'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col'>
        <Navbar />

        <main>{children}</main>
        <Footer />
      </div>

      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200'>
          <Navlinks />
        </ul>
      </div>
    </div>
  );
};

export default Provider;
