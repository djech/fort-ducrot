import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-between'>
      {/* HERO */}
      <div className='min-h-screen'>
        <Hero />
      </div>
      {/* CONTENT */}
      <iframe
        src='https://www.360pano.de/fort-ducrot/'
        className='w-full min-h-screen mx-auto px-8 md:px-16'
      />
    </div>
  );
}
