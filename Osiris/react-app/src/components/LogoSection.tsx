const LogoSection = ({ onClick }: { onClick: () => void }) => (
  <div className="logo-section">
    <div className="main-logo" onClick={onClick}>
      <img src="/img/logo osiris.png" alt="Osiris" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  </div>
);

export default LogoSection;
