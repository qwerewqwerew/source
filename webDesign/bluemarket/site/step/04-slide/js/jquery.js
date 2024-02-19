// menu
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


// slide
const slides = $('.slide_wrap li');
let idx = 0;
function slide() {
	slides.each((i, o) => $(o).removeClass('on'));
	slides.eq(idx).addClass('on');
	idx++;
	if (idx >= slides.length) {
		idx = 0;
	}
}
setInterval(() => {
	slide();
}, 5000);
slides.eq(idx).addClass('on');
