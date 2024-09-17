import React from 'react';
import './Footer.css';
import logo from '../assets/teclify-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
            <img src={logo} alt="Teclify Logo" />
            <div className="footer-section">
                <ul>
                    <li><a href="/impressum">Impressum</a></li>
                    <li><a href="/datenschutz">Datenschutz</a></li>
                </ul> 
            </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Übersicht</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Leistungen</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/expertise">Expertise</a></li>
              <li><a href="/career">Karriere</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
            <li><a href="/contact">Kontaktformular</a></li>
              <li><a href="mailto:info@teclify.com">Email: info@teclify.com</a></li>
              <li><a href="tel:+4917614375319">+49 176 14375319</a></li>
              <li><a href="tel:+4917614375318">+49 176 14375318</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Folge uns</h4>
            <ul className="social-media">
              <li><a href="https://www.xing.com">Xing</a></li>
              <li><a href="https://www.linkedin.com">LinkedIn</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Teclify. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
