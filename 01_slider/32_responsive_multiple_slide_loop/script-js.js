let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    moveAmt = slideWidth + slideMargin,
    maxSlides = 3,
    responsiveMargin = 20,
    newslide,
    newslideWidth,
    prevBtn = document.querySelector('.controls .prev'),
    nextBtn = document.querySelector('.controls .next');

    newslideWidth = slideWidth;


    //복사본 생성하기
    for(let i = 0;i<maxSlides;i++){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount -1; i>=0 ; i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }

    //가로배열하기
    function slideLayout(sw, sm){
        newslide = document.querySelectorAll('.slides li');
        moveAmt = sw + sm;
        newslide.forEach(function(item,index){
            item.style.left = moveAmt*index +'px';
            item.style.width = sw +'px';
        });
    }
    slideLayout(slideWidth, slideMargin);

    //중앙 배치하기  transform translateX(???)
    function setSlide(){
        let ulMoveAmt = -slideCount * moveAmt + 'px';
        slides.style.transform = 'translateX(' + ulMoveAmt +')';
        slides.classList.add('animated');
    }
    setSlide();

   //좌우 버튼으로 이동하기
    nextBtn.addEventListener('click', function(){
        moveSlide(currentIdx + 1);
    });
    prevBtn.addEventListener('click', function(){
        moveSlide(currentIdx - 1);
    });

    //moveSlide 함수
    function moveSlide(num){
        slides.style.left = moveAmt * -num + 'px';
        currentIdx = num;
        console.log(currentIdx, slideCount);

        if(currentIdx == slideCount || currentIdx == -slideCount){
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            },500);

            setTimeout(function(){
                slides.classList.add('animated');
            },600);
        }

    }

    //자동슬라이드
    let timer = undefined;
    let slideWrapper = document.querySelector('.slide_wrapper');

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

    slideWrapper.addEventListener('mouseenter', function(){
        stopSlide();
    });

    slideWrapper.addEventListener('mouseleave', function(){
        autoSlide();
    });

    //반응형 슬라이드
    window.addEventListener('resize',function(){
        let currentWidth = document.querySelector('body').offsetWidth;

        if(currentWidth < 700){
            let slidesWidth = slides.offsetWidth;
            newslideWidth = (slidesWidth - (responsiveMargin * maxSlides -1))/3;
            responsiveMargin = 20;
        }else{
            newslideWidth = slideWidth;
            responsiveMargin = slideMargin;
        }
        if(currentWidth <= 500){
            newslideWidth = slides.offsetWidth;
            responsiveMargin = 0;
        }
        slideLayout(newslideWidth, responsiveMargin);
        setSlide();
        console.log(newslideWidth);

    });