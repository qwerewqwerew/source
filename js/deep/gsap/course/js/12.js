let sections = gsap.utils.toArray('section');

const move = gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: 'main',
		pin: true,
		scrub: 1,
		snap: 1 / (sections.length - 1),
		end: '+=7000',
		//end: document.querySelector('main').offsetWidth,
	},
});

if (ScrollTrigger.isTouch > 0) {
	move;
}
/* https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.isTouch */