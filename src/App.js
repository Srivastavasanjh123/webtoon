// src/App.js
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection';
import CharactersSection from './Character';
import Supernatural from './Supernatural';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CharactersSection />
      <Supernatural/>
    </div>
  );
};

export default App;
