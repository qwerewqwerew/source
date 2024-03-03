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

/* 로그인구현 */

const loginButton = $('#login');
const logoutButton = $('#logout');
let text = $('.main_banner h2');
let textold = text.text();

function init() {
	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', JSON.stringify({ id: 'test', password: '5246', isLoggedIn: false }));
	}
}

function login() {
	let uid = $('#uid').val();
	let upw = $('#upw').val();

	let user = JSON.parse(localStorage.getItem('user'));

	if (uid === user.id && upw === user.password) {
		alert('로그인 성공!');
		text.text(`${uid}님 ${textold}`);
		$('.id,.pwd,#login').hide();
		$('#logout').show();
		user.isLoggedIn = true;
		localStorage.setItem('user', JSON.stringify(user));
	} else {
		alert('아이디 또는 비밀번호가 틀렸습니다.');
	}
}

function logout() {
	let user = JSON.parse(localStorage.getItem('user'));
	if (user.isLoggedIn) {
		alert('로그아웃 성공!');
		user.isLoggedIn = false;
		localStorage.setItem('user', JSON.stringify(user));
		text.text(`${textold}`);
		$('.id,.pwd,#login').show();
		$('#logout').hide();
	} else {
		alert('로그인 상태가 아닙니다.');
	}
}

init();

loginButton.on('click', function (e) {
	e.preventDefault();
	login();
});

logoutButton.on('click', function (e) {
	e.preventDefault();
	logout();
});
