const jq = () => {
	$('.button_inner').on({
		mouseenter: function (e) {
			var parentOffset = $(this).offset();
			console.log(e.pageX, parentOffset);
			var relX = e.pageX - parentOffset.left;
			console.log(relX);

			var relY = e.pageY - parentOffset.top;

			$(this).prev('.button_circle').css({ left: relX, top: relY });
			$(this).prev('.button_circle').removeClass('desplode-circle');
			$(this).prev('.button_circle').addClass('explode-circle');
		},
		mouseleave: function (e) {
			var parentOffset = $(this).offset();

			var relX = e.pageX - parentOffset.left;
			var relY = e.pageY - parentOffset.top;
			$(this).prev('.button_circle').css({ left: relX, top: relY });
			$(this).prev('.button_circle').removeClass('explode-circle');
			$(this).prev('.button_circle').addClass('desplode-circle');
		},
	});
};
const js = () => {
	const btn = document.querySelector('.button_inner');
	btn.addEventListener('mouseenter', explode);
	btn.addEventListener('mouseleave', displode);

	function explode(e) {
		let parentOffset = [this.offsetLeft, this.offsetTop];
		console.log(parentOffset[0], parentOffset[1]);
		let relX = e.pageX - parentOffset[0];
		let relY = e.pageY - parentOffset[1];
		const prev = this.previousElementSibling;
		prev.style.left = relX + 'px';
		prev.style.top = relY + 'px';
		prev.classList.add('explode-circle');
		prev.classList.remove('desplode-circle');
	}
	function displode(e) {
		let parentOffset = [this.offsetLeft, this.offsetTop];
		const prev = this.previousElementSibling;
		let relX = e.pageX - parentOffset[0];
		let relY = e.pageY - parentOffset[1];
		prev.style.left = relX + 'px';
		prev.style.top = relY + 'px';
		prev.classList.remove('explode-circle');
		prev.classList.add('desplode-circle');
	}
};
js();
