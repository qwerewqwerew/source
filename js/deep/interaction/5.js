const btnsToggleBtn = document.querySelector('.btns_toggle-btn');
btnsToggleBtn.addEventListener('click', function (e) {
	e.preventDefault();
	btnsMenu.classList.toggle('open');
});
