(() => {
	let g_inViewPort;
	let target = 0;
	let ease = 0.2;
	const stickyEls = document.querySelectorAll('.sticky');
	const mainEl = document.querySelector('main');
	console.log(stickyEls);
	//초기화
	init();
	function init() {
		setSticky();
		bindEvents;
	}
	//이벤트연결
	function bindEvents() {
		window.addEventListener('wheel', wheelHandler);
	}
	//스티키컨테이너사이즈
	function setSticky() {
		stickyEls.forEach((container) => {
			const main = container.querySelector('main');
			// scrollWidth=전체 스크롤바를 사용하게 되어 숨겨진 영역까지 포함한 크기를 리턴
			const stickyConH = main.scrollWidth;
			container.setAttribute('style', `height:${stickyConH}px`);
		});
	}
	//요소가 화면에 진입했는지 확인
	function isView(el) {
		/* https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect */
		const rect = el.getBoundingClientRect();
		//요소가 화면에 있을경우
		console.log('document.documentElement', document.documentElement);
		//https://id.javascript.info/size-and-scroll-window
		return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
	}
	//부드러운스크롤
	function smoothScroll() {}
	//이벤트핸들러
	function wheelHandler(e) {
		const inViewPort = Array.from(stickyEls).filter((el) => {
			return isElInView(el);
		})[0];
		if (!inViewPort) {
			return;
		}
		//.sticky의 상단좌표가 스크롤상단보다 작은지 비교
		let isPlaceTop = inViewPort.offsetTop < document.documentElement.scrollTop;
		//.sticky 탑과 높이를 합하고(길이) 스크롤양보다 큰지비교
		let isPlaceBottom = inViewPort.offsetTop + inViewPort.offsetHeight < document.documentElement.scrollTop;
		//스크롤가능여부 true 는 보이는 상태
		let canScrollH = isPlaceTop && isPlaceBottom;
		if (canScrollH) {
			inViewPort.containerInViewPort.querySelector('main').scrollLeft += e.deltaY;
		}
	}
})();
