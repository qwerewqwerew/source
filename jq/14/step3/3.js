$(() => {
	const sections = $('section');
	let speed = Math.floor($(window).height() * 0.5);
	let topArr = [];
	let winSCT;
	let isAnimate = false;
	console.log(speed);

	sections.each((idx, section) => {
		$(section).addClass(`bg${idx + 1}`);
		const sectionTop = $(section).offset().top;
		topArr.push(sectionTop);
	});

	$(window).on('scroll', () => {
		winSCT = $(window).scrollTop();

		if (winSCT > topArr[0] && winSCT < topArr[1] - speed && !isAnimate) {
			sections.eq(0).find('.box').css('transform', 'translateX(0%)');
		}

		if (winSCT > topArr[1] && winSCT < topArr[2] - speed) {
			sections.eq(1).find('.bg3').stop().delay(100).animate({ top: 0, opacity: 1 }, 500, 'swing');
			sections.eq(1).find('.bg4').stop().delay(200).animate({ top: -100, opacity: 1 }, 800, 'swing');
			sections.eq(1).find('.bg5').stop().delay(300).animate({ top: -200, opacity: 1 }, 1100, 'swing');
		} else {
			sections.eq(1).find('.bg3').stop().css({ top: '100%', opacity: 0 });
			sections.eq(1).find('.bg4').stop().css({ top: '100%', opacity: 0 });
			sections.eq(1).find('.bg5').stop().css({ top: '100%', opacity: 0 });
		}

		if (winSCT > topArr[2] && winSCT < topArr[3] - speed) {
			console.log(winSCT > topArr[2] && winSCT < topArr[3]);
			sections.eq(2).addClass('is-animated');
		}else{
      sections.eq(2).removeClass('is-animated');
    }
	});
});
