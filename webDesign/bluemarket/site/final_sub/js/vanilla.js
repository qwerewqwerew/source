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

/* tab */

const tabBtn = document.querySelectorAll('.board .buttons li');
const panels = document.querySelectorAll('.panels>div');

tabBtn.forEach((el, idx) => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let tg = idx;
		if (tg > 0) {
			tabBtn[0].classList.remove('on');
		} else {
			tabBtn[1].classList.remove('on');
		}
		tabBtn[tg].classList.add('on');
		panels.forEach((el) => (el.style.display = 'none'));
		panels[tg].style.display = 'block';
	});
});


// popup

document.querySelector('#panel1 .row.open').addEventListener('click',function(e){
	e.preventDefault();
	document.querySelector('.popup').style.display='block';
	document.querySelector('.overlay').classList.add('open');
})
document.querySelector('.close').addEventListener('click',function(e){
	e.preventDefault();

	document.querySelector('.popup').style.display='none';
	document.querySelector('.overlay').classList.remove('open');
})
