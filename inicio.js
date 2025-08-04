document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        enterSite();
    }
});

window.addEventListener('load', function() {
    createParticles();
    
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 2000);
});

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const energyOrbs = document.querySelectorAll('.energy-orb');
    energyOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseX * speed;
        const y = mouseY * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

const link = document.createElement('link');
link.rel = 'prefetch';
link.href = 'main.html'; 
document.head.appendChild(link);