const depth1 = document.querySelector('.depth1');
depth1.addEventListener('mouseover', function () {
	depth1.querySelectorAll('.depth2').forEach((el) => {
		el.style.display = 'block';
	});
	document.querySelector('header').classList.add('on');
});
depth1.addEventListener('mouseout', function () {
	depth1.querySelectorAll('.depth2').forEach((el) => {
		el.style.display = 'none';
	});
	document.querySelector('header').classList.remove('on');
});
// slide
const slides = document.querySelectorAll('.slide_wrap li');
let idx = 0;

function slide() {
	// 현재 슬라이드에서 'on' 클래스 제거
	slides.forEach((slide) => slide.classList.remove('on'));

	// 새로운 슬라이드에 'on' 클래스 추가
	slides[idx].classList.add('on');

	// 인덱스를 증가시키고, 필요한 경우 다시 0으로 설정
	idx++;
	if (idx >= slides.length) {
		idx = 0;
	}
}

setInterval(() => {
	slide();
}, 5000);

// 초기 활성 슬라이드 설정
slides[idx].classList.add('on');

/* tab */

const tabBtn = document.querySelectorAll('.board .buttons li');
const panels = document.querySelectorAll('.panels>div');

tabBtn.forEach((el, idx) => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let tg = idx;
		if (tg > 0) {
			tabBtn[0].classList.remove('on');
		} else {
			tabBtn[1].classList.remove('on');
		}
		tabBtn[tg].classList.add('on');
		panels.forEach((el) => (el.style.display = 'none'));
		panels[tg].style.display = 'block';
	});
});

// popup

document.querySelector('#panel1 .row.open').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.popup').style.display = 'block';
	document.querySelector('.overlay').classList.add('open');
});
document.querySelector('.close').addEventListener('click', function (e) {
	e.preventDefault();

	document.querySelector('.popup').style.display = 'none';
	document.querySelector('.overlay').classList.remove('open');
});

//로그인

const loginButton = document.querySelector('#login');
const logoutButton = document.querySelector('#logout');

const init = () => {
	// 로그인 정보가 localStorage에 없으면 초기값 설정
	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', JSON.stringify({ id: 'test', password: '5246', isLoggedIn: false }));
	}
};

const login = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const uid = document.querySelector('#uid').value;
	const upw = document.querySelector('#upw').value;
	if (uid === user.id && upw === user.password) {
		alert('로그인 성공!');
		user.isLoggedIn = true;
		localStorage.setItem('user', JSON.stringify(user));
	} else {
		alert('아이디 또는 비밀번호가 틀렸습니다.');
	}
};

const logout = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user.isLoggedIn) {
		alert('로그아웃 성공!');
		user.isLoggedIn = false;
		localStorage.setItem('user', JSON.stringify(user));
	} else {
		alert('로그인 상태가 아닙니다.');
	}
};

init();

loginButton.addEventListener('click', function (e) {
	e.preventDefault();
	login();
});

logoutButton.addEventListener('click', function (e) {
	e.preventDefault();
	logout();
});
