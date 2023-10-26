import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='max-w-7xl min-h-screen my-0 mx-auto py-0 px-16 flex flex-col justify-between'>
      <Hero />
    </main>
  );
}
