const aniDuration = 3;
gsap.to('h2.title', { duration: aniDuration, opacity: 0.3 });
gsap.to('.box', { duration: aniDuration, delay: 3, x: 300, y: 100, ease: 'elastic.out(1, 0.3)', opacity: 1 });
gsap.to('.green', { duration: aniDuration, rotation: 360, scale: 0.5, repeat: -1, yoyo: true });
