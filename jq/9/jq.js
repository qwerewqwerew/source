const win = $(window),
	sections = $('.section'),
	gnb = $('.gnb li'),
	sideNav = $('.sideNav>li');


gnb.on('click', function (e) {
	e.preventDefault();
  let tg = $(this);
	let index = tg.index();
	let section = sections.eq(index);
	let offset = section.offset().top;
	$('html,body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
});

sideNav.on('click', function (e) {
	e.preventDefault();
  let tg = $(this);
	let index = tg.index();
	let section = sections.eq(index);
	let offset = section.offset().top;
	$('html,body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
});

win.on('scroll', function () {
	let sct = win.scrollTop();
	sections.each(function (i) {
		if (sct >= sections.eq(i).offset().top - 300) {
      $('.gnb li').eq(i).addClass('on').siblings().removeClass('on');
			sideNav.eq(i).addClass('on').siblings().removeClass('on');
			sections.eq(i).addClass('on').siblings().removeClass('on');
		}
	});
	sct > 400 ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');
});
