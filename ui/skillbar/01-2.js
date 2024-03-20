const circles = document.querySelectorAll('.circular-pbar');
circles.forEach((el) => {
	const counter = el.querySelector('.circular-pbar-counter');
	const tg = counter.textContent + '%';
  console.log(tg);
	const tm = gsap.timeline({
		defaults: { duration: 4, ease: 'expo.out' },
		scrollTrigger: {
			trigger: el,
			toggleActions: 'play pause resume reset',
		},
	});

	tm.from(counter, {
		textContent: 0,
		modifiers: {
			textContent: (text) => {
				return text.toFixed();
			},
		},
	});

	tm.to(el, { '--p': tg }, 0);
});
