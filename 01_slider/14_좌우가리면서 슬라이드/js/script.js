$(function(){
	//이슈
	var page=$('#stories .issue .imgBox .page .view');
	var current=0;
	var prev=$('#stories .issue .imgBox .btn .prev');
	var next=$('.next');
	var btns=$('#stories .issue .imgBox .btn_bt a');
	var timer;
	timer=setInterval(event,3000);
	function event(){
		if(current==3) {current=0;}	//0,1,2 (3 은 없다)
		var next=current+1;
		if(current==2) {next=0;}
		page.eq(current).css({'z-index':0}).removeClass('right');//eq0 번째 클래스 삭제, 깊이낮춤
		page.eq(current).children('img').removeClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(next).css({'z-index':1}).addClass('right');
		page.eq(next).children('img').addClass('right');
		page.eq(next).stop().animate({width:'100%'},1510);
		current++;
		btns.removeClass('on');
		btns.eq(next).addClass('on');
	}
	$('#stories .issue .imgBox .page, #stories .issue .imgBox .btn, #stories .issue .imgBox .btn_bt').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(event,3000);
	});
	next.click(function(){
		alert()
		if(current==3) current=0;
		var next=current+1;
		if(current==2) next=0;
		page.eq(current).css({'z-index':0,width:'100%'}).removeClass('right');
		page.eq(current).children('img').removeClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(next).css({'z-index':1,width:0}).addClass('right');
		page.eq(next).children('img').addClass('right');
		page.eq(next).stop().animate({width:'100%'},1550);
		current++;
		btns.removeClass('on');
		btns.eq(next).addClass('on');
		return false;
	});
	prev.click(function(){
		if(current<0) current=2;
		var next=current-1;
		if(current==0) next=2;
		page.eq(current).css({'z-index':0,width:'100%'}).addClass('right');
		page.eq(current).children('img').addClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(next).css({'z-index':1,width:0}).removeClass('right');
		page.eq(next).children('img').removeClass('right');
		page.eq(next).stop().animate({width:'100%'},1550);
		current--;
		btns.removeClass('on');
		btns.eq(next).addClass('on');
		return false;
	});
	btns.click(function(){
		var target=$(this).index();
		page.eq(current).css({'z-index':0,width:'100%'}).removeClass('right');
		page.eq(current).children('img').removeClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(target).css({'z-index':1,width:0}).addClass('right');
		page.eq(target).children('img').addClass('right');
		page.eq(target).stop().animate({width:'100%'},1550);
		current=target;
		btns.removeClass('on');
		btns.eq(target).addClass('on');
		return false;
	});
});