const ball = document.querySelector('.ball');

ball.addEventListener('dragstart', (e) => {
	console.log('dragstart 이벤트');
});

ball.addEventListener('drag', (e) => {
	ball.style.left = e.clientX + 'px';
	ball.style.top = e.clientY + 'px';
	console.log('drag 이벤트', e.clientX);
});

ball.addEventListener('dragend', (e) => {
	ball.style.left = e.clientX + 'px';
	ball.style.top = e.clientY + 'px';
	console.log('dragend 이벤트');
});
