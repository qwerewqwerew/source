'use strict';
new Swiper('.promotion .swiper-container', {
	slidesPerView: 3, //한번에 보여줄 슬라이드 개수
	spaceBetween: 20,
	centeredSlides: true,
	loop: true,
		autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next',
	},
});
