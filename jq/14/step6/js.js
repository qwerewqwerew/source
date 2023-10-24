$(() => {
	const sections = $('section');
	let speed = Math.floor($(window).height() * 0.2);
	let topArr = [];
	let winSCT;
	sections.each((idx, section) => {
		$(section).addClass(`bg${idx + 1}`);
		const sectionTop = Math.floor($(section).offset().top);
		topArr.push(sectionTop);
	});
	console.log(topArr, speed);
	/* 스크롤함수 */
	$(window).on('scroll', () => {
		winSCT = Math.floor($(window).scrollTop());

		if (winSCT > topArr[0]) {
			sections.eq(0).find('.box').css('transform', 'translateX(0%)');
		}
		if (winSCT > topArr[1] - speed) {
			console.log(winSCT > topArr[1] - speed, winSCT, topArr[1] - speed);
			sections.eq(1).find('.bg3').stop().delay(0).animate({ top: '5vw', opacity: 1 }, 500, 'swing');
			sections.eq(1).find('.bg4').stop().delay(200).animate({ top: '0vw', opacity: 1 }, 800, 'swing');
			sections.eq(1).find('.bg5').stop().delay(300).animate({ top: '-5vw', opacity: 1 }, 1100, 'swing');
		}

		if (winSCT > topArr[2] && winSCT < topArr[3] - speed) {
			console.log(winSCT > topArr[2] && winSCT < topArr[3]);
			sections.eq(2).addClass('is-animated');
		}
		if (winSCT > topArr[3] - speed) {
			sections.eq(3).addClass('is-animated').siblings().removeClass('is-animated');
			pipScroll();
		}
		if (winSCT > topArr[4] - speed) {
			sections.eq(4).addClass('is-animated').siblings().removeClass('is-animated');
			pipScroll();
		}
	});

	function pipScroll() {
		//const devices = ['.mockup.pc', '.mockup.mobile'];
		const devices = $('.mockup.pc, .mockup.mobile');
		//$.each(devices, function (i, deviceEl) {
		devices.each(function (i, deviceEl) {
			let device = $(this);
			let screen = device.find('.mask>img');
			let mask = device.find('.mask');
			let heightDifference = screen.innerHeight() - mask.innerHeight();
			console.log(device.innerHeight());
			device.data('heightDifference', heightDifference);
			console.log(heightDifference);
			device.on({
				mouseenter: function () {
					screen.stop().animate({ top: -heightDifference }, 1000);
				},
				mouseleave: function () {
					screen.stop().animate({ top: 0 }, 1000);
				},
			});
		});
		// 윈도우 크기가 변경될 때 heightDifference를 다시 계산.
	} //pipScroll

	$(window).on('resize', function () {
		pipScroll();
	});
}); //jQuery
