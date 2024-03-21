gsap.set('.data', { rotation: -90, transformOrigin: 'center', drawSVG: '0' });

var action = gsap
	.timeline({
		defaults: { duration: 2, ease: 'none' },
		scrollTrigger: {
			trigger: 'section',
			pin: true,
			scrub: true,
			start: 'top -1px',
			end: '+=1000',
			markers: true,
			onUpdate: (self) => {
				var no = self.progress.toFixed(2) * 100;
				gsap.set('.text', { textContent: no });
				//gsap.set(".text", {textContent:no * 100 + '%'})
			},
		},
	})
	.set('.text', { autoAlpha: 1 })
	.to('.data', { drawSVG: '100%', duration: 3, ease: 'none' });
