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

// tab
const tabBtn = $('.board .buttons li');
const panels = $('.panels>div');
tabBtn.on('click', function (e) {
	e.preventDefault();
	let tg = $(this).index();
	panels.hide()
	tabBtn.removeClass('on');
	tabBtn.eq(tg).addClass('on');
	panels.eq(tg).show();
});

//popup

$('#panel1 .row.open').on('click',function(e){
	e.preventDefault();

})


addEventListener('click',function(){
	document.querySelector('.popup').style.display='block';
	document.querySelector('.overlay').classList.add('open');
})
document.querySelector('.close').addEventListener('click',function(){
	document.querySelector('.popup').style.display='none';
	document.querySelector('.overlay').classList.remove('open');
})
