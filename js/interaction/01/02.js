const bgContainer = document.querySelector('.bg__img'); //
const btnToggle = document.querySelector('.btn_toggle');

btnToggle.addEventListener('click', function () {
	bgContainer.classList.remove('bg__img--show'); //
	document.body.classList.toggle('bgcolor--blue');
});

const btnReset = document.querySelector('.btn--reset');
const btnBgGray = document.querySelector('.btn--bggray');
btnReset.addEventListener('click', function () {
	bgContainer.classList.remove('bg__img--show'); //
	document.body.classList.remove('bgcolor--blue', 'bgcolor--gray');
});
btnBgGray.addEventListener('click', function () {
	bgContainer.classList.remove('bg__img--show'); //
	document.body.classList.remove('bgcolor--blue');
	document.body.classList.add('bgcolor--gray');
});
const btnBgImg = document.querySelector('.btn--bgimg'); //
btnBgImg.addEventListener('click', function () {
	//
	bgContainer.classList.add('bg__img--show');
});
