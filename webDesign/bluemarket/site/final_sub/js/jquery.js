// menu
const depth1 = $('.depth1');
depth1.on({
	mouseover: function () {
		depth1.find('.depth2').each((i, o) => {
			$(o).css('display', 'block');
			$('header').addClass('on');
		});
	},
	mouseleave: function () {
		depth1.find('.depth2').each((i, o) => {
			$(o).css('display', 'none');
			$('header').removeClass('on');
		});
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

// tab
const tabBtn = $('.board .buttons li');
const panels = $('.panels>div');
tabBtn.on('click', function (e) {
	e.preventDefault();
	let tg = $(this).index();
	panels.hide();
	tabBtn.removeClass('on');
	tabBtn.eq(tg).addClass('on');
	panels.eq(tg).show();
});

//popup

$('#panel1 .row.open').on('click', function (e) {
	e.preventDefault();
	$('.popup').show();
	$('.overlay').show();
});
$('.close').on('click', function (e) {
	e.preventDefault();
	$('.popup').hide();
	$('.overlay').hide();
});

const mainBanner = $('.main_banner');
const form = $('#login_form .id, #login_form .pw');
let oldText = mainBanner.text();

if (localStorage.getItem('userId')) {
	$('.main_banner').text('Welcome, ' + localStorage.getItem('userId') + '!');
	form.hide();
	$('#logout_btn').show();
}

form.on('submit', function (e) {
	e.preventDefault();
	oldText;
	let userId = $('#u_id').val();
	let userPw = $('#u_pw').val();
	// 사용자 이름과 비밀번호를 로컬스토리지에 저장
	localStorage.setItem('userId', userId);
	localStorage.setItem('userPw', userPw);

	mainBanner.text('Welcome, ' + userId + '!');
	form.hide();
	$('#logout_btn').show();
});

$('#logout_btn').on('click', function () {
	localStorage.removeItem('userId');
	localStorage.removeItem('userPw');

	form.show();
	$('#logout_btn').hide();
});
