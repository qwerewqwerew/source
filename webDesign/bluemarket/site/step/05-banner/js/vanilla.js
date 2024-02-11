const depth1 = document.querySelector('.depth1');
depth1.addEventListener('mouseover', function () {
	depth1.querySelectorAll('.depth2').forEach((el) => {
		el.style.display = 'block';
	});
	document.querySelector('header').classList.add('on');
});
depth1.addEventListener('mouseout', function () {
	depth1.querySelectorAll('.depth2').forEach((el) => {
		el.style.display = 'none';
	});
	document.querySelector('header').classList.remove('on');
});
// slide
const slides = document.querySelectorAll('.slide_wrap li');
let idx = 0;

function slide() {
	// 현재 슬라이드에서 'on' 클래스 제거
	slides.forEach((slide) => slide.classList.remove('on'));

	// 새로운 슬라이드에 'on' 클래스 추가
	slides[idx].classList.add('on');

	// 인덱스를 증가시키고, 필요한 경우 다시 0으로 설정
	idx++;
	if (idx >= slides.length) {
		idx = 0;
	}
}

setInterval(() => {
	slide();
}, 5000);

// 초기 활성 슬라이드 설정
slides[idx].classList.add('on');
