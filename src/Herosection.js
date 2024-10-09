// src/HeroSection.js
import React from 'react';
import './Herosection.css'; // Keep the CSS file for styling
import heroImage1 from './Assets/heroimage.png';
import heroImage2 from './Assets/heroimage 2.webp';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-content">
        <h1 className="title">Lore Olympus Webtoon: Jaw Dropping Seen on Media</h1>
        <p className="sub-text">
          Dive into the intricate world of "Lore Olympus," where ancient myths collide with modern storytelling, 
          exploring power, love, trauma, and identity in captivating ways.
        </p>
        <div className="hero-image-container">
          <img src={heroImage1} alt="Lore Olympus 1" className="hero-image" />
        </div>
        <p className="description-text">
          Rachel Smith’s Lore Olympus webtoon is a modern retelling of the ancient Greek myth of Hades and Persephone, 
          has taken the digital comics world by storm. This article explores the complex world of “Lore Olympus,” 
          providing details on the Lore Olympus characters, major themes, and the impact this beloved series has on readers.
        </p>
        <div className="hero-image-container">
          <img src={heroImage2} alt="Lore Olympus 2" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
