let sections = gsap.utils.toArray('.section');

let scrollTween = gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: '.horizontal',
		pin: true,
		scrub: 1,
		snap: 1 / (sections.length - 1),
		end: () => '+=' + document.querySelector('.horizontal').offsetWidth,
	},
});
gsap.set('.box-1, .box-2 ', { y: 100 });
gsap.to('.box-1', {
	y: -130,
	duration: 2,
	ease: 'elastic',
	scrollTrigger: {
		trigger: '.box-1',
		containerAnimation: scrollTween,
		start: 'left center',
		toggleActions: 'play none none reset',
		id: '1',
	},
});
gsap.to('.box-2', {
	y: -120,
	rotate: 750,
	backgroundColor: '#1e90ff',
	ease: 'none',
	scrollTrigger: {
		trigger: '.box-2',
		containerAnimation: scrollTween,
		start: 'center 80%',
		end: 'center 20%',
		scrub: true,
		id: '2',
	},
});
ScrollTrigger.create({
	trigger: '.box-3',
	containerAnimation: scrollTween,
	toggleClass: 'active',
	start: 'center 60%',
	id: '3',
	markers:true,
});
