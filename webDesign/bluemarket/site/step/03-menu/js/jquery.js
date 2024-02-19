const depth1 = $('.depth1');
depth1.on({
	mouseenter: function () {
		$('.depth2').css('display', 'block');
		$('header').addClass('on');
	},
	mouseleave: function () {
		$('.depth2').css('display', 'none');
		$('header').removeClass('on');
	},
});
