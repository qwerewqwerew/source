gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	toggleActions: 'restart pause resume pause',
	toggleClass: 'active',
});

gsap.to('.orange p', {
	scrollTrigger: '.orange',
	duration: 2,
	rotation: 360,
});

gsap.to('.red', {
	scrollTrigger: {
		trigger: '.red',
		toggleActions: 'restart pause reverse pause',
	},
	duration: 1,
	//backgroundColor: '#FFA500',
	backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1)',
	ease: 'none',
});

gsap.to('.yoyo p', {
	scrollTrigger: '.yoyo',
	scale: 2,
	repeat: -1,
	yoyo: true,
	ease: 'power2',
});

gsap.to('[data-speed]', {
	//y: (i, el) => -parseFloat(el.getAttribute('data-speed')) * ScrollTrigger.maxScroll(window),
	y: (i, el) => ((1 - parseFloat(el.getAttribute('data-speed'))) * (ScrollTrigger.maxScroll(window))),
	ease: 'none',
	scrollTrigger: {
		trigger: '.red',
		//스크롤이 0일때 시작하고, 스크롤이 max에 도달했을 때 종료
		start: 'top top', // '.red' 섹션이 viewport의 상단에 도달했을 때 시작
		end: 'bottom top', // '.red' 섹션의 하단이 viewport의 상단에 도달했을 때 종료
		//스크롤 또는 창 크기 변경 시 애니메이션을 재계산하도록 설정한다
		invalidateOnRefresh: true,
		//스크롤 위치에 따라 애니메이션 진행률을 동기화한다. 0은 즉시 애니메이션을 업데이트한다
		scrub: 0,
		invalidateOnRefresh: true, // 스크롤 또는 창 크기 변경 시 애니메이션을 재계산하도록 설정합니다.
	},
});
