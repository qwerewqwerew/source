const wrap = document.querySelector('main');
const section = document.querySelectorAll('section');
let sections = gsap.utils.toArray('section');
wrap.style.width = 100 * sections.length + '%';
console.log(window.innerHeight);
section.forEach((el) => (el.style.height = window.innerHeight+"px"));

gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: 'main',
		pin: true,
		scrub: 1,
		end: () => `+=${wrap.offsetWidth * (sections.length - 1)}`,
	},
});
