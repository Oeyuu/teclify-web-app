import React from 'react';
import './SolutionSection.css';
import exampleImage from '../../assets/home-blurred.png';

const SolutionSection = () => {
  return (
    <section className="solution-section">
      <h2>Wir sind die Lösung zum Problem!<br />Mit uns ist euer Erfolg sicher.</h2>
      {/* Lösung 1 - Bild links, Text rechts */}
      <div className="solution-item ">
        <img src={exampleImage} alt="Lösung" className="solution-image" />
        <div className="solution-content">
          <h3>Effiziente IT-Projektumsetzung</h3>
          <p>
            Unsere IT-Beratung hilft Ihnen, Projekte pünktlich und effizient abzuschließen. 
            Wir identifizieren potenzielle Engpässe und bieten maßgeschneiderte Lösungen, um technische Schwierigkeiten und Verzögerungen zu minimieren.
          </p>
          <ul>
            <li>Professionelle Planung und Durchführung</li>
            <li>Minimierung von Ressourcenengpässen</li>
            <li>Termingerechte Projektergebnisse</li>
          </ul>
        </div>
      </div>

      {/* Lösung 2 - Bild rechts, Text links */}
      <div className="solution-item">
        <div className="solution-content">
          <h3>Fachkräftemangel effizient überbrücken</h3>
          <p>
            Wir unterstützen Sie bei der Suche nach qualifizierten IT-Experten, um kritische Positionen in Ihrem Unternehmen schnell zu besetzen.
            Unsere Netzwerke bieten Ihnen Zugang zu erfahrenen Fachkräften.
          </p>
          <ul>
            <li>Breites Netzwerk von IT-Experten</li>
            <li>Schnelle Besetzung von Schlüsselpositionen</li>
            <li>Flexibilität durch projektbasierte Ressourcen</li>
          </ul>
        </div>
        <img src={exampleImage} alt="Lösung" className="solution-image" />
      </div>

      {/* Lösung 3 - Bild links, Text rechts */}
      <div className="solution-item ">
        <img src={exampleImage} alt="Lösung" className="solution-image" />
        <div className="solution-content">
          <h3>Digitalisierung für Ihr Unternehmen</h3>
          <p>
            Unser Ziel ist es, Ihr Unternehmen sicher durch die Digitalisierung zu führen. 
            Wir helfen Ihnen, die richtigen Technologien zu implementieren und langfristige Strategien zu entwickeln.
          </p>
          <ul>
            <li>Modernste Technologien für Ihr Unternehmen</li>
            <li>Effiziente Implementierung digitaler Lösungen</li>
            <li>Nachhaltige digitale Strategien</li>
          </ul>
        </div>
      </div>

      {/* Lösung 4 - Bild rechts, Text links */}
      <div className="solution-item">
        <div className="solution-content">
          <h3>Kosteneffiziente IT-Lösungen</h3>
          <p>
            Wir optimieren Ihre IT-Kosten, indem wir maßgeschneiderte Lösungen anbieten, die sowohl Ihre Anforderungen als auch Ihr Budget berücksichtigen. 
            Langfristige Effizienz und Kosteneinsparungen stehen dabei im Fokus.
          </p>
          <ul>
            <li>Maßgeschneiderte IT-Konzepte</li>
            <li>Optimierung der laufenden IT-Kosten</li>
            <li>Langfristige Unterstützung und Betreuung</li>
          </ul>
        </div>
        <img src={exampleImage} alt="Lösung" className="solution-image" />
      </div>

    </section>
  );
};

export default SolutionSection;
