//01. 이질감 표현하기
const fn1 = () => {
	gsap.to('.desc', {
		yPercent: -100,
		ease: 'none',
		duration: 0.5,
		scrollTrigger: {
			trigger: '.desc',
			start: 'top bottom',
			end: 'bottom top',
			markers: true,
			scrub: true,
		},
	});
};

//02. 여러개 이질감 표현하기
const fn = () => {
	gsap.utils.toArray('.desc').forEach((item) => {
		gsap.to(item, {
			yPercent: -200,
			ease: 'none',
			duration: 0.5,
			scrollTrigger: {
				trigger: item,
				start: 'top bottom',
				end: 'bottom top',
				markers: false,
				scrub: 0.5,
			},
		});
	});
};
fn();

//03. 나타나기
const hide = (item) => {
	gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
	let x = 0;
	let y = 0;
	let delay = item.dataset.delay;

	if (item.classList.contains('ltr')) {
		(x = -100), (y = 0);
	} else if (item.classList.contains('btt')) {
		(x = 0), (y = 100);
	} else if (item.classList.contains('ttb')) {
		(x = 0), (y = -100);
	} else {
		(x = 100), (y = 0);
	}

	gsap.fromTo(item, { autoAlpha: 0, x: x, y: y }, { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: 'auto', ease: 'expo' });
};

gsap.utils.toArray('.reveal').forEach((item) => {
	hide(item);
	ScrollTrigger.create({
		trigger: item,
		start: 'top bottom',
		end: 'bottom top',
		markers: false,
		onEnter: () => {
			animate(item);
		},
	});
});
