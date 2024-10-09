// src/BestSupernaturalManhwa.js
import React from 'react';
import './Supernatural.css';
import MainImage from './Assets/mainimage.webp'; // Replace with the actual path to the first image of the page
import LeviathanImage from './Assets/1.jpg'; // Replace with actual image paths for each manhwa
import TowerOfGodImage from './Assets/2.jpg';
import LevelingUpImage from './Assets/3.jpg';
import ExistenceImage from './Assets/4.jpg';
import BreakerImage from './Assets/5.jpg';
import FirstHunterImage from './Assets/6.jpg';
import NoblesseImage from './Assets/7.jpg';
import UltimateOutcastImage from './Assets/8.jpg';
import UnholyBloodImage from './Assets/9.jpg';
import DiceImage from './Assets/10.jpg';

const manhwaList = [
  {
    title: "1. Best Supernatural Manhwa – Leviathan",
    image: LeviathanImage,
    writer: "Gyeong-tak LEE, Mi-young NOH",
    genre: "Sci-Fi, Horror, Action",
    years: "2018-2022",
    description: "The protagonist, Bota, and his family live on a small boat because the water has risen and captured the dry lands. So, they search for food and more from the underwater cities. Leviathan follows the survival journey of the siblings Bota and Rita Ma following the murder of their father at the hands of a sea monster. Following a near-lethal encounter with a monster, Bota and Rita are taken in by Kana, an acquaintance of Teon Ma, their late father. Eventually, a tragic twist in the narrative, Bota, Rita, and Kana find themselves battling for the survival of humanity."
  },
  {
    title: "2. Tower of God",
    image: TowerOfGodImage,
    writer: "SIU",
    genre: "Action, Fantasy",
    years: "2010-2019",
    description: "The Tower of God revolves around Twenty-Fifth Baam, who spends most of his early life stuck beneath the titular tower. While looking for his friend Rachel, he climbs the mysterious tower. What he will discover in his quest to find his friend is also beyond anything he could have imagined. Moreover, the more he climbs, the more difficult it gets, as each floor offers him a new obstacle that he has to overcome to keep climbing. Baam needs to succeed in all these challenges to reach the peak of the Tower eventually."
  },
  {
    title: "3. Leveling Up with the Gods",
    image: LevelingUpImage,
    writer: "Ohyeon, B.Ain",
    genre: "Fantasy, Action",
    years: "2021 -?",
    description: "Leveling Up with the Gods is undoubtedly one of the best supernatural manhwa. It centers on Kim Yuwon, who, after losing the battle against the Outer Gods, is offered another opportunity and sent back into the past. Now, back to the time before the war, Yuwon has only one objective – to eventually climb the Tower and become the strongest to avert the potential destruction. If you liked Tower of God, you must read Leveling Up With the Gods."
  },
  {
    title: "4. Existence",
    image: ExistenceImage,
    writer: "Gwang-Jin, Kim Kyungjun",
    genre: "Action, Drama",
    years: "2022 -?",
    description: "Existence follows the central character Lee Jan-In, who has experienced countless lives as a different species before being born as a human. With each life, he questions the objective of his constant reincarnation. After being born as a human with all the memories of his previous life, he understands the purpose of his existence, and that is the extermination of humanity. However, soon after experiencing the intricacies of human life, he eventually begins to question the meaning of his life."
  },
  {
    title: "5. The Breaker",
    image: BreakerImage,
    writer: "Geuk-Jin Jeon, Jin-Hwan Park",
    genre: "Action",
    years: "2007-2010",
    description: "The Breaker, in particular, follows the central character of the manhwa Lee Shi-Woon. After witnessing the fighting abilities of his new English teacher, Chun Woo, Lee finds a ray of hope to alter his life from constant bullying. With the hope of escaping his life, Shi-Woon finally convinces his teacher to take him as his disciple. However, what Shi-Woon considers an escape from his reality is only a welcome invitation to the infernal world of the Murim."
  },
  {
    title: "6. The First Hunter",
    image: FirstHunterImage,
    writer: "D-Dart, Chanuk Jeon",
    genre: "Action, Fantasy",
    years: "2019-2021",
    description: "The First Hunter is an apocalyptic supernatural manhwa set in a wasteland of Earth following the abrupt invasion of monsters. Amidst the chaos and war against the monsters, humans also discover special abilities. The manhwa, in particular, focuses on the central character, Kim Taehoon, a former special force officer. He looks gloomier than ever when an artifact forecasts his demise several years later. Learning the possibility of his death, he eventually fights to change the future of the world and his fate."
  },
  {
    title: "7. Noblesse",
    image: NoblesseImage,
    writer: "Je-Ho SON, Gwang-Su LEE",
    genre: "Comedy, Action, Fantasy",
    years: "2007-2009",
    description: "Noblesse is a title only given to the strongest vampire. The Manhwa series takes place in a fictional world where the supernatural and the ordinary coexist apart from each other. The central character, Cadiz Etrama Di Raizel, falls into a slumber of 820 years and eventually awakens to an unfamiliar world. He finally reunites with his loyal servant Frankenstein and starts a new life. However, with the dangers looming around, it would be difficult to conceal his abilities as a Noblesse for long."
  },
  {
    title: "8. Ultimate Outcast",
    image: UltimateOutcastImage,
    writer: "No Do Hwan",
    genre: "Action, Drama",
    years: "2016-2017",
    description: "The Ultimate Outcast manhwa focuses on high school student Kang Hanuel, a victim of societal ostracization. Although every outcast doesn’t turn vengeful, after witnessing his friend in a terrifying incident, Kang decides to be that outcast. After discovering a strange power, Hanuel finally decides to take revenge on everyone responsible in the most terrifying way possible, making it one of the best supernatural manhwa."
  },
  {
    title: "9. Unholy Blood",
    image: UnholyBloodImage,
    writer: "Lina IM",
    genre: "Romance, Fantasy, Action",
    years: "2020-2022",
    description: "Unholy Blood focuses on Hayan Park, an ordinary university student who wants nothing but a peaceful life. Her wish is destroyed after the demise of her adopted father at the hands of vampires, compelling her to disclose her true identity finally. She is the last pure-blood vampire. After revealing her reality, she is forced to confront her past and biological family. Eventually, with a human detective’s help, Hayan sets out for revenge against the vampires."
  },
  {
    title: "10. Dice: The Cube that Changes Everything",
    image: DiceImage,
    writer: "Hyunseok Yun",
    genre: "Action, Fantasy",
    years: "2013-2021",
    description: "Dice: The Cube that Changes Everything, in particular, centers around the central character, Dongtae. Initially, he begins as a shy high school kid who is a loser in every aspect of his life. After being constantly mistreated and bullied, his life takes a fortunate twist when he becomes a dicer. However, can he alter his whole life by rolling a simple cube?"
  }
  // Add the rest of the manhwa details similarly
];

const BestSupernaturalManhwa = () => {
  return (
    <section className="best-supernatural-manhwa">
      <h2 className="section-title">The 10 Best Supernatural Manhwa You Should Read Now</h2>
      <img src={MainImage} alt="Main Image" className="main-image" />
      <p className="intro-text">
        Supernatural manhwa is a sub-genre of fantasy manhwa and covers tales from towers to seas. If you are bored of scrolling through the same action and romance manhwas, it’s time to explore the fantasy genre finally. Moreover, the supernatural webtoon offers a taste of the mundane and the unique, immersing readers in a mystical world. From Noblesse to Tower of God and Leviathan to DICE, here are the 10 best supernatural manhwa you must explore.
      </p>

      {manhwaList.map((manhwa, index) => (
        <div key={index} className="manhwa-item">
          <h3 className="manhwa-title">{manhwa.title}</h3>
          <img src={manhwa.image} alt={manhwa.title} className="manhwa-image" />
          <p><strong>Writer:</strong> {manhwa.writer}</p>
          <p><strong>Genre:</strong> {manhwa.genre}</p>
          <p><strong>Release Years:</strong> {manhwa.years}</p>
          <p className="manhwa-description">{manhwa.description}</p>
        </div>
      ))}
    </section>
  );
};

export default BestSupernaturalManhwa;
