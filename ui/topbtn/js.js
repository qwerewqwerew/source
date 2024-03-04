window.addEventListener('scroll', function () {
	if (this.scrollY > 300) {
		document.querySelector('.go-top').style.display = 'block';
	} else {
		document.querySelector('.go-top').style.display = 'none';
	}
});

document.querySelector('.go-top').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('html, body').scrollTo({ top: 0, behavior: 'smooth' });
});
