$(function(){
	var $firstMenu = $('nav > ul > li '),			
			$header = $('header'),
			$headerHeight = $header.height();
	
	$firstMenu.mouseenter(function(){
		$firstMenu.find('ul').hide();
		$('.overlay').addClass('show');
		$(this).find('ul').show();
		var $submenuHeight = $(this).find('ul').height();
		var $newHeaderHeight = $headerHeight + $submenuHeight;
		$header.stop().animate({height:$newHeaderHeight});
	})
	.mouseleave(function(){
		$('.overlay').removeClass('show');
		$header.stop().animate({height:$headerHeight});
		$firstMenu.find('ul').hide();
	});
	
	
	
});