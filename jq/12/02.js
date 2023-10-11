$(() => {
	$('#crossfade li').hide().filter(':first').show();
	setInterval(slideshow, 3000);
	function slideshow() {
		//$('#crossfade li:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('#crossfade');

		// 첫 번째 li 요소를 서서히 사라지게 함
		$('#crossfade li:first').fadeOut('slow');
		// 다음 sibling인 li 요소를 서서히 나타나도록 함
		$('#crossfade li:first').next().fadeIn('slow');
		// 첫 번째 li 요소를 맨 뒤로 이동시켜 순환시킴
		$('#crossfade li:first').appendTo('#crossfade');
	}
});
