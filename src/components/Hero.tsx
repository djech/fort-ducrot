import Image from 'next/image';
import React, { FunctionComponent } from 'react';

type Content = {
  title: string;
  description: string;
  image: string;
  src?: string;
  target?: boolean;
  button?: string;
};

const Hero: FunctionComponent<Content> = ({
  title,
  description,
  image,
  src = '#',
  target = false,
  button = null,
}) => {
  const blank = target ? '_blank' : '';

  return (
    <div className='hero h-[calc(100vh-62px)] py-24 bg-base-100'>
      <div className='hero-content max-w-5xl flex-col lg:flex-row-reverse'>
        <img
          src={image}
          alt=''
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6'>{description}</p>
          {button && (
            <a
              href={src}
              className='btn btn-primary items-center justify-center'
              target={blank}
            >
              {button}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
