$(function(){
	$('.nav>ul>li').mouseover(function(){
		$('.nav>ul>li>ul').stop().slideDown(500);
	});
	$('.nav>ul>li').mouseout(function(){
		$('.nav>ul>li>ul').stop().slideUp(500);
	});
});