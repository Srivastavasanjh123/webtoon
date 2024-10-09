// src/CharactersSection.js
import React from 'react';
import './Character.css';
import HadesImage from './Assets/hades.webp';
import PersephoneImage from './Assets/persephone.webp';
import ZeusImage from './Assets/zeus.webp';
import PoseidonImage from './Assets/poseidon.webp';
import ErosImage from './Assets/eros.webp';

const characters = [
  {
    name: 'Hades',
    image: HadesImage,
    description: `In the Lore Olympus webtoon, Hades, the God of the underworld, takes center stage. 
                  Often depicted as a handsome blue man in a business suit, Hades runs the Underworld Corporation, 
                  serves as the older brother of Zeus and Poseidon, and plays a role in the Six Traitor Dynasty. 
                  His character takes on the burden of leadership and pursuing personal interests.`
  },
  {
    name: 'Persephone',
    image: PersephoneImage,
    description: `Persephone, the goddess of spring, is the story’s heroine alongside the underworld. 
                  Initially portrayed as an innocent and naive young woman, her character develops dramatically 
                  as she faces more challenges. She is depicted with pink skin and a generous heart, 
                  discovering her strength while dealing with the trauma and her strong feelings about the underworld.`
  },
  {
    name: 'Zeus',
    image: ZeusImage,
    description: `Zeus, the king of the gods, is depicted as a yellow-skinned man with long, straight hair. 
                  Known for his promiscuity and egotism, Zeus’ actions often brought chaos to Olympus. 
                  His character provides a lens through which to examine issues of power and corruption.`
  },
  {
    name: 'Poseidon',
    image: PoseidonImage,
    description: `Poseidon, the God of the sea, is Zeus’s brother from the underworld. He is usually characterized 
                  by a carefree and quick temperament, portrayed with green skin and long, wavy hair. 
                  Despite being slightly less witted, Poseidon is very loyal to his family.`
  },
  {
    name: 'Eros',
    image: ErosImage,
    description: `Eros, the God of love and the son of Aphrodite and Ares, is a strong, maroon young man. 
                  He is one of Persephone’s best friends and is very supportive, often helping nurture 
                  other romantic relationships as he deals with his challenges.`
  }
];

const CharactersSection = () => {
  return (
    <section className="characters-section">
      <h2 className="section-title">Major Characters in Lore Olympus Webtoon</h2>
      {characters.map((character, index) => (
        <div key={index} className="character">
          <h3 className="character-name">{character.name}</h3>
          <img src={character.image} alt={character.name} className="character-image" />
          <p className="character-description">{character.description}</p>
        </div>
      ))}
    <div className="button-container">
        <a href="https://animemangatoon.com/lore-olympus-season-1-review/" className="cta-button" target="_blank" rel="noopener noreferrer">
          Read More About Lore Olympus
        </a>
      </div>
    </section>
  );
};

export default CharactersSection;
