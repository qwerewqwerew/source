$(function(){
	var box=$('#stories .selectedStories .container .storiesBody .contents');
	var col1=0;
	var col2=1;
	var col3=2;
	var col4=3;
	var timer;
	
	timer=setInterval(rolling,2500);
	function rolling(){
		box.eq(col1).css({transform:'scale('+.9+')','zIndex':0}).stop().animate({left:'10%',top:50,opacity:.5, marginLeft:0},1000);
		box.eq(col2).css({transform:'scale('+.8+')','zIndex':0}).stop().animate({left:'50%',top:0,opacity:.2, marginLeft:'-11%'},1000);
		box.eq(col3).css({transform:'scale('+.9+')','zIndex':0}).stop().animate({left:'68%',top:50,opacity:.5, marginLeft:'0%'},1000);
		box.eq(col4).css({transform:'scale('+1+')','zIndex':1}).stop().animate({left:'50%',top:100,opacity:1, marginLeft:'-11%'},1000);
		col1--;
		col2--;//1,0
		col3--;//2,1,0
		col4--;//3,2,1,0
		
		if(col1<0){col1=3}
		if(col2<0){col2=3}
		if(col3<0){col3=3}
		if(col4<0){col4=3}
	}
	
	box.hover(function(){
		clearInterval(timer);
		$(this).css('background','#d9ede0');
	},function(){
		timer=setInterval(rolling,2500);
		$(this).css('background','#ffffff');
	});
	
	var prev=$('#stories .selectedStories .container .storiesBody .contentsBtn .prev');
	prev.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(rolling,2500);
	});
	var next=$('#stories .selectedStories .container .storiesBody .contentsBtn .next');
	next.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(rolling,2500);
	});
	next.click(function(){
		box.eq(col1).css({transform:'scale('+.9+')','zIndex':0}).stop().animate({left:'10%',top:50,opacity:.5, marginLeft:0},1000);
		box.eq(col2).css({transform:'scale('+.8+')','zIndex':0}).stop().animate({left:'50%',top:0,opacity:.2, marginLeft:'-11%'},1000);
		box.eq(col3).css({transform:'scale('+.9+')','zIndex':0}).stop().animate({left:'68%',top:50,opacity:.5, marginLeft:'0%'},1000);
		box.eq(col4).css({transform:'scale('+1+')','zIndex':1}).stop().animate({left:'50%',top:100,opacity:1, marginLeft:'-11%'},1000);
		col1--;
		col2--;
		col3--;
		col4--;
		
		if(col1<0){col1=3}
		if(col2<0){col2=3}
		if(col3<0){col3=3}
		if(col4<0){col4=3}
		return false;
	});
	prev.click(function(){
		box.eq(col3).css({transform:'scale('+.9+')','z-index':0}).stop().animate({left:'10%',top:50,opacity:.5, marginLeft:0},1000);
		box.eq(col4).css({transform:'scale('+.8+')','zIndex':0}).stop().animate({left:'50%',top:0,opacity:.2, marginLeft:'-11%'},1000);
		box.eq(col1).css({transform:'scale('+.9+')','zIndex':0}).stop().animate({left:'68%',top:50,opacity:.5, marginLeft:'0%'},1000);
		box.eq(col2).css({transform:'scale('+1+')','zIndex':1}).stop().animate({left:'50%',top:100,opacity:1, marginLeft:'-11%'},1000);
		col1++;
		col2++;
		col3++;
		col4++;
		
		if(col1>3){col1=0}
		if(col2>3){col2=0}
		if(col3>3){col3=0}
		if(col4>3){col4=0}
		return false;
	});
	
	
	
	
});