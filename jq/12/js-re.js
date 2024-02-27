const visual = document.querySelectorAll('#brandVisual>ul>li');
const button = document.querySelectorAll('#buttonList>li');
const leftBtn = document.querySelector('.btnImg .prev');
const rightBtn = document.querySelector('.btnImg .next');
let current = 0;
let setIntervalId;
let isMove = false;

// 슬라이드 이동
function moveSlide(prevIndex, nextIndex) {
	if (isMove) return;
	isMove = true;
	move(visual[prevIndex], 0, '-100%');
	button[prevIndex].classList.remove('on');
	move(visual[nextIndex], '100%', 0);
	button[nextIndex].classList.add('on');
	current = nextIndex;
}

// 애니메이션
function move(tg, start, end) {
	let keyframes = [{ left: start }, { left: end }];
	let options = { duration: 1000, fill: 'forwards' };
	let animation = tg.animate(keyframes, options);
	animation.onfinish = () => {
		isMove = false;
	};
}

// 타이머
function timer() {
	setIntervalId = setInterval(() => {
		let nextIndex = (current + 1) % visual.length;
		moveSlide(current, nextIndex);
	}, 3000);
}

setTimeout(timer, 1000);

// 이벤트 리스너들
document.querySelector('#wrap').addEventListener('mouseover', () => clearInterval(setIntervalId));
document.querySelector('#wrap').addEventListener('mouseout', timer);

button.forEach((btn, i) => {
	btn.addEventListener('click', () => moveSlide(current, i));
});

rightBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let nextIndex = (current + 1) % visual.length;
	moveSlide(current, nextIndex);
});

leftBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let nextIndex = (current - 1 + visual.length) % visual.length;
	moveSlide(current, nextIndex);
});
