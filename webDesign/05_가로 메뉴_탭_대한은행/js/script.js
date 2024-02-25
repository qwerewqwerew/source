$(function(){
	/* 메뉴 */
	$('.nav>ul>li').mouseover(function(){
		$('.nav>ul>li>ul').stop().slideDown(500);
	});
	$('.nav>ul>li').mouseout(function(){
		$('.nav>ul>li>ul').stop().slideUp(500);
	});
	
	/* 슬라이드 */
	var banner=$('#banner li');
	var current=0;
	
	setInterval(function(){
		var prev=banner.eq(current);
		move(prev,0,'-100%',1,0);
		current++;
		
		if(current==banner.size()){current=0;}
		var next=banner.eq(current);
		move(next,'100%',0,0,1);
		
	},2000);
	
	function move(tg,start,end,op1,op2){
		tg.css({left:start,opacity:op1}).stop().animate({left:end,opacity:op2},800);
	}
	
	/* 탭 */
	var tab=$(".tab>li");
	var content=$(".tab_con>div");
	   
	content.hide().eq(0).show();
	tab.click(function(event){
		event.preventDefault();
		var tg=$(this);
		var i=tg.index();
		tab.removeClass("active");
		tg.addClass("active");
		content.css("display","none");
		content.eq(i).css("display","block");
	});
	
	/* 팝업 */
	$('#contents .popup').click(function(){
		$('.pop').css('display','block');
	});
	$('.pop button').click(function(){
		$('.pop').css('display','none');
	});
});