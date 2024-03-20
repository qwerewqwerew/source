addEventListener('load', () => {
	const sections = document.querySelectorAll('section');
	let speed = Math.floor(document.body.scrollHeight * 0.5);
	let topArr = [];
	let winSCT;

	sections.forEach((section, idx) => {
		section.classList.add(`bg${idx + 1}`);
		const sectionTop = section.offsetTop;
		topArr.push(sectionTop);
	});

	console.log(topArr);
	const scrollAni = (a) => {
		if (a > topArr[0] - speed) {
			sections[0].querySelectorAll('.box').forEach((el) => {
				el.style.transform = 'translateX(0%)';
			});
		}
		if (a > topArr[1] - speed) {
			sections[1].querySelector('.bg3').animate([{ top: '5vw', opacity: 1 }], { duration: 500, delay: 0 });
			sections[1].querySelector('.bg4').animate([{ top: '0vw', opacity: 1 }], { duration: 800, delay: 300 });
			sections[1].querySelector('.bg5').animate([{ top: '-5vw', opacity: 1 }], { duration: 1100, delay: 600 });
		}
		if (a > topArr[2] - speed) {
			console.log(a > topArr[2] && a < topArr[3]);
			sections.eq(2).classList.add('is-animated');
		}
		if (a > topArr[3] - speed) {
			sections.forEach((el) => {
				el.removeClass('is-animated');
			});
			sections[3].addClass('is-animated');
		}
	};
	/* 스크롤함수 */
	window.addEventListener('scroll', () => {
		winSCT = this.scrollY;
		scrollAni(winSCT);
	});
	function pipScroll() {
		const section = sections[3];
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
});
