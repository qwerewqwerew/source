const sections = document.querySelectorAll('section');
sections.forEach((el, i) => {
	el.innerHTML += `<h2>section${i + 1}</h2>`;
});

// frameIn
const pc = document.querySelector('.sec3 .pc');
const mask = pc.querySelector('.mask');
const screen = pc.querySelector('.screen');
const mobile = document.querySelector('.sec3 .mobile');
const mask2 = mobile.querySelector('.mask');
const screen2 = mobile.querySelector('.screen');

const animateMask = (mask, screen) => {
	let newH1 = mask.clientHeight;
	let newH2 = screen.clientHeight;
	let height = newH1 - newH2;
	screen.style.transition = 'transform 0.5s';
	screen.style.transform = `translateY(${height}px)`;
};
const animateMaskDown = (mask, screen) => {
	let newH1 = mask.clientHeight;
	let newH2 = screen.clientHeight;
	let height = newH1 - newH2;
	screen.style.transition = 'transform 0.5s';
	screen.style.transform = `translateY(0px)`;
};

// 마우스가 올라갔을 때의 이벤트 리스너를 정의
mask.addEventListener('mouseenter', () => animateMask(mask, screen));
mask2.addEventListener('mouseenter', () => animateMask(mask2, screen2));
mask.addEventListener('mouseleave', () => animateMaskDown(mask, screen));
mask2.addEventListener('mouseleave', () => animateMaskDown(mask2, screen2));
