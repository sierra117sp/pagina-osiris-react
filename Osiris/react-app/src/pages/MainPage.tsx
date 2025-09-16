import React, { useEffect } from 'react';
import '../assets/main.css';
import '../assets/inicio.css';


import VideoBackground from '../components/VideoBackground';
import EnergyOrbs from '../components/EnergyOrbs';
import LightningEffect from '../components/LightningEffect';
import AudioVisualizer from '../components/AudioVisualizer';

import logoOsiris from '../assets/logo osiris.png';
import osirsDev from '../assets/osirs-dev.png';
import osirisStudio from '../assets/osirisstudio.png';
import paypalMain from '../assets/paypal-main.jpg';
import stripeImage from '../assets/Stripe-image.png';

const MainPage: React.FC = () => {
  // Efecto para el puntero personalizado y orbes
  useEffect(() => {
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
  useEffect(() => {
    // Smooth scroll para anclas internas
    const handleAnchorClick = (e: Event) => {
      const anchor = e.target as HTMLAnchorElement;
      if (anchor.tagName === 'A' && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Agregar event listeners a las anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Animaciones fade-in con IntersectionObserver
    const observerOptions = { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observar elementos con clase fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Header background scroll
    const handleScroll = () => {
      const header = document.querySelector('.header') as HTMLElement;
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
          header.style.background = 'rgba(0, 0, 0, 0.9)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Contador de jugadores online
    const updatePlayerCount = () => {
      const playerCountElement = document.querySelector('.footer-section p strong');
      if (playerCountElement) {
        const baseCount = 520;
        const variation = Math.floor(Math.random() * 50) - 25;
        const newCount = Math.max(baseCount + variation, 400);
        playerCountElement.textContent = newCount.toString();
      }
    };

    const interval = setInterval(updatePlayerCount, 30000);
    updatePlayerCount();

    // Cleanup function
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <VideoBackground />
      <EnergyOrbs />
      <LightningEffect />
      <AudioVisualizer />

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <img src={logoOsiris} alt="Logo OSIRIS PROJECT" className="header-logo" />
            <div className="logo">OSIRIS PROJECT</div>
          </div>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servidor">Servidor</a></li>
            <li><a href="#rates">Rates</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#donaciones">Donaciones</a></li>
            <li><a href="#descargar">Descargar</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <img src={logoOsiris} alt="Logo OSIRIS PROJECT" className="hero-logo" />
          <h1>OSIRIS PROJECT</h1>
          <p className="hero-subtitle">Servidor Lineage 2 Interlude - Rates x300</p>
          <p className="hero-desc">¡Despierta al guerrero que llevas dentro!</p>
          <div className="cta-buttons">
            <a href="#descargar" className="btn btn-primary">Jugar Ahora</a>
            <a href="#servidor" className="btn btn-secondary">Más Información</a>
          </div>
        </div>
      </section>

      {/* Información del Servidor */}
      <section id="servidor" className="info-section">
        <div className="info-container">
          <h2 className="section-title fade-in">¿Por qué elegir OSIRIS PROJECT?</h2>
          <div className="info-grid">
            <div className="info-card fade-in">
              <h3>⚔️ PvP Intenso</h3>
              <p>Combates intensos con sistema de castillos, olimpiadas y eventos PvP únicos que pondrán a prueba tus habilidades.</p>
            </div>
            <div className="info-card fade-in">
              <h3>🏆 Eventos Únicos</h3>
              <p>Eventos automáticos cada hora, torneos semanales y recompensas exclusivas para los mejores jugadores.</p>
            </div>
            <div className="info-card fade-in">
              <h3>👥 Comunidad Activa</h3>
              <p>Más de 500 jugadores online, comunidad en Discord y soporte 24/7 para resolver cualquier duda.</p>
            </div>
            <div className="info-card fade-in">
              <h3>⚖️ Anti-Cheat</h3>
              <p>Sistema avanzado de detección y prevención de cheats para mantener un juego justo para todos.</p>
            </div>
            <div className="info-card fade-in">
              <h3>🔄 Actualizaciones</h3>
              <p>Contenido nuevo cada mes, balance constante y mejoras basadas en feedback de la comunidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates del Servidor */}
      <section id="rates" className="rates-section">
        <div className="rates-container">
          <h2 className="section-title fade-in">Rates del Servidor</h2>
          <div className="rates-grid">
            <div className="rate-item fade-in">
              <h4>Experience</h4>
              <div className="rate-value">x300</div>
              <p>Leveleo rápido</p>
            </div>
            <div className="rate-item fade-in">
              <h4>Skill Points</h4>
              <div className="rate-value">x300</div>
              <p>Aprende habilidades</p>
            </div>
            <div className="rate-item fade-in">
              <h4>Adena</h4>
              <div className="rate-value">x200</div>
              <p>Economía balanceada</p>
            </div>
            <div className="rate-item fade-in">
              <h4>Drop Rate</h4>
              <div className="rate-value">x150</div>
              <p>Loot abundante</p>
            </div>
            <div className="rate-item fade-in">
              <h4>Spoil Rate</h4>
              <div className="rate-value">x100</div>
              <p>Crafteo eficiente</p>
            </div>
            <div className="rate-item fade-in">
              <h4>Quest Rate</h4>
              <div className="rate-value">x50</div>
              <p>Misiones épicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Características Especiales */}
      <section id="caracteristicas" className="features">
        <h2 className="section-title fade-in">Características Especiales</h2>
        <div className="features-grid">
          <div className="feature-card fade-in">
            <h4>🏰 Sistema de Castillos</h4>
            <p>Conquista y defiende castillos épicos. Lidera tu clan hacia la gloria y obtén beneficios exclusivos por controlar territorios estratégicos.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>🏟️ Olimpiadas Activas</h4>
            <p>Compite en las olimpiadas semanales por el título de héroe. Demuestra tu skill en combates 1vs1 y obtén armas legendarias.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>⚔️ Grand Olympiad</h4>
            <p>Sistema de héroes completamente funcional con todas las habilidades y transformaciones disponibles para los campeones.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>🎯 Sistema de Clanes</h4>
            <p>Crea o únete a un clan poderoso. Participa en guerras de clanes, asedios y eventos exclusivos para grupos organizados.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>🔮 Buffs Completos</h4>
            <p>Sistema de buffs automático y NPC buffer disponible. Mantén siempre los mejores buffs para maximizar tu potencial de combate.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>🏪 Tienda Premium</h4>
            <p>Tienda balanceada con items cosméticos y utilidades. Ningún item pay-to-win, solo conveniencia y personalización.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>🎪 Eventos Automáticos</h4>
            <p>TVT, CTF, DM, King of the Hill y muchos eventos más cada hora. Recompensas épicas y diversión garantizada.</p>
          </div>
          <div className="feature-card fade-in">
            <h4>🛡️ Balance Perfecto</h4>
            <p>Todas las clases están balanceadas. No hay clases dominantes, cada una tiene su rol y estrategia única en el campo de batalla.</p>
          </div>
        </div>
      </section>

      {/* Paquetes de Donación */}
      <section id="donaciones" className="donations-section">
        <div className="donations-container">
          <h2 className="section-title fade-in">Paquetes de Donación</h2>
          <p style={{ textAlign: 'center', color: '#cccccc', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Apoya el servidor y obtén beneficios exclusivos
          </p>
          <div className="donations-grid">
            {/* Bronce */}
            <div className="donation-card fade-in">
              <h3>🥉 Bronce</h3>
              <div className="donation-price">$10</div>
              <ul className="donation-benefits">
                <li>1000 Donate Coins</li>
                <li>Título [Supporter]</li>
                <li>Acceso a zona VIP</li>
                <li>Buffer premium</li>
                <li>Teleport gratuito</li>
              </ul>
              <div className="payment-methods">
                <a href="https://www.paypal.com/donate/?hosted_button_id=2RGNG2UWK4QCE" className="payment-btn paypal-btn">
                  <img src={paypalMain} alt="PayPal" className="paypal-logo" />
                  💳 PayPal
                </a>
                <a href="https://donate.stripe.com/eVa5mXbzw2oXcla144" className="payment-btn stripe-btn">
                  <img src={stripeImage} alt="Stripe" className="paypal-logo" />
                  🔒 Stripe
                </a>
              </div>
            </div>
            {/* Plata */}
            <div className="donation-card fade-in">
              <h3>🥈 Plata</h3>
              <div className="donation-price">$25</div>
              <ul className="donation-benefits">
                <li>2500 Donate Coins</li>
                <li>Título [VIP Silver]</li>
                <li>Set de armor +6</li>
                <li>Arma +8</li>
                <li>Todos los beneficios Bronce</li>
                <li>Respawn instantáneo</li>
              </ul>
              <div className="payment-methods">
                <a href="https://www.paypal.com/donate/?hosted_button_id=2RGNG2UWK4QCE" className="payment-btn paypal-btn">
                  <img src={paypalMain} alt="PayPal" className="paypal-logo" />
                  💳 PayPal
                </a>
                <a href="https://donate.stripe.com/eVa5mXbzw2oXcla144" className="payment-btn stripe-btn">
                  <img src={stripeImage} alt="Stripe" className="paypal-logo" />
                  🔒 Stripe
                </a>
              </div>
            </div>
            {/* Oro */}
            <div className="donation-card fade-in">
              <h3>🥇 Oro</h3>
              <div className="donation-price">$50</div>
              <ul className="donation-benefits">
                <li>5500 Donate Coins</li>
                <li>Título [VIP Gold]</li>
                <li>Set dinasty +10</li>
                <li>Arma S84 +12</li>
                <li>Todos los beneficios anteriores</li>
                <li>Mascota exclusiva</li>
                <li>Aura especial</li>
              </ul>
              <div className="payment-methods">
                <a href="https://www.paypal.com/donate/?hosted_button_id=2RGNG2UWK4QCE" className="payment-btn paypal-btn">
                  <img src={paypalMain} alt="PayPal" className="paypal-logo" />
                  💳 PayPal
                </a>
                <a href="https://donate.stripe.com/eVa5mXbzw2oXcla144" className="payment-btn stripe-btn">
                  <img src={stripeImage} alt="Stripe" className="paypal-logo" />
                  🔒 Stripe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord */}
      <section className="discord-section">
        <div className="discord-container">
          <h2 className="section-title fade-in">Únete a Nuestra Comunidad</h2>
          <div className="discord-card fade-in">
            <h3 style={{ color: '#5865f2', marginBottom: '1rem' }}>📢 Servidor Discord Oficial</h3>
            <p style={{ color: '#cccccc', marginBottom: '2rem' }}>
              Conecta con otros jugadores, recibe noticias y obtén soporte 24/7
            </p>
            <a href="#" className="discord-btn">
              💬 Unirse al Discord
            </a>
            <iframe 
              src="https://discord.com/widget?id=1368065699880112169&theme=dark" 
              width="350" 
              height="500" 
              allowTransparency={true} 
              frameBorder={0} 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
            <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.9rem' }}>
              Más de 1,500 miembros activos
            </p>
          </div>
        </div>
      </section>

      {/* Descargar Cliente */}
      <section id="descargar" className="download-section">
        <div className="download-container">
          <h2 className="section-title fade-in">Descargar Cliente</h2>
          <div className="download-box fade-in">
            <h3>Cliente Lineage 2 Interlude</h3>
            <div className="download-info">
              <p><strong>Versión:</strong> Interlude (Actualizada)</p>
              <p><strong>Tamaño:</strong> ~4.2 GB</p>
              <p><strong>Incluye:</strong> Todos los parches y actualizaciones</p>
              <p><strong>Compatibilidad:</strong> Windows 7/8/10/11</p>
            </div>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Descargar Cliente</a>
              <a href="#" className="btn btn-secondary">Guía de Instalación</a>
            </div>
          </div>
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '10px' }}>
            <p><strong>Información de Conexión:</strong></p>
            <p>Server IP: <strong>play.osiris-project.com</strong></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="footer-content">
          <div className="footer-logo-left">
            <img src={osirsDev} alt="Logo Izquierdo" className="footer-logo" />
          </div>
          <div className="footer-main-content">
            <div className="footer-section">
              <h4>OSIRIS PROJECT</h4>
              <p>Server y web creados por el equipo de OSIRIS-STUDIO Y OSIRIS-DEVELOPMENT</p>
              <p>El servidor de Lineage 2 Interlude más épico con rates x300. Únete a la hermandad de guerreros y conquista los territorios más legendarios.</p>
              <div className="social-links">
                <a href="#" title="Discord">💬</a>
                <a href="#" title="Facebook">📘</a>
                <a href="#" title="YouTube">📺</a>
                <a href="#" title="Instagram">📷</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Enlaces Rápidos</h4>
              <p><a href="#rates">Información de Rates</a></p>
              <p><a href="#descargar">Descargar Cliente</a></p>
              <p><a href="#">Guías para Nuevos Jugadores</a></p>
              <p><a href="#">Ranking de Jugadores</a></p>
              <p><a href="#">Status del Servidor</a></p>
            </div>
            <div className="footer-section">
              <h4>Soporte</h4>
              <p><a href="#">Centro de Ayuda</a></p>
              <p><a href="#">Reportar Bug</a></p>
              <p><a href="#">Contactar GM o ADM</a></p>
              <p><a href="#">Términos de Servicio</a></p>
              <p><a href="#">Política de Privacidad</a></p>
            </div>
            <div className="footer-section">
              <h4>Estadísticas</h4>
              <p>Jugadores Online: <strong>542</strong></p>
              <p>Clanes Activos: <strong>87</strong></p>
              <p>Castillos Conquistados: <strong>7</strong></p>
              <p>Uptime: <strong>99.8%</strong></p>
              <p>Servidor Abierto: <strong>365 días</strong></p>
            </div>
          </div>
          <div className="footer-logo-right">
            <img src={osirisStudio} alt="Logo Derecho" className="footer-logo" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 OSIRIS PROJECT. Todos los derechos reservados. Lineage II y el logo de Lineage II son marcas comerciales de NCSOFT Corporation.</p>
        </div>
      </footer>
    </>
  );
};

export default MainPage;