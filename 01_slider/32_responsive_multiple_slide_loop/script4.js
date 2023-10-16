var slideWrapper = $(".slide_wrapper"),
	slides = slideWrapper.find(".slides"),
	slide = slides.find("li"),
	currentIdx = 0,
	slideCount = slide.length,
	slideWidth = 200,
	slideMargin = 30,
	moveAmt,
	maxSlides = 3,
	responsiveMargin = 20,
	newSlides,
	newSlideWidth,
	prevBtn = slideWrapper.find(".prev"),
	nextBtn = slideWrapper.find(".next");
var indicator = slideWrapper.find('.pager'), indicatorHTML='';
slide.each(function(i){
	indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
})
indicator.html(indicatorHTML);

newSlideWidth = slideWidth;

//복사본 생성하기 뒤에 5개추가
slides.append(slide.clone().addClass("clone"));

//복사본 생성하기 앞에 5개추가
slides.prepend(slide.clone().addClass("clone"));

//가로배열하기
function slideLayout(sw, sm) {
	newSlides = $(".slide_wrapper li");
	moveAmt = sw + sm;

	newSlides.each(function (idx) {
		$(this).css({left: moveAmt * idx + "px", width: sw + "px"});
	});
}
slideLayout(slideWidth, slideMargin);

// 중앙배치하기
function setSlidePos() {
	var ulMoveAmt = -moveAmt * slideCount + "px";
	slides.css({transform: "translateX(" + ulMoveAmt + ")"});
	console.log(moveAmt,ulMoveAmt);
}
setSlidePos();

//좌우 버튼 슬라이드 작동하기
nextBtn.click(function () {
	moveSlide(currentIdx + 1);
});
prevBtn.click(function () {
	moveSlide(currentIdx - 1);
});

// 슬라이드 이동 함수
function moveSlide(num) {
	slides.stop().animate({left: moveAmt * -num + "px"}, 500, function () {
		if (currentIdx == slideCount || currentIdx == -slideCount) {
			slides.css({left: "0px"});
			currentIdx = 0;
		}
	});
	currentIdx = num;
}
indicator.find('a').click(function(){
	var ci = $(this).index();
	console.log(ci);
	moveSlide(ci);
});//인디케이터 클릭으로 이동하기

//자동슬라이드
var timer = undefined;

function autoSlide() {
	if (timer == undefined) {
		timer = setInterval(function () {
			moveSlide(currentIdx + 1);
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





//반응형 슬라이드
$(window).resize(function () {
	console.log($(this).width());

	if ($(this).width() < 700) {
		responsiveMargin = 20;
		newSlideWidth = (slides.width() - responsiveMargin * (maxSlides - 1)) / maxSlides;
	} else {
		newSlideWidth = slideWidth;
		responsiveMargin = slideMargin;
	}
	if ($(this).width() <= 500) {
		newSlideWidth = slides.width();
		responsiveMargin = 0;
	}
	slideLayout(newSlideWidth, responsiveMargin);
	setSlidePos();







});
