const visual = document.querySelectorAll('#brandVisual>ul>li'); // 슬라이드 이미지
const button = document.querySelectorAll('#buttonList>li'); // 버튼
const leftBtn = document.querySelector('.btnImg .prev');
const rightBtn = document.querySelector('.btnImg .next');
let current = 0; // 현재 보이는 이미지
let setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함
let isMove = false;

// timer를 바로 시작하지 않고, 약간의 지연 시간을 줍니다.
setTimeout(timer, 1000);

function timer() {
	setIntervalId = setInterval(() => {
		if (isMove) {
			return;
		}
		isMove = true;
		let prev = visual[current];
		let pv = button[current];
		move(prev, 0, '-100%');
		pv.classList.remove('on');
		current++;
		if (current > visual.length - 1) current = 0;
		let next = visual[current];
		let pn = button[current];
		move(next, '100%', 0);
		pn.classList.add('on');
	}, 3000);
}

function move(tg, start, end) {
	let keyframes = [{ left: start }, { left: end }];
	let options = { duration: 1000, fill: 'forwards' };
	let animation = tg.animate(keyframes, options);
	animation.onfinish = () => {
		isMove = false; // 애니메이션이 끝나면 isMove를 false로 설정
	};
}

/* none: 애니메이션은 시작 전과 끝난 후에 영향을 미치지 않습니다. 이것이 기본값입니다.
forwards: 애니메이션의 끝 상태가 유지됩니다. 즉, 애니메이션의 마지막 키 프레임에서 지정한 스타일이 애니메이션 후에도 계속 적용됩니다.
backwards: 애니메이션이 시작되기 전에, 애니메이션의 첫 번째 키 프레임에서 지정한 스타일이 적용됩니다.
both: forwards와 backwards를 모두 적용합니다. 이는 애니메이션 시작 전과 끝난 후에 애니메이션의 스타일이 계속 적용되도록 합니다. */

document.querySelector('#wrap').addEventListener('mouseover', function () {
	clearInterval(setIntervalId);
});
document.querySelector('#wrap').addEventListener('mouseout', function () {
	timer();
});
button.forEach((o, i) => {
	o.addEventListener('click', function () {
		for (el of button) {
			el.classList.remove('on');
		}
		this.classList.add('on');
		pagerMove(i);
	});
});
function pagerMove(i) {
	console.log(i);
	if (current == i) return; // 현재 보이는 이미지가 i랑 같으면 종료

	let currentEl = visual[current];
	let nextEl = visual[i];

	current = i;

	let prevKey = [{ left: 0 }, { left: '-100%' }];
	let prevOpt = { duration: 1000, fill: 'forwards' };
	currentEl.animate(prevKey, prevOpt);

	let nextKey = [{ left: '100%' }, { left: '0%' }];
	let nextOpt = { duration: 1000, fill: 'forwards' };
	nextEl.animate(nextKey, nextOpt);
}
rightBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let prev = visual[current];
	let pv = button[current];
	move(prev, 0, '-100%');
	pv.classList.remove('on');
	current++;
	if (current > visual.length - 1) current = 0;
	let next = visual[current];
	let pn = button[current];
	move(next, '100%', 0);
	pn.classList.add('on');
});

leftBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let prev = visual[current];
	let pv = button[current];
	move(prev, 0, '-100%');
	pv.classList.remove('on');
	current--;
	if (current < 0) current = visual.length - 1; // 수정된 부분
	let next = visual[current];
	let pn = button[current];
	move(next, '100%', 0);
	pn.classList.add('on');
});
