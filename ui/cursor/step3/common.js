/* ==========
    scroll nav
========== */
(() => {
	const navContainer = document.querySelector('.btns .container');
	document.addEventListener('scroll', function () {
		if (window.scrollY > 60) {
			navContainer.classList.add('bgshow');
		} else {
			navContainer.classList.remove('bgshow');
		}
	});
})();

/* ==========
    up btn
========== */
(() => {
	const arrowUp = document.querySelector('.arrow-up');
	const home = document.querySelector('#home');
	const btnsMenu = document.querySelector('.btns_menu');
	const btnsToggleBtn = document.querySelector('.btns_toggle-btn');

	document.addEventListener('scroll', function () {
		if (window.scrollY > 500) {
			arrowUp.classList.add('visible');
		} else {
			arrowUp.classList.remove('visible');
		}
	});

	arrowUp.addEventListener('click', function () {
		home.scrollIntoView({ behavior: 'smooth' });
	});
	/* add */

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
	btnsToggleBtn.addEventListener('click', function (e) {
		e.preventDefault();
		btnsMenu.classList.toggle('open');
	});
})();
