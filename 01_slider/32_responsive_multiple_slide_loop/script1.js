const slideWrapper = $('.slide_wrapper');
const slides = slideWrapper.find('.slides');
const slide = slides.find('li');
const slideCount = slide.length;
const slideWidth = slide.width(); //li 각각 너비
const slideGap = 30;
let currentIdx = 0;
let moveAmt; //slideWidth+slideGap 움직일 너비
const maxSlides = 3;
const responsiveGap = 20;
let newSlides; //clone 된 요소를 담을 변수
let newSlideWidth; //윈도우 리사이징 시 재계산될 슬라이드 너비변수
const prevBtn = slideWrapper.find('.prev');
const nextBtn = slideWrapper.find('.next');
const indicator = $('.pager');
let indicatorHTML = '';

/**
 * indicator 추가
 */
slide.each(function (i) {
	indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
});
indicator.html(indicatorHTML);

newSlideWidth = slideWidth;

//복사본생성
slides.append(slide.clone().addClass('clone'));
slides.prepend(slide.clone().addClass('clone'));

//가로배치
function slideLayout(sw, sm) {
	newSlides = $('.slide_wrapper li');
	moveAmt = sw + sm;

	newSlides.each(function (idx) {
		$(this).css({ left: moveAmt * idx + 'px', width: sw + 'px' });
	});
}
slideLayout(slideWidth, slideGap);
console.log(moveAmt);
//중앙배치
function setSlidePos() {
	let ulMoveAmt = -moveAmt * slideCount + 'px';
	slides.css('transform', 'translateX(' + ulMoveAmt + ')');
}
setSlidePos();
//좌우버튼
nextBtn.click(function () {
	MoveSlide(currentIdx + 1);
});
prevBtn.click(function () {
	MoveSlide(currentIdx - 1);
});
//슬라이드 이동함수
function MoveSlide(num) {
	console.log('moveAmt', moveAmt);
	slides.stop().animate({ left: moveAmt * -num }, 500, function () {
		if (currentIdx == slideCount || currentIdx == -slideCount) {
			console.log(currentIdx == slideCount);
			slides.css('left', 0);
			currentIdx = 0;
		}
	});
	//currentIdx = num;
	console.log(currentIdx, slideCount);
}
//인디케이터
indicator.find('a').click(function (e) {
	e.preventDefault();
	let ci = $(this).index();
	MoveSlide(ci);
});

//자동슬라이드
let timer = undefined;
function autoSlide() {
	if (timer == undefined) {
		timer = setInterval(function () {
			MoveSlide(currentIdx + 1);
		}, 3000);
	}
}
autoSlide();
function stopSlide() {
	clearInterval(timer);
	timer = undefined;
}
slideWrapper.mouseenter(function () {
	stopSlide();
});
slideWrapper.mouseleave(function () {
	autoSlide();
});
function responsiveSlide(params) {
	//반응형슬라이드
	$(window).resize(function () {
		let winWidth = $(this).width();
		if (winWidth < 900) {
			console.log(slides.width(), newSlideWidth);
			responsiveGap = 20;
			newSlideWidth = (slides.width() - responsiveGap * (maxSlides - 1)) / maxSlides;
		} else {
			newSlideWidth = slideWidth;
			responsiveGap = slideGap;
		}
		if (winWidth <= 500) {
			newSlideWidth = slides.width();
			responsiveGap = 0;
		}
		slideLayout(newSlideWidth, responsiveGap);
		setSlidePos();
	});
}
