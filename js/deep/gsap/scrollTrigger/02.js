gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	toggleActions: 'restart pause resume pause',
	toggleClass: 'active',
});

gsap.to('.orange p', {
	scrollTrigger: '.orange',
	duration: 2,
	rotation: 360,
});

gsap.to('.red', {
	scrollTrigger: {
		trigger: '.red',
		toggleActions: 'restart pause reverse pause',
	},
	duration: 1,
	//backgroundColor: '#FFA500',
	backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1)',
	ease: 'none',
});

gsap.to('.yoyo p', {
	scrollTrigger: '.yoyo',
	scale: 2,
	repeat: -1,
	yoyo: true,
	ease: 'power2',
});
