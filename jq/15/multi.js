const slideWrapper = $('.slide_wrapper');
const slides = slideWrapper.find('.slides');
const slide = slides.find('li');
const slideCount = slide.length;
const slideWidth = slide.width(); //li 각각 너비
const slideGap = 30;
const prevBtn = slideWrapper.find('.prev');
const nextBtn = slideWrapper.find('.next');
let currentIdx = 0;
let moveAmt; //slideWidth+slideGap 움직일 너비
let newSlides;
const maxSlides = 3;
let responsiveGap = 20;
let responseSlideWidth; //윈도우 리사이징 시 재계산될 슬라이드 너비변수

const pager = $('.pager');
let pagerHTML = '';
slide.each(function (i) {
	pagerHTML += '<a href="#">' + (i + 1) + '</a>';
});
pager.html(pagerHTML);
pager.find('a').click(function (e) {
	e.preventDefault();
	let i = $(this).index();
	moveSlideCb(i);
});

responseSlideWidth = slideWidth;

//복사본생성
cloneSlide();
function cloneSlide() {
	slides.append(slide.clone().addClass('clone'));
	slides.prepend(slide.clone().addClass('clone'));
}

//가로배치
function slideLayout(sw, sm) {
	newSlides = $('.slide_wrapper li');
	moveAmt = sw + sm;
	newSlides.each(function (idx) {
		$(this).css({ left: moveAmt * idx + 'px', width: sw + 'px' });
	});

}
slideLayout(slideWidth, slideGap);

function setSlidePos() {
	const ulMoveAmt = -moveAmt * slideCount;
	slides.css({ transform: `translateX(${ulMoveAmt}px)` });
}
setSlidePos()
//이동함수
function moveSlide() {
	currentIdx++;
	if (currentIdx > slideCount) {
		slides.css('left', 0);
		currentIdx = 0;
	}
	console.log(currentIdx);
	console.log(moveAmt);
	slides.stop().animate({ left: moveAmt * -currentIdx }, 500);
}

setInterval(() => {
	//moveSlide();
}, 650);

function moveSlideCb(n) {
	slides.stop().animate({ left: moveAmt * -n }, 500, function () {
		if (currentIdx > slideCount) {
			slides.css('left', 0);
			currentIdx = 0;
		}
	});
	currentIdx = n;
}

let timer = undefined;

function autoSlide() {
	timer = setInterval(() => {
		//moveSlideCb(currentIdx + 1);
		//console.log(currentIdx);
	}, 650);
}
function stopSlide() {
	clearInterval(timer);
	timer = undefined;
}
slideWrapper.on({
	mouseenter: function () {
		stopSlide();
	},
	mouseleave: function () {
		autoSlide();
	},
});

nextBtn.on('click', function () {
	moveSlideCb(currentIdx + 1);
});
prevBtn.on('click', function () {
	moveSlideCb(currentIdx - 1);
});
function responsiveSlide(params) {
	//반응형슬라이드
	$(window).resize(function () {
		let winWidth = $(this).width();
		if (winWidth < 900) {
			console.log(slides.width(), responseSlideWidth);
			responsiveGap = 20;
			responseSlideWidth = (slides.width() - responsiveGap * (maxSlides - 1)) / maxSlides;
		} else {
			responseSlideWidth = slideWidth;
			responsiveGap = slideGap;
		}
		if (winWidth <= 500) {
			responseSlideWidth = slides.width();
			responsiveGap = 0;
		}
		slideLayout(responseSlideWidth, responsiveGap);
		setSlidePos();
	});
}
responsiveSlide()