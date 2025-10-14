
/* Main navigation */
let panelsSection = document.querySelector('#panels'),
	panelsContainer = document.querySelector('#horizontal'),
	tween;
document.querySelectorAll('.anchor').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute('href')),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false,
			},
			duration: 1,
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray('#horizontal .panel');
tween = gsap.to(panels, {
	// xPercent: -100 * ( panels.length - 1 ),
	x: () => -1 * (panelsContainer.scrollWidth - innerWidth),
	ease: 'none',
	scrollTrigger: {
		trigger: '#horizontal',
		pin: true,
		start: 'top top',
		scrub: 1,
		// snap: {
		// 	snapTo: 1 / (panels.length - 1),
		// 	inertia: false,
		// 	duration: {min: 0.1, max: 0.1}
		// },
		end: () => '+=' + (panelsContainer.scrollWidth - innerWidth),
	},
});
