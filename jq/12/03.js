$(() => {
	let newText;
	$('#crossfade li').each(function (idx) {
		console.log($(this));
		let oldText = $(this).find('p').text();
		newText = oldText + idx;
		$(this)
			.find('p')
			.text(idx + oldText);
	});
});
