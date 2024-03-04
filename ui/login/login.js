document.addEventListener('DOMContentLoaded', function () {
	const loginButton = document.querySelector('#login');
	const logoutButton = document.querySelector('#logout');

	const init = () => {
		// 로그인 정보가 localStorage에 없으면 초기값 설정
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', JSON.stringify({ id: 'test', password: '5246', isLoggedIn: false }));
		}
	};

	const login = () => {
		const uid = document.querySelector('#uid').value;
		const upw = document.querySelector('#upw').value;

		const user = JSON.parse(localStorage.getItem('user'));

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
});
