$(() => {
  let winH = $(window).height();
	$(window).on('scroll', () => {
		let winSCT;
		const sections = $('section');
		winSCT = $(window).scrollTop()+ winH * 0.9;;
		sections.each(function (idx, o) {
			$(o).addClass(`bg${idx + 1}`);
			const tg = $(this);
			const tgtop = tg.offset().top;
			if (winSCT > tgtop) {
				tg.find('.box').css('transform', 'translateX(0%)');
			} else if (winSCT > tgtop) {
				tg.find('.box').css('transform', 'translateX(0%)');
			} else if (winSCT > tgtop) {
				tg.find('.box').css('transform', 'translateX(0%)');
			}
		});
	});
});
