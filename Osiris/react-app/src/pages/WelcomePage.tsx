import React, { useEffect } from 'react';

import '../assets/inicio.css';
import logoOsiris from '../assets/logo osiris.png';
import osirsDev from '../assets/osirs-dev.png';
import osirisStudio from '../assets/osirisstudio.png';
import l2Video from '../assets/l2.mp4';

const WelcomePage: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <>
      <div className="welcome-bg"></div>
      <div className="custom-cursor"></div>
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={l2Video} type="video/mp4" />
        </video>
      </div>
      <div className="energy-orb"></div>
      <div className="energy-orb"></div>
      <div className="energy-orb"></div>
      <div className="lightning-effect">
        <div className="lightning-flash"></div>
        <div className="lightning-flash"></div>
        <div className="lightning-flash"></div>
      </div>
      <div className="welcome-container">
        <div className="logo-section">
          <div className="main-logo" style={{ width: '140px', height: '140px', margin: '0 auto' }}>
            <img src={logoOsiris} alt="Osiris" style={{ maxWidth: '90%', maxHeight: '90%', height: 'auto', display: 'block', margin: '0 auto' }} />
          </div>
        </div>
        <div className="title-section">
          <h1 className="main-title">OSIRIS-PROJECT</h1>
          <p className="subtitle">El Destino Te Espera</p>
        </div>
        <div className="entry-section">
          <p className="entry-text">Prepárate para una experiencia única y legendaria</p>
          <a href="/main" className="enter-button">
            Entra Al Reino
          </a>
        </div>
      </div>
      <div className="click-anywhere">ENTRA YA!</div>
      <div className="audio-visualizer"></div>
      <div className="bottom-logos">
        <img src={osirsDev} alt="Logo Izquierdo" />
        <img src={osirisStudio} alt="Logo Derecho" />
      </div>
    </>
  );
};

export default WelcomePage;
