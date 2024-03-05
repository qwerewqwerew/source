var mainmenu = $('nav > ul > li '),	//원뎁스 li 할당
	subMenu = mainmenu.find('ul'), 	//투뎁스 ul 할당
	header = $('header'),			//header 할당
	headerHeight = header.height(),	//header 높이할당
	subMenuHeight = subMenu.height(),	//subMenu 높이할당
	totalHeaderHeight = headerHeight + subMenuHeight + 30;	//totalHeaderHeight 변수에 header 높이+subMenu높이 할당

mainmenu.mouseenter(function () {
	header.addClass('active')
		.stop().animate({ height: totalHeaderHeight + 'px' }, 300);
});
mainmenu.mouseleave(function () {
	header.removeClass('active')
		.stop().animate({ height: headerHeight + 'px' }, 300);
});