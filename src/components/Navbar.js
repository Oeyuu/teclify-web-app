import React from 'react';
import './Navbar.css';
import logo from '../assets/teclify-logo.png'; // Verwende den relativen Pfad zum Logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <a href="/"> <img src={logo} alt="Teclify Logo" /></a>
      </div>
      <ul className="navbar-links">
        <li><a href="/aboutus">About Us</a></li>
        <li>
          <a href="/services">
            Leistungen <span className="dropdown-icon">▼</span>
          </a>
          <ul className="dropdown">
            <li><a href="/service#1">Leistung 1</a></li>
            <li><a href="/service#2">Leistung 2</a></li>
          </ul>
        </li>
        <li><a href="/portfolio">Portfolio</a></li> 
        <li><a href="/expertise">Expertise</a></li> 
        <li><a href="/career">Karriere</a></li>
        <li>
          <a href="/contact" className="contact-button">
            Kontakt aufnehmen
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
