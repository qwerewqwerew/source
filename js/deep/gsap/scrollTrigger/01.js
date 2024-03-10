gsap.registerPlugin(ScrollTrigger);
gsap.to('.box', {
	scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
	x: '50vw',
});
