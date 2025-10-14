const horizontal = document.querySelector('.horizontal');
const sections = gsap.utils.toArray('.horizontal > section');

gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: horizontal,
		start: 'top top',
		end: () => '+=' + (horizontal.offsetWidth - innerWidth),
		pin: true,
		scrub: 1,
		snap: {
			snapTo: 1 / (sections.length - 1),
			inertia: false,
			duration: { min: 0.1, max: 0.1 },
		},
		invalidateOnRefresh: true,
		anticipatePin: 1, //핀 효과를 조금 더 자연스럽게 연출하기 위한 속성
	},
});
