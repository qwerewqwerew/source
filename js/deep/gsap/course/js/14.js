const fix = document.querySelector('.fix');
const sections = gsap.utils.toArray('.fix > section');

let scrollTween = gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: fix,
		start: 'top top',
		end: () => '+=' + (fix.offsetWidth - innerWidth),
		pin: true,
		anticipatePin: 1,
		scrub: 1,
		invalidateOnRefresh: true,
	},
});

gsap.to('.img4', {
	y: -200,
	duration: 2,
	ease: 'elastic',
	scrollTrigger: {
		trigger: '.img4',
		containerAnimation: scrollTween,
		start: 'left center',
		toggleActions: 'play none reverse none',
		markers: false,
		id: 'img4',
	},
});

gsap.to('.img5', {
	rotation: 720,
	duration: 2,
	ease: 'elastic',
	scrollTrigger: {
		trigger: '.img5',
		containerAnimation: scrollTween,
		start: 'left center',
		toggleActions: 'play none reverse none',
		markers: false,
		id: 'img5',
	},
});

gsap.to('.img6', {
	scale: 0.3,
	duration: 2,
	ease: 'elastic',
	scrollTrigger: {
		trigger: '.img6',
		containerAnimation: scrollTween,
		start: 'left center',
		toggleActions: 'play none reverse none',
		markers: false,
		id: 'img6',
	},
});
