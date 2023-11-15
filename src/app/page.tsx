import Hero from '@/components/Hero';
import Numbers from '@/components/Numbers';

export default function Home() {
  return (
    <>
      <Hero
        title='FORT PODBIELSKI DUCROT MUNDOLSHEIM'
        description="Rendez-vous tous les jeudis et samedis, à 14h00 à l'entrée du Fort, ainsi que sur rendez-vous."
        image='/maquette.png'
        button='Nous contacter'
        src='/contact'
      />
      <iframe
        src='https://www.360pano.de/fort-ducrot/'
        className='w-full h-[calc(100vh-62px)] bg-base-200 mx-auto py-24 px-8 md:px-16'
      />
      <Numbers />
    </>
  );
}
