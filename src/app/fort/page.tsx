import Link from 'next/link';
import React from 'react';

const Association = () => {
  return (
    <>
      <div className='hero h-[calc(100vh-62px)] bg-[url("/andre-brauch-ducrot.jpg")]'>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md md:max-w-2xl'>
            <h1 className='mb-5 text-5xl font-bold'>
              Le Fort Ducrot et son histoire
            </h1>
            <p className='mb-5'>
              Découvrez les origines fascinantes de cette fortification
              emblématique, son rôle stratégique au fil des siècles et son
              impact sur l'histoire militaire. Plongez dans un récit détaillé de
              sa construction, de ses modifications au fil du temps et de son
              importance dans divers événements historiques.
            </p>
            <Link
              className='btn btn-primary'
              href='#timeline-fort'
            >
              Tout savoir
            </Link>
          </div>
        </div>
      </div>
      <div
        id='timeline-fort'
        className='grid place-items-center w-full bg-base-100'
      >
        <div className='max-w-5xl py-24 content-center justify-center'>
          <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
            <li>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start md:text-end mb-10'>
                <time className='font-mono italic'>1870</time>
                <div className='text-lg font-black'>La chute de Strasbourg</div>
                La rapidité de la chute de Strasbourg le 28 septembre 1870,
                après un siège de 46 jours, incita l’Etat Major Allemand sous la
                direction des Généraux Von Moltke et Von Kameke à élaborer
                rapidement un plan de défense des frontières ouest de l’Empire
                nouvellement crée et qui devait transformer les villes de
                Cologne, Metz, Thionville et Strasbourg en camp retranché.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end mb-10'>
                <time className='font-mono italic'>1871</time>
                <div className='text-lg font-black'>
                  Projet de fortification
                </div>
                Les études s’inspirèrent des modèles de forts inters-armes déjà
                construits en Allemagne par le Général Biehler mais également du
                système défensif dont se dotait la France au même moment avec le
                Général Séré de Rivières. C’est ainsi que Strasbourg va être
                dotée d’une ceinture d’ouvrages détachés, puissamment armés et
                fortifiés. Le projet initial prévoyait la construction de 36
                forts, mais reculant devant une telle dépense, les Prussiens
                ramenèrent le projet à 14 forts.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start md:text-end mb-10'>
                <time className='font-mono italic'>1872</time>
                <div className='text-lg font-black'>Les sites retenus</div>
                Pour l’Etat-major Impérial, il fut tenu compte des enseignements
                du siège de 1870 (l’Etat-major du Général Von Werder occupa
                Mundolsheim lors du siège) et des contraintes qu’imposait la
                géographie des environs de Strasbourg. Les collines ou les
                "hauteurs de Hausbergen" donnaient à l’adversaire d’excellentes
                positions d’artillerie. Aussi fut-il très rapidement décidé de
                les intégrer dans le nouveau dispositif de défense. Les sites
                retenus pour la construction de forts détachés sur ces hauteurs
                de Hausbergen sont compris entre 6400 m à vol d’oiseau de la
                cathédrale pour le plus proche (Oberhausbergen - Fort Von Baden-
                Frère) et 7350 m pour le plus éloigné (Mundolsheim - Fort
                Podbielski - Ducrot).
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end mb-10'>
                <time className='font-mono italic'>1872-1882</time>
                <div className='text-lg font-black'>Construction des forts</div>
                Pour notre secteur et pour éviter que l’ennemi ne soit tenté de
                contourner les hauteurs de Hausbergen et d’attaquer Strasbourg
                par son front nord, les Prussiens ont construit le fort de
                Reichstett (Moltke-Rapp), un fort au nord-ouest de
                Souffelweyersheim (Roon-Desaix) ayant pour mission d’empêcher
                d’occuper Mundolsheim mais aussi de contrôler la route de
                Brumath, les voies de chemin de fer et le canal de la Marne au
                Rhin, et enfin celui de Mundolsheim(Podbielski-Ducrot) qui
                devait couvrir les voies de communication vers le nord, le flanc
                nord-ouest, les voies de chemin de fer à l’Est mais surtout
                empêcher l’adversaire de s’implanter sur les hauteurs du
                village. Notre fort s’appellera à l’origine Festung
                Mundolsheimer Kopf jusqu’au 29 Août 1882 où l’AKO (Allerhöchste
                Kabinett Order) le baptisa officiellement Festung PODBIELSKI.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start md:text-end mb-10'>
                <time className='font-mono italic'>1887-1911</time>
                <div className='text-lg font-black'>Renforcement du fort</div>
                Le Fort Poblielski-Ducrot est plutôt considéré comme un petit
                fort, mais qui comporte quelques particularités, comme être le
                dernier fort construit de la ceinture de Strasbourg. Construit
                de 1879 à 1882 à une centaine de mètres de l’Eglise Protestante,
                sur une remarquable position naturelle. Il a été renforcé de
                1887 à 1890 et transformé de nouveau en 1893. Ses particularités
                ont été le renforcement après 1911 par une casemate unique de
                flanquement ouest, reliée au fort par une galerie bétonnée et
                dotée de 2 canons et d’une autre casemate de flanquement est, au
                dessus de l’actuelle rue des acacias, abritant également 2
                canons.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end mb-10'>
                <time className='font-mono italic'>1936</time>
                <div className='text-lg font-black'>
                  Intégration à la ligne Maginot
                </div>
                Couverture de la façade en béton en intégration à la ligne
                Maginot et transformation en poste de commandement de la 103ème
                division d'infanterie de forteresse. Pendant de longs mois, le
                chemin reliant le Fort Podbielski-Ducrot à la Batterie des
                cerisiers et au fort Kronprinz-Foch était camouflé par des
                bâches pour empêcher la vue de la circulation des véhicules
                militaires à partir de la Forêt Noire.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start md:text-end mb-10'>
                <time className='font-mono italic'>1945</time>
                <div className='text-lg font-black'>
                  Usage pendant et après la Seconde Guerre mondiale
                </div>
                Utilisation comme cantonnement par les troupes américaines
                jusqu'à la contre-offensive contre la poche de Gambsheim.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end mb-10'>
                <time className='font-mono italic'>Années 1990</time>
                <div className='text-lg font-black'>
                  Période d'abandon et acquisition par la commune
                </div>
                Abandon par l'armée et acquisition par la commune de Mundolsheim
                en 1990 pour 90000 francs
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start md:text-end mb-10'>
                <time className='font-mono italic'>2010</time>
                <div className='text-lg font-black'>
                  Rénovation et Réhabilitation du Fort
                </div>
                L'association "Les amis du fort Podbielski-Ducrot" commence les
                travaux de rénovation et de réhabilitation avec le soutien de la
                municipalité sous le mandat de Norbert REINHARDT.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end mb-10'>
                <time className='font-mono italic'>Aujourd'hui</time>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Association;
