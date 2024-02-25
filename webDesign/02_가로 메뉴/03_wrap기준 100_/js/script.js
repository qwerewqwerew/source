$(function(){
	var nav_bg=$(".nav_bg");
	nav_bg.hide();
	$('.nav>ul>li').mouseover(function(){
		$('.nav>ul>li>ul').stop().slideDown(500);
		nav_bg.stop().slideDown(500);
	});
	$('.nav>ul>li').mouseout(function(){
		$('.nav>ul>li>ul').stop().slideUp(500);
		nav_bg.stop().slideUp(500);
	});
});