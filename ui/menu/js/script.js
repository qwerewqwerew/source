var mainmenu = $('nav > ul > li '),
	subMenu = mainmenu.find('ul'),
	header = $('header'),
	headerHeight = header.outerHeight(),
	subMenuHeight = 0;

subMenu.each(function(){
	if($(this).outerHeight() > subMenuHeight){
		subMenuHeight = $(this).outerHeight();
	}
});

var totalHeaderHeight = headerHeight + subMenuHeight + 30;
		
mainmenu.mouseenter(function(){
	header.addClass('active')
	.stop().animate({height:totalHeaderHeight +'px'},300);
})
.mouseleave(function(){
	header.removeClass('active')
	.stop().animate({height:headerHeight +'px'},300);
});