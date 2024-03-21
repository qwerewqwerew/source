function js() {
	let theme = document.querySelector('#theme');
	console.log(theme);

	theme.addEventListener('change', function (e) {
		let val = this.options[this.selectedIndex].value;
		switchTheme(val);
	});

	function switchTheme(theme) {
		const classList = ['dark-theme', 'mid-theme', 'light-theme'];
		classList.forEach((el) => {
			document.body.classList.remove(el);
		});

		//document.body.classList.remove('dark-theme');
		//document.body.classList.remove('mid-theme');
		//document.body.classList.remove('light-theme');

		if (theme === 'dark') {
			document.body.classList.add('dark-theme');
		} else if (theme === 'mid') {
			document.body.classList.add('mid-theme');
		} else {
			document.body.classList.add('light-theme');
		}
	}
}
js();
//jq();
function jq() {
	let theme = $('#theme');
	theme.on('change', function () {
		let val = $(this).find('option:selected').val();
		console.log(val);
		switchTheme(val);
	});

	function switchTheme(theme) {
		const body = $('body');
		body.removeClass('dark-theme mid-theme light-theme');

		if (theme === 'dark') {
			body.addClass('dark-theme');
		} else if (theme === 'mid') {
			body.addClass('mid-theme');
		} else {
			body.addClass('light-theme');
		}
	}
}
