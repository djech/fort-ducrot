import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Hero />

      <iframe
        src='https://www.360pano.de/fort-ducrot/'
        className='w-full min-h-screen mx-auto px-8 md:px-16'
      />
    </div>
  );
}
