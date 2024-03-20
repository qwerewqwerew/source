document.addEventListener('DOMContentLoaded', function () {
	const circles = document.querySelectorAll('.circular-pbar');

	circles.forEach((element) => {
		const counter = element.querySelector('.circular-pbar-counter');
		const target = counter.textContent + '%';

		const tm = gsap.timeline({
			defaults: {
				duration: 4,
				ease: 'expo.out',
			},
			scrollTrigger: {
				trigger: element,
				toggleActions: 'play pause resume reset',
			},
		});

		tm.from(counter, {
			textContent: 0,
			modifiers: {
				textContent: (textContent) => textContent.toFixed(),
			},
		});

		tm.to(
			element,
			{
				'--p': target,
			},
			0
		);
	});
});
