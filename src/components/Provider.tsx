'use client';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Notification from '@/components/Notification';

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Provider = ({ children }: ContainerProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <Notification />
      <Navbar
        open={open}
        setOpen={setOpen}
      />
      <main onClick={() => setOpen(false)}>{children}</main>
      <Footer />
    </div>
  );
};

export default Provider;
