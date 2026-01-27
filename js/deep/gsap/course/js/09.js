let links = gsap.utils.toArray('nav ul li a');

links.forEach((link) => {
	let element = document.querySelector(link.getAttribute('href'));
	let box = element.querySelector('.box');

	// 초기 상태 설정 (박스를 숨김)
	gsap.set(box, { scale: 0, rotation: -180, opacity: 0 });

	let linkST = ScrollTrigger.create({
		trigger: element,
		start: 'top top',
	});

	ScrollTrigger.create({
		trigger: element,
		start: 'top center',
		end: 'bottom center',
		onToggle: (self) => {
			if (self.isActive) {
				setActive(link);
				// 섹션 진입 시 박스 애니메이션
				gsap.to(box, {
					scale: 1,
					rotation: 0,
					opacity: 1,
					duration: 0.8,
					ease: "back.out(1.7)"
				});
			} else {
				// 섹션 벗어날 때 박스 숨김
				gsap.to(box, {
					scale: 0,
					rotation: -180,
					opacity: 0,
					duration: 0.5,
					ease: "back.in(1.7)"
				});
			}
		}
	});

	link.addEventListener('click', (e) => {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: 'auto' });
	});
});

function setActive(link) {
	links.forEach((el) => el.classList.remove('active'));
	link.classList.add('active');
}

ScrollTrigger.create({
	start: 'top -80',
	end: 99999,
	markers: true,
	toggleClass: {
		className: 'active',
		targets: 'nav',
	},
});
