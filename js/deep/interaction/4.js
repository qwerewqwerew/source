const navContainer = document.querySelector('.btns .container');
document.addEventListener('scroll', function () {
	console.log(window.scrollY);
	if (window.scrollY > 60) {
		navContainer.classList.add('bgshow');
	} else {
		navContainer.classList.remove('bgshow');
	}
});

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', function () {
	if (window.scrollY > 500) {
		arrowUp.classList.add('visible');
	} else {
		arrowUp.classList.remove('visible');
	}
});

const home = document.querySelector('#home');

arrowUp.addEventListener('click', function () {
	home.scrollIntoView({ behavior: 'smooth' });
});
/* add */
const btnsMenu = document.querySelector('.btns_menu');
btnsMenu.addEventListener('click', (event) => {
	const target = event.target;
	const link = target.dataset.link;
	console.log(link);
	if (link == null) {
		return;
	}
	const scrollTo = document.querySelector(link);
	console.log(scrollTo);
	scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
	btnsMenu.classList.remove('open');
});
