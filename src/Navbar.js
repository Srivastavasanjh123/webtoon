// src/Navbar.js
import React from 'react';
import './Navbar.css';
import animemangatoonLogo from './Assets/animangatoon.jpg'; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <i className="menu-icon">☰</i> {/* Menu icon */}
      </div>
      <div className="navbar-logo">
        <img src={animemangatoonLogo} alt="Animemangatoon Logo" />
      </div>
      <div className="navbar-links">
        <a href="#featured">Featured</a>
        <a href="#watch">What to Watch</a>
        <a href="#news">Latest News and Reviews</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search search-icon"></i> {/* Font Awesome Search Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
