$(function(){
	var sliderWrap=$('.slide'),banner=sliderWrap.find('.slideUl>li'),button=sliderWrap.find('.buttonList>li'),leftBtn=sliderWrap.find('.btnImg>.prev'),rightBtn=sliderWrap.find('.btnImg>.next'),current=0,setIntervalId;

	var counterEl = '<div class="counter">1';
	$("#wrap").append(counterEl);
	var counter = $(".counter");

	function cnt(num) {
		counter.html(`${num + 1}`);
	}


	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=banner.eq(current);
			var prevBtn=button.eq(current);
			move(prev,0,'-100%');
			prevBtn.removeClass('on');
			current++;
			if(current==banner.length){current=0;}
			var next=banner.eq(current);
			var nextBtn=button.eq(current);
			move(next,'100%',0);
			nextBtn.addClass('on');
			cnt(current);
		},1000);
	}
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	sliderWrap.on(
	{mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	
	/* 양쪽 화살표 */
	rightBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'-100%');
		prevBtn.removeClass('on');
		current++;
		if(current==banner.length){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'100%',0);
		nextBtn.addClass('on');
	});
	leftBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'100%');
		prevBtn.removeClass('on');
		current--;
		if(current==-banner.length){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'-100%',0);
		nextBtn.addClass('on');
	});
	
	//button.on({click:function(){}});
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		
		button.removeClass('on');
		tg.addClass('on');
		//클릭한 i가 0보다크면 move2 작으면 move1
		if(current>i){
			move2(i);
		}else{
			move1(i);
		}
		
	});
	
	function move1(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'-100%'},500);
		nextEl.css('left','100%').stop().animate({left:0},500);
		current=i;
	}
	function move2(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'100%'},500);
		nextEl.css('left','-100%').stop().animate({left:0},500);
		current=i;
	}
	
	
});