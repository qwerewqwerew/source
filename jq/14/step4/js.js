$(() => {
	const sections = $('section');
	let speed = Math.floor($(window).height() * 0.5);
	let topArr = [];
	let winSCT;
	sections.each((idx, section) => {
		$(section).addClass(`bg${idx + 1}`);
		const sectionTop = $(section).offset().top;
		topArr.push(sectionTop);
	});

	/* 스크롤함수 */
	$(window).on('scroll', () => {
		winSCT = $(window).scrollTop();
		if (winSCT > topArr[0] && winSCT < topArr[1] - speed) {
			sections.eq(0).find('.box').css('transform', 'translateX(0%)');
		}

		if (winSCT > topArr[1] && winSCT < topArr[2] - speed) {
			sections.eq(1).find('.bg3').stop().delay(0).animate({ top: '5vw', opacity: 1 }, 500, 'swing');
			sections.eq(1).find('.bg4').stop().delay(200).animate({ top: '0vw', opacity: 1 }, 800, 'swing');
			sections.eq(1).find('.bg5').stop().delay(300).animate({ top: '-5vw', opacity: 1 }, 1100, 'swing');
		}

		if (winSCT > topArr[2] && winSCT < topArr[3] - speed) {
			console.log(winSCT > topArr[2] && winSCT < topArr[3]);
			sections.eq(2).addClass('is-animated');
		}
		if (winSCT > topArr[3] && winSCT < topArr[4]) {
			sections.eq(3).addClass('is-animated').siblings.removeClass('is-animated');
		}
	});
	pipScroll();
	function pipScroll() {
		const section = sections.eq(3);
		const devices = ['.mockup.pc', '.mockup.mobile'];
		$.each(devices, function (i, deviceEl) {
			let device = section.find(deviceEl);
			let screen = device.find('.mask>img');
			let mask = device.find('.mask');
			let heightDifference = screen.innerHeight() - mask.innerHeight();
			console.log(device.innerHeight());
			device.data('heightDifference', heightDifference);
			console.log(heightDifference);
			device.on({
				mouseenter: function () {
					if (section.hasClass('is-animated')) {
						screen.stop().animate({ top: -heightDifference }, 1000);
					}
				},
				mouseleave: function () {
					if (section.hasClass('is-animated')) {
						screen.stop().animate({ top: 0 }, 1000);
					}
				},
			});
		});
		// 윈도우 크기가 변경될 때 heightDifference를 다시 계산.
	} //pipScroll

	$(window).on('resize', function () {
		pipScroll();
	});


}); //jQuery
