const atSymbol = document.querySelector('.at-symbol');
const text = document.querySelector('.text');
const container = document.querySelector('.container');

// Add click event listener to the @ symbol
atSymbol.addEventListener('click', function() {
    // Remove any existing classes
    atSymbol.classList.remove('active');
    text.classList.remove('glow');
    
    // Force reflow to restart animation
    void atSymbol.offsetWidth;
    
    // Add active classes
    atSymbol.classList.add('active');
    text.classList.add('glow');
    
    // Create particle effects
    createParticles();
    
    // Remove active class after animation completes
    setTimeout(() => {
        atSymbol.classList.remove('active');
        text.classList.remove('glow');
    }, 1500);
});

// Create particle effect around the @ symbol
function createParticles() {
    const rect = atSymbol.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random direction and distance
        const angle = (i * 30) + Math.random() * 30; // Distribute evenly in circle
        const distance = 100 + Math.random() * 100;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;
        
        // Set custom properties for animation
        particle.style.setProperty('--particle-x', x + 'px');
        particle.style.setProperty('--particle-y', y + 'px');
        
        // Position particle at the @ symbol center
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.position = 'fixed';
        particle.style.zIndex = '1000';
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
}

// Add some random sparkle effects on page load
function addSparkles() {
    setInterval(() => {
        if (!atSymbol.classList.contains('active')) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'absolute';
            sparkle.style.width = '2px';
            sparkle.style.height = '2px';
            sparkle.style.background = '#ffd93d';
            sparkle.style.borderRadius = '50%';
            sparkle.style.opacity = '0';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animation = 'sparkle 2s ease-out forwards';
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }
    }, 3000);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(style);

// Initialize sparkles
addSparkles();

// Add hover sound effect simulation with visual feedback
atSymbol.addEventListener('mouseenter', function() {
    if (!this.classList.contains('active')) {
        this.style.transform = 'scale(1.1)';
    }
});

atSymbol.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
        this.style.transform = 'scale(1)';
    }
});