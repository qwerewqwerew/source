const btnToggle = document.querySelector('.btn_toggle');

btnToggle.addEventListener('click', function () {
	document.body.classList.toggle('bgcolor--blue');
});

const btnReset = document.querySelector('.btn--reset');
const btnBgGray = document.querySelector('.btn--bggray');
btnReset.addEventListener('click', function () {
	document.body.classList.remove('bgcolor--blue', 'bgcolor--gray');
});
btnBgGray.addEventListener('click', function () {
	document.body.classList.remove('bgcolor--blue');
	document.body.classList.add('bgcolor--gray');
});
