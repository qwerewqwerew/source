const win = $(window);
const sections = $('.section');
const gnb = $('.gnb li');
const sideNav = $('.sideNav>li');

function scrollToSection(index) {
  const section = sections.eq(index);
  const offset = section.offset().top;
  $('html,body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
}

gnb.on('click', function (e) {
  e.preventDefault();
  const index = $(this).index();
  scrollToSection(index);
});

sideNav.on('click', function (e) {
  e.preventDefault();
  const index = $(this).index();
  scrollToSection(index);
});

win.on('scroll', function () {
	const sct = win.scrollTop();
	sections.each(function (i) {
		if (sct >= sections.eq(i).offset().top - 300) {
      $('.gnb li').eq(i).addClass('on').siblings().removeClass('on');
			sideNav.eq(i).addClass('on').siblings().removeClass('on');
			sections.eq(i).addClass('on').siblings().removeClass('on');
		}
	});
	sct > 400 ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');
});
