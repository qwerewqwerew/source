$(function () {

  //변수 선언
	var container = $('.slideshow'),
		slideGroup = container.find('.slideshow-slides'),
		slides = slideGroup.find('.slide'),
		nav = container.find('.slideshow-nav'),
		indicator = container.find('.slideshow-indicator'), 
		slideCount = slides.length,
		indicatorHTML ='',
		currentIndex = 0,
		duration = 500,
		easing = 'easeInOutExpo',
		interval = 3500,
		timer;
	slides.each(function(i){
		$(this).css({left:100 * i +'%'});
		indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
	});
	console.log(indicatorHTML);  
	
	indicator.html(indicatorHTML);
	//.html(내용)  내용을 html 형식으로 추가(교체)한다.
	//.text(내용)  내용을 text 형식으로 추가(교체)한다.
	
	//goToSlide()  슬라이드를 이전, 다음 이동하는 함수, 인디케이터.. 	
	//updateNav() 클릭하면 슬라이드를 이동, 처음,끝을 구분하여 버튼을 표시..
	//startTimer() 타이머 시작(마우스가 슬라이드를 벗어났을때)
	//stopTimer() 타이머 종료(마우스가 슬라이드 위에 있을때)	
	
	function goToSlide(index){
		slideGroup.animate({left: -100 * index +'%'},duration,easing);
		currentIndex = index;
		updateNav();
	}
	function updateNav(){
		var navPrev = nav.find('.prev'),
			navNext = nav.find('.next');
			
			if(currentIndex == 0){
				navPrev.addClass('disabled');
			}else{
				navPrev.removeClass('disabled');
			}
			
			if(currentIndex == slideCount - 1){
				navNext.addClass('disabled');
			}else{
				navNext.removeClass('disabled');
			}	
		indicator.find('a').removeClass('active')
		.eq(currentIndex).addClass('active');
			
	} //updateNav()
	
	nav.find('a').click(function(e){
		e.preventDefault();
		if($(this).hasClass('prev')){
			goToSlide(currentIndex - 1);
		} else {
			goToSlide(currentIndex + 1);
		}
	});// 좌우 버튼으로 슬라이드 이동하기
	// .index()  이벤트가 일어난 요소의 순번(인덱스)번호를 반환한다.
	
	indicator.find('a').click(function(){
		var ci = $(this).index();
		console.log(ci);
		goToSlide(ci);
	});//인디케이터 클릭으로 이동하기
	

	//mouseover, mouseout,   mouseenter, mouseleave
	container.on({
		mouseenter:stopTimer,
		mouseleave:startTimer
	});
	/*
	container.mouseenter(function(){
		stopTimer();
	})
	.mouseleave(function(){
		startTimer();
	});
	*/
	function startTimer(){
		timer = setInterval(
		function(){
			var nextIndex = (currentIndex + 1) % slideCount;
			goToSlide(nextIndex);
		}		
		, interval);
	}	
	function stopTimer(){
		clearInterval(timer);
	}
	
	goToSlide(currentIndex);
	startTimer();
		
	
});










