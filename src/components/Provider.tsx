'use client';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Navlinks from '@/components/NavLinks';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Provider = ({ children }: ContainerProps) => {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <div className='drawer'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col'>
        <div className='overflow-y-auto  flex flex-col '>
          <Navbar />

          <div className='overflow-y-auto'>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>

      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 bg-base-100'>
          <Navlinks />
        </ul>
      </div>
    </div>
  );
};

export default Provider;
