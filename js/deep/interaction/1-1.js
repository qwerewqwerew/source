const btnToggle = document.querySelector('.btn_toggle');
// addEventListener('이벤트', 실행함수);
btnToggle.addEventListener('click', function () {
	document.body.classList.toggle('bgcolor--blue');
});

//console.log('');

const btnReset = document.querySelector('.btn--reset');
const btnBgGray = document.querySelector('.btn--bggray');

btnReset.addEventListener('click', function () {
	document.body.classList.remove('bgcolor--blue', 'bgcolor--gray');
});

btnBgGray.addEventListener('click', function () {
	document.body.classList.add('bgcolor--gray');
});
