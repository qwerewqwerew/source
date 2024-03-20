$(() => {
	const sections = $('section');
	const totalH = $('body').prop('scrollHeight');
	let speed = Math.floor(totalH * 0.5);
	console.log($('body').prop('scrollHeight'));
	console.log(document.body.scrollHeight);
	let topArr = [];
	let winSCT;
	sections.each((idx, section) => {
		$(section).addClass(`bg${idx + 1}`);
		const sectionTop = $(section).offset().top;
		topArr.push(sectionTop);
	});
	console.log(topArr);
	const scrollAni = (a) => {
		if (a > topArr[0] - speed) {
			sections.eq(0).find('.box').css('transform', 'translateX(0%)');
		}
		if (a > topArr[1] - speed) {
			sections.eq(1).find('.bg3').stop().delay(0).animate({ top: '5vw', opacity: 1 }, 500, 'swing');
			sections.eq(1).find('.bg4').stop().delay(200).animate({ top: '0vw', opacity: 1 }, 800, 'swing');
			sections.eq(1).find('.bg5').stop().delay(300).animate({ top: '-5vw', opacity: 1 }, 1100, 'swing');
		}
		if (a > topArr[2] - speed) {
			console.log(a > topArr[2] && a < topArr[3]);
			sections.eq(2).addClass('is-animated');
		}
		if (a > topArr[3] - speed) {
			sections.removeClass('is-animated');
			sections.eq(3).addClass('is-animated');
			pipScroll();
		}
	};
	/* 스크롤함수 */
	$(window).on('scroll', () => {
		winSCT = $(window).scrollTop();
		scrollAni(winSCT);
	});
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
