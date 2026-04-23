import { DraggableCardContainer, DraggableCardBody } from '../components/ui/draggable-card';

import imgEp1 from '../assets/star_wars_episode_i_la_menace_fantome.webp';
import imgEp2 from '../assets/Star_Wars_Episode_II_Attack_of_the_Clones.webp';
import imgEp3 from '../assets/Star_Wars_Episode_III_Revenge_of_the_Sith.webp';
import imgEp4 from '../assets/La_Guerre_des Étoiles.webp';
import imgEp5 from '../assets/Empire_Strikes_Back.webp';
import imgEp6 from '../assets/Le_Retour_du_Jedi.webp';
import imgEp7 from '../assets/Star_Wars_The_Force_Awakens.webp';
import imgEp8 from '../assets/Star_Wars_Les_Derniers_Jedi.webp';
import imgEp9 from '../assets/Star_Wars_The_Rise_of_Skywalker.webp';
import imgRogueOne from '../assets/Rogue_One_A_Star_Wars_Story.webp';
import imgSolo from '../assets/Solo_A_Star_Wars_Story.webp';

const FILMS = [
  { id: 1, title: 'La Menace Fantôme', image: imgEp1 },
  { id: 2, title: 'L\'Attaque des Clones', image: imgEp2 },
  { id: 3, title: 'La Revanche des Sith', image: imgEp3 },
  { id: 4, title: 'Un Nouvel Espoir', image: imgEp4 },
  { id: 5, title: 'L\'Empire Contre-Attaque', image: imgEp5 },
  { id: 6, title: 'Le Retour du Jedi', image: imgEp6 },
  { id: 7, title: 'Le Réveil de la Force', image: imgEp7 },
  { id: 8, title: 'Les Derniers Jedi', image: imgEp8 },
  { id: 9, title: 'L\'Ascension de Skywalker', image: imgEp9 },
  { id: 10, title: 'Rogue One', image: imgRogueOne },
  { id: 11, title: 'Solo', image: imgSolo },
];

export default function Films() {
  return (
    <main className="flex-grow flex flex-col items-center p-6 sm:p-12 relative w-full overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#ffe81f] tracking-[0.2em] uppercase text-center mb-16 [text-shadow:4px_4px_0_rgba(0,0,0,1),0_0_25px_rgba(255,232,31,0.5)]">
          Les Films
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {FILMS.map((film) => (
            <DraggableCardContainer key={film.id}>
              <DraggableCardBody className="bg-black/80 backdrop-blur-md border-[1px] border-[#ffe81f]/40 flex flex-col p-3 w-72 sm:w-80 h-[450px] shadow-[0_0_30px_rgba(255,232,31,0.15)] cursor-grab active:cursor-grabbing">
                <div className="w-full h-full relative overflow-hidden rounded shadow-inner">
                  <img 
                    src={film.image} 
                    alt={film.title} 
                    className="w-full h-full object-cover select-none pointer-events-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none opacity-90"></div>
                  <h3 className="absolute bottom-6 left-4 right-4 text-center text-[#ffe81f] font-bold text-lg sm:text-xl tracking-widest uppercase [text-shadow:2px_2px_4px_black] pointer-events-none">
                    {film.title}
                  </h3>
                </div>
              </DraggableCardBody>
            </DraggableCardContainer>
          ))}
        </div>
      </div>
    </main>
  );
}
