

import React from 'react';
import './assets/inicio.css';
import VideoBackground from './components/VideoBackground';
import LogoSection from './components/LogoSection';
import EnergyOrbs from './components/EnergyOrbs';
import LightningEffect from './components/LightningEffect';
import AudioVisualizer from './components/AudioVisualizer';

import Footer from './components/Footer';

function App() {
  // Función para la animación de transición
  const enterSite = () => {
    const transition = document.getElementById('pageTransition');
    if (transition) {
      transition.classList.add('active');
      setTimeout(() => {
        transition.classList.remove('active');
      }, 1000);
    }
  };

  // Efectos de partículas y eventos
  React.useEffect(() => {
    function createParticles() {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        document.body.appendChild(particle);
      }
    }
    createParticles();
    // Limpieza de partículas al desmontar
    return () => {
      document.querySelectorAll('.particle').forEach(p => p.remove());
    };
  }, []);

  // Cursor personalizado y orbes
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
      }
      const mouseXNorm = e.clientX / window.innerWidth;
      const mouseYNorm = e.clientY / window.innerHeight;
      const energyOrbs = document.querySelectorAll('.energy-orb');
      energyOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseXNorm * speed;
        const y = mouseYNorm * speed;
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Eventos de teclado y click
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        enterSite();
      }
    };
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.enter-button') && !target.closest('.main-logo')) {
        enterSite();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
  <VideoBackground />
      <div className="page-transition" id="pageTransition"></div>
      <div className="background-container">
        <div className="background-image"></div>
        <div className="custom-background"></div>
        <div className="background-overlay"></div>
      </div>
  <EnergyOrbs />
  <LightningEffect />
      <div className="welcome-container">
    <LogoSection onClick={enterSite} />
        <div className="title-section">
          <h1 className="main-title">OSIRIS-PROJECT</h1>
          <p className="subtitle">El Destino Te Espera</p>
        </div>
        <div className="entry-section">
          <p className="entry-text">Prepárate para una experiencia única y legendaria</p>
          <a href="/main.html" className="enter-button" onClick={enterSite}>
            Entra Al Reino
          </a>
        </div>
      </div>
      <div className="click-anywhere">ENTRA YA!</div>
  <AudioVisualizer />
  <Footer />
    </>
  );
}

export default App;
