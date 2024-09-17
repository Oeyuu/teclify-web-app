import React from 'react';
import './ChallengesSection.css';
import timeIcon from '../../assets/time-icon.png';
import itPersonal from '../../assets/it-personal.png';
import brainWorking from '../../assets/brain-working.png';
import puzzle from '../../assets/puzzle.png';

const ChallengesSection = () => {
  return (
    <section className="challenges-section">
      <h2>Liebe Führungskraft,<br/> stehst du vor entscheidenden IT-Herausforderungen?</h2>
      <div className="challenges-grid">
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-icon">
              <img src={timeIcon} alt="Time Icon" />
            </div>
            <h3 className="challenge-title">Die IT-Projekte dauern länger als geplant</h3>
          </div>
          <p className="challenge-description">
            Du hast schon mehrmals versucht, deine IT-Projekte im vorgesehenen Zeitrahmen abzuschließen. Doch immer wieder kommt es zu Verzögerungen – sei es durch unvorhergesehene technische Schwierigkeiten, fehlende Ressourcen oder unerwartete Komplikationen. Wünschst du dir, dass deine IT-Projekte planmäßig und effizient umgesetzt werden?
          </p>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-icon">
              <img src={itPersonal} alt="IT Personal" />
            </div>
            <h3 className="challenge-title">Fachkräftemangel in der IT</h3>
          </div>
          <p className="challenge-description">
            Du suchst händeringend nach qualifizierten IT-Fachkräften, aber der Markt ist leer gefegt. Die wenigen Bewerbungen, die reinkommen, erfüllen nicht deine Erwartungen in Bezug auf Qualität und Erfahrung. Fragst du dich, wie du den richtigen IT-Experten finden kannst?
          </p>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-icon">
              <img src={brainWorking} alt="Brain working" />
            </div>
            <h3 className="challenge-title">Die Digitalisierung überfordert dein Unternehmen</h3>
          </div>
          <p className="challenge-description">
            Du weißt, dass Digitalisierung der Schlüssel zur Zukunft ist, aber der Weg dorthin ist steinig. Zu viele technische Details, zu wenig Zeit, und keine klaren Antworten, wie du den digitalen Wandel in deinem Unternehmen erfolgreich umsetzen kannst. Wünschst du dir Unterstützung beim nächsten Schritt in Richtung Digitalisierung?
          </p>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-icon">
              <img src={puzzle} alt="Puzzle" />
            </div>
            <h3 className="challenge-title">Du benötigst IT-Experten für ein Projekt</h3>
          </div>
          <p className="challenge-description">
            Du stehst vor einem wichtigen IT-Projekt, aber die Einstellung eines Vollzeit-Mitarbeiters wäre überdimensioniert. Du suchst nach einer flexiblen Lösung, bei der du genau die Expertise erhältst, die du brauchst, ohne langfristige Verpflichtungen?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
