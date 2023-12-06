$('#content1.carousel').slick({ slidesToShow: 2 });

$('.tab-button').on('click', function () {
	var tabButtonId = $(this).attr('id');
	$('.tab-button').removeClass('active');
	$('.tab-content').removeClass('active');

	$(this).addClass('active');
	var targetContent = $('#' + 'content' + tabButtonId.slice(-1));
	targetContent.addClass('active');

	if (targetContent.hasClass('slick-initialized')) {
		targetContent.slick('unslick');
	}
	targetContent.slick({ slidesToShow: 2 });
});

$('.popup').magnificPopup({ type: 'image' });
