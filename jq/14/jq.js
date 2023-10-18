const gnb = $('.gnb>li>a');
const sideNav = $('.sideNav>li>a');
let winH = $(window).height();
const sections = $('.section');

$(window).on('scroll', function () {
	let winSct = $(this).scrollTop() + winH * 0.9;
	sectionAni(winSct);
	sideNavAni();
});

gnb.on('click', function (e) {
	e.preventDefault();
	$($(this).attr('href')).animate({ scrollTop: 'toggle' }, 'slow');
});

sideNav.on('click', function (e) {
	e.preventDefault();
	$($(this).attr('href')).animate({ scrollTop: 'toggle' }, 'slow');
});

function sideNavAni() {
	$('.sideNav').css('top', '-20%');
	setTimeout(() => {
		$('.sideNav').css('top', (winH - $('.sideNav').height()) / 2 + 'px');
	}, 400);
}

const sectionAni = (n) => {
	sections.each(function (i) {
		let sct = $(this).offset().top;
		const delay = $(this).data('delay');

		if (n > sections.first().offset().top) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}

		if (n > sct) {
			if (delay === undefined) {
				if ($(this).find('.parallax')) {
					parallaxAni();
				} else {
					$(this).addClass('sectionIn');
				}
			} else {
				setTimeout(() => {
					$(this).addClass('sectionIn');
				}, delay);
			}

			gnb.removeClass('on').eq(i).addClass('on');
			sideNav.removeClass('on').eq(i).addClass('on');
		} else {
			$(this).removeClass('sectionIn');
		}
	});
};

function parallaxAni() {
	$('.parallax>.pbox').each(function (i) {
    const delay = $(this).data('delay');
		setTimeout(() => {
			$(this).addClass('sectionIn');
		}, delay);
	});
}
