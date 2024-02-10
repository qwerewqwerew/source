const span = document.querySelectorAll('span');
span.forEach((el,idx) => {
	el.setAttribute('style', `--i:${idx-1}`);
});
