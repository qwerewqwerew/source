const bgContainer = document.querySelector('.bg__img');
const btnToggle = document.querySelector('.btn_toggle');

btnToggle.addEventListener('click', function () {
	bgContainer.classList.remove('bg__img--show');
	document.body.classList.toggle('bgcolor--blue');
});

const btnReset = document.querySelector('.btn--reset');
const btnBgGray = document.querySelector('.btn--bggray');
btnReset.addEventListener('click', function () {
	bgContainer.classList.remove('bg__img--show');
	document.body.classList.remove('bgcolor--blue', 'bgcolor--gray');
});
btnBgGray.addEventListener('click', function () {
	bgContainer.classList.remove('bg__img--show');
	document.body.classList.remove('bgcolor--blue');
	document.body.classList.add('bgcolor--gray');
});
const btnBgImg = document.querySelector('.btn--bgimg');
btnBgImg.addEventListener('click', function () {
	bgContainer.classList.add('bg__img--show');
});
//
const navContainer = document.querySelector('.btns .container');
document.addEventListener('scroll', function () {
	console.log(window.scrollY);
	let wsct = window.scrollY;
	if (wsct > 60) {
		navContainer.classList.add('bgshow');
	} else {
		navContainer.classList.remove('bgshow');
	}
});
