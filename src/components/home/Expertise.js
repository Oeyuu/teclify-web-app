import React, { useState } from 'react'; 

import './Expertise.css';
import frontendIcon from '../../assets/it-personal.png';
import backendIcon from '../../assets/puzzle.png'; 

const Expertise = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedTerm, setSearchedTerm] = useState(''); // Speichert den Suchbegriff nach dem Abschicken

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchedTerm(searchTerm); // Speichert den Suchbegriff, um die Ergebnisse auf der Seite anzuzeigen
    }
  };

  const knowledgeItems = [
    { title: 'Frontend', icon: frontendIcon },
    { title: 'Backend', icon: backendIcon },
    { title: 'Fullstack', icon: frontendIcon },
    { title: 'Datenbanken', icon: backendIcon },
    { title: 'Scripte', icon: frontendIcon },
    { title: 'DevOps', icon: backendIcon },
    { title: 'Projektplanung', icon: frontendIcon },
    { title: 'Security', icon: backendIcon },
  ];

  return (
    <section className="knowledge-section">
      <h2>Diese IT Kenntnisse haben wir:</h2>
      <div className="knowledge-grid">
        {knowledgeItems.map((item, index) => (
          <div key={index} className="knowledge-card">
            <img src={item.icon} alt={`${item.title} icon`} className="knowledge-icon" />
            <h3>{item.title}</h3>
            <a href="#expertise" className="knowledge-link">→</a>
          </div>
        ))}
      </div>
      
      <p className="search-hint">
        Suchst du nach einer bestimmten Programmiersprache oder einer Technologie? Du kannst hier nachschauen, ob wir diese Expertise mitbringen.
      </p>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Technologie suchen..."
          className="search-input"
        />
        <button type="submit" className="search-button">→</button>
      </form>
      
     
      {searchedTerm && (
        <div className="search-results">
          <h3>Ergebnisse für: "{searchedTerm}"</h3>
         
        </div>
      )}

      
    </section>
  );
};

export default Expertise;
