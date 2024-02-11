// menu
const depth1 = $('.depth1');
depth1.hover(
	() => {
		depth1.find('.depth2').each((i, o) => {
			$(o).css('display', 'block');
			$('header').addClass('on');
		});
	},
	() => {
		depth1.find('.depth2').each((i, o) => {
			$(o).css('display', 'none');
			$('header').removeClass('on');
		});
	}
);

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
