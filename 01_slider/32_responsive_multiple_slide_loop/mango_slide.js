/* .fn으로 기능확장 옵션을 지정하면 옵션으로 전달받은 값이 적용되고 안넣으면 디폴트 */
$.fn.mangoSlide=function (options) {
    var defaults = {
        slideWidth: 200,
        slideMargin: 30,
        maxSlides: 3,
        responsiveMargin: 20
    };

    var options = $.extend({}, defaults, options);
    console.log(options);
    var slideWrapper = $(this),
        slides = slideWrapper.find(".slides"),
        slide = slides.find("li"),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = options.slideWidth,
        slideMargin = options.slideMargin,
        moveAmt,
        maxSlides = options.maxSlides,
        responsiveMargin = 20,
        newSlides,
        newSlideWidth,
        prevBtn = slideWrapper.find(".prev"),
        nextBtn = slideWrapper.find(".next");
        newSlideWidth = slideWidth;
        slideWrapper.width((slideWidth + slideMargin) * slideCount - (slideWidth + slideMargin) * maxSlides);

    //복사본 생성하기 뒤에 5개추가
    slides.append(slide.clone().addClass("clone"));

    //복사본 생성하기 앞에 5개추가
    slides.prepend(slide.clone().addClass("clone"));

    //가로배열하기
    function slideLayout(sw, sm) {
        newSlides = $(".slide_wrapper li");
        moveAmt = sw + sm;

        newSlides.each(function (idx) {
            $(this).css({ left: moveAmt * idx + "px", width: sw + "px" });
        });
    }
    slideLayout(slideWidth, slideMargin);

    // 중앙배치하기
    function setSlidePos() {
        var ulMoveAmt = -moveAmt * slideCount + "px";
        slides.css({ transform: "translateX(" + ulMoveAmt + ")" });
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
        slides.stop().animate({ left: moveAmt * -num + "px" }, 500, function () {
            if (currentIdx == slideCount || currentIdx == -slideCount) {
                slides.css({ left: "0px" });
                currentIdx = 0;
            }
        });
        currentIdx = num;
        console.log(currentIdx, slideCount);
    }

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
}
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
