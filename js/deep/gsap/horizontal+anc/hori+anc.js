const main = document.querySelector('main');
const sections = gsap.utils.toArray('section');
const ancs = gsap.utils.toArray('.anchor');
let tween;

ancs.forEach((el) => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let tg = document.querySelector(e.target.getAttribute('href'));
		let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
			totalMovement = (sections.length - 1) * main.offsetWidth;
		let y = Math.round(tween.scrollTrigger.start + (tg.offsetLeft / totalMovement) * totalScroll);
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false,
			},
			duration: 1,
		});
	});
});
console.log(main.scrollWidth, innerWidth);
tween = gsap.to(sections, {
	x: () => -1 * (main.scrollWidth - innerWidth),
	ease: 'none',
	scrollTrigger: {
		trigger: main,
		pin: true,
		start: 'top top',
		scrub: 1,
		end: () => '+=' + (main.scrollWidth - innerWidth),
	},
});
