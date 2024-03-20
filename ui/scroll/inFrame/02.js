const sections = document.querySelectorAll('section');
sections.forEach((el, i) => {
	el.innerHTML += `<h2>section${i + 1}</h2>`;
});

/* ==========
    frameIn
========== */

const frame = document.querySelector('.sec3');
const mask = frame.querySelector('.mask');
const left = frame.querySelector('.left');
const screen = frame.querySelector('.screen');
let up = false;
//scrollDiff
const scrollDiffFn = () => {
	let height = mask.clientHeight - screen.clientHeight;
	if (!up) {
		gsap.to(screen, { y: height, duration: 0.5 });
		up = true;
	} else {
		gsap.to(screen, { y: 0, duration: 0.5 });
		up = false;
	}
};

ScrollTrigger.create({
	trigger: frame,
	start: 'top bottom',
	end: 'bottom top',
	markers: true,
	scrub: 0.5,
	onEnter: () => {
		mask.addEventListener('mouseenter', scrollDiffFn);
		mask.addEventListener('mouseleave', scrollDiffFn);
    gsap.fromTo(left, { xPercent: -100 }, { xPercent: 0, duration: 1 });
	},
});
