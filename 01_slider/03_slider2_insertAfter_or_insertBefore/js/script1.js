jQuery(document).ready(function(){

	
	var slide=$('ul.slide');//슬라이드박스
	var slideWidth=slide.width();//슬라이드 박스너비140% 
	var slideList=$('ul.slide>li');
	var slideListWidth=$('ul.slide>li').width()+slideWidth*0.02;
    var moveCheck=false;
	//12%+140%*0.02=222.86
	var current=0;
	var setInterval01;
	
	var btnList=$('ul.btn>li');
	
	mainSlide();
	function mainSlide(){
		setInterval01=setInterval(function(){
			
			if(!moveCheck){
			slide.stop().animate({left:-slideListWidth},500, function(){
				$('ul.slide>li:first').insertAfter('ul.slide>li:last');
				slide.css('left',0);
			});
			
			btnList.removeClass('bg_black');
			current++;
			if(current == btnList.size()){current=0};
			btnList.eq(current).addClass('bg_black');
			}
		},2000)
	}
	
	function next(){
        moveCheck=true;
		slide.animate({left:-slideListWidth},100, function(){
			$('ul.slide>li:first').insertAfter('ul.slide>li:last');
			slide.css('left',0);
		},function(){moveCheck=false});
		
		btnList.removeClass('bg_black');
		current++;
		if(current == btnList.size()){current=0};
		btnList.eq(current).addClass('bg_black');
	}
	
	function prev(){		
        moveCheck=true;
		$('ul.slide>li:last').insertBefore('ul.slide>li:first');
		slide.css('left',-slideListWidth);	
		slide.animate({left:0},100,function(){moveCheck=false});
		
		btnList.removeClass('bg_black');
		current--;
		if(current == -btnList.size()){current=0};
		btnList.eq(current).addClass('bg_black');
	}
	
	$('.prev').click(function(){
        if(moveCheck=false){

            prev();
        }
	})
	
	$('.next').click(function(){
        if(moveCheck=false){
            next();
        }
	})
	
	$('.slide, .btn, .prev, .next').hover(function(){
		clearInterval(setInterval01);
	}, function(){
		mainSlide();
	})
	
	btnList.click(function(){
		var th=$(this);
		var i=th.index();
		var bgBlack=$('ul.btn>li.bg_black');
		var bgBlacki=bgBlack.index();
		var slideListi=slideList.eq(i);
		var Ltt=$('ul.slide>li:eq(0)').nextUntil(slideListi);
		
		/* var Lt=slideListi.prevAll();
		var nx=slideListi.nextAll(); */
		
		btnList.removeClass('bg_black');
		th.addClass('bg_black');
		
		
		slide.animate({left:-slideListWidth*(i-1)},100, function(){
			$('ul.slide>li:eq(0)').insertAfter($('ul.slide>li:last'));
			Ltt.insertAfter($('ul.slide>li:last'));
			slide.css('left',0);
		},function(){moveCheck=false;});
			
		if(i == bgBlacki){
			th.addClass('bg_black');
		}
		
		
		
	})
});