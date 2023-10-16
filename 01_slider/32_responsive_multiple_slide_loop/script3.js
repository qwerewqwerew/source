var slideWrapper = $('.slide_wrapper'),
    slides = slideWrapper.find('.slides'),
    slide = slides.find('li'),
    currentIdx = 0,
    slideCount  = slide.length,
    slideHeight = 200,
    slideMargin = 0,
    moveAmt,
    newSlides,
    newSlideHeight,
    prevBtn = slideWrapper.find('.prev'),
    nextBtn = slideWrapper.find('.next');

newSlideHeight = slideHeight;

//복사본 생성하기 뒤에 5개추가
slides.append(slide.clone().addClass('clone'));

//복사본 생성하기 앞에 5개추가
slides.prepend(slide.clone().addClass('clone'));

//가로배열하기
function slideLayout(sw,sm){
    newSlides = $('.slide_wrapper li');
    moveAmt = sw + sm;

    newSlides.each(function(idx){
        $(this).css({top:moveAmt*idx +'px', height:sw +'px'});
    });
}
slideLayout(slideHeight, slideMargin);

// 중앙배치하기
function setSlidePos(){
    var ulMoveAmt = -moveAmt * slideCount + 'px';
    slides.css({transform:'translateX('+ulMoveAmt+')'});
}
setSlidePos();

//좌우 버튼 슬라이드 작동하기
nextBtn.click(function(){
    nextSlide(currentIdx);
});
prevBtn.click(function(){
    moveSlide(currentIdx - 1);
});

// 슬라이드 이동 함수
function moveSlide(num){
     currentIdx = 0;    console.log(slide.length,currentIdx, num);

    slides.stop().animate({top:moveAmt * -num +'px'},500);
    currentIdx = num;

}
function nextSlide(num){
    num ++;
    console.log(currentIdx, num);
    if(currentIdx >=slide.length)currentIdx=0
    slides.stop().animate({top:moveAmt * -num +'px'},500);
    currentIdx = num;
    if(currentIdx>=slide.length)currentIdx=0

}

//자동슬라이드
var timer = undefined;

function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        }, 3000);
    }
}
autoSlide();

function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}
slideWrapper.mouseenter(function(){
    stopSlide();
});
slideWrapper.mouseleave(function(){
    autoSlide();
});
