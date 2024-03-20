const sections = document.querySelectorAll('section');
sections.forEach((el, i) => {
	el.innerHTML += `<h2>section${i + 1}</h2>`;
});

/* ==========
    frameIn
========== */
const frame = document.querySelector('.sec3');
const mask = frame.querySelector('.mask');
const screen = frame.querySelector('.screen');
let up = false;
//scrollDiff
const scrollDiffFn = () => {
	let height = mask.clientHeight - screen.clientHeight;
	if (!up) {
		screen.animate([{ transform: 'translateY(0px)' }, { transform: `translateY(${height}px)` }], {
			duration: 500, // 애니메이션 지속 시간 설정
			fill: 'forwards', // 애니메이션 완료 후 상태 유지
		});
		up = true;
	} else {
		screen.animate([{ transform: `translateY(${height}px)` }, { transform: 'translateY(0px)' }], {
			duration: 500, // 애니메이션 지속 시간 설정
			fill: 'forwards', // 애니메이션 완료 후 상태 유지
		});
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
	},
});
