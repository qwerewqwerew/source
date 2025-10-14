const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.trigger-1',
		start: 'top top',
		endTrigger: '.trigger-3',
		end: 'top top',
		scrub: 3,
		markers: true,
	},
});

tl.to('.my-headline span', {
	y: '0%',
	ease: 'power2.out',
	stagger: 0.3,
});

tl.to(
	'.my-headline span',
	{
		y: '-100%',
		ease: 'power2.out',
		stagger: 0.3,
	},
	0.8
);
