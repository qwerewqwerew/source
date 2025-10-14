const horizontal = document.querySelector('.horizontal_wrap');
const section = gsap.utils.toArray('.horizontal_wrap > section');

gsap.to(section, {
	x: -(document.querySelector('.horizontal_wrap').offsetWidth - window.innerWidth),
	ease: 'none',
	scrollTrigger: {
		trigger: horizontal,
		start: 'top top',
		end: () => '+=' + (horizontal.offsetWidth - innerWidth),
		pin: true,
		scrub: 1,
		invalidateOnRefresh: true,
		anticipatePin: 1,
	},
});
