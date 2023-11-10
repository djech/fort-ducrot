import Features from '@/components/Features';
import Helpers from '@/components/Helpers';
import Hero from '@/components/Hero';
import Members from '@/components/Members';
import React from 'react';

const Association = () => {
  return (
    <>
      <Hero
        title='Les Amis du Fort Ducrot'
        description='De la sueur et de la fatigue, mais dans la joie et la bonne humeur
    seront au rendez-vous pour les 10 prochaines années. Alors si vous
    souhaitez également aider à cette rénovation, rejoignez-nous !'
        image='/photo-groupe-pa.jpg'
        button='Nous rejoindre sur Facebook'
        src='https://www.facebook.com/people/Fort-IIIa-PODBIELSKI-fort-Ducrot/100064747353995/?fref=ts'
        target={true}
      />
      <Features />
      <Helpers />
      <Members />
    </>
  );
};

export default Association;
