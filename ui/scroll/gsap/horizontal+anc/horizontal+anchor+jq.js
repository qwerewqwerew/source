

let slidesContainer = document.querySelector('#scSlideWrapper'),
	tween;

const slides = gsap.utils.toArray('#scSlideWrapper .sc-slide-section');
tween = gsap.to(slides, {
	x: () => -1 * (slidesContainer.scrollWidth - innerWidth),
	ease: 'none',
	scrollTrigger: {
		trigger: '#scSlideWrapper',
		pin: true,
		start: 'top top',
		scrub: 1,
		end: () => '+=' + (slidesContainer.scrollWidth - innerWidth),
	},
});

document.querySelectorAll('.sc-slide-nav').forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		scrollToTarget(e.target.getAttribute('href'));
	});
});

function scrollToTarget(href) {
	console.log(href);
	let targetEle = document.querySelector(href),
		y = targetEle;
	if (targetEle && slidesContainer.isSameNode(targetEle.parentElement)) {
		let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
			totalMovement = slidesContainer.scrollWidth - innerWidth;
		y = Math.round(tween.scrollTrigger.start + (targetEle.offsetLeft / totalMovement) * totalScroll);
	}
	gsap.to(window, {
		scrollTo: {
			y: y,
			autoKill: false,
		},
		duration: 0.2,
	});
}
