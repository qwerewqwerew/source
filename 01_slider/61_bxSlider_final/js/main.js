$(function(){
	
	/* ---------- 기본 사용 ---------- */

      $('.basic_slider').bxSlider({
		  mode: 'horizontal',
		  speed: 5000
	  });


	/* ---------- 좌우 컨트롤 ---------- */

/* 	$('.control_slider').bxSlider({
		controls:false
		nextText : '<i class="fas fa-chevron-right"></i>',
		prevText : '<i class="fas fa-chevron-left"></i>',
		pager:false
	});
 */
	$('.img_control_slider').bxSlider({
		//controls:false,
		pager:false,
		prevSelector:'.img_controls .imgcontrols .prev',
		nextSelector:'.img_controls .imgcontrols .next'
	});

	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple_slider').bxSlider({
		minSlides:1,
		maxSlides:4,
		moveSlides : 1,
		slideWidth:200,
		slideMargin:30,
		pager:false
	});


	/* ---------- 현재 슬라이드 구분하기 ---------- */

	$('.active_slider').bxSlider({
		onSliderLoad:function(currentIndex){	//
			console.log(currentIndex)	//0 번
			//요소를 확인해보면 화면에 보이는 li는 인덱스 번호가 1번인 요소임 그래서 currentIndex+1을해서 보이고 있는 요소를 선택함
			$('.active_slider li').eq(currentIndex + 1).addClass('active');
		},
		onSlideAfter:function($slideElement){
			$slideElement.addClass('active').siblings().removeClass('active');
		},
	/* 	auto :true,
		autoHover :true,
		autoControls : true,
		pause : 2000 */
	});



	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */
	var manualSlide = $('.manual_control_slider').bxSlider({
		pager:false,
		controls:false
	});

	$('.manual_controls span').click(function(){
		if($(this).hasClass('prev')){
			//이전
			manualSlide.goToPrevSlide();
		} else{
			//다음
			manualSlide.goToNextSlide();
		}
	});



	var pagers = '';

	$('.manual_control_slider img').each(function(i){
		if(i < $('.manual_control_slider img').length - 2){
			pagers += '<span>' + (i + 1) +'</span>';
		}		
		$('.manual_pager').html(pagers);		
	});

	$('.manual_pager span').click(function(){
		//작성~
		var idx = $(this).index();
		manualSlide.goToSlide(idx);		
	});
	
	

	/* ---------- 자동 슬라이드 ---------- */

	$('.auto_slider').bxSlider({
		auto :true,
		autoHover :true,
/* 		autoControls : true, */
		pause : 2000
	});


	/* ---------- 동영상 제어하기 ---------- */
	$('.video_slides').bxSlider({
		video: true,
		onSliderLoad:function(currentIndex){
			$('.video_slides div').eq(currentIndex + 1).find('video').get(0).play();
		},
		onSlideAfter:function($slideElement){
			$slideElement.siblings().find('video').get(0).pause();
			$slideElement.find('video').get(0).play();
		}
	});


	/* ---------- 탭 연동 ---------- */

	var tabSlide = $('.tab_slide').bxSlider();

	$('.slide_tab').tabs({
		activate: function( event, ui ) {
			tabSlide.reloadSlider();
		}
	});
	
	
});//document ready jquery 