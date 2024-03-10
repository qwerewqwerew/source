(function () {
	let g_canScroll;
	init();
	//초기화
	function init() {
		setSticky();
		bindEvents();
	}

	function bindEvents() {
		window.addEventListener('wheel', wheelHandler);
	}

	function setSticky() {
		document.querySelectorAll('.sticky').forEach(function (container) {
			// scrollWidth=전체 스크롤바를 사용하게 되어 숨겨진 영역까지 포함한 크기를 리턴
			const stikyContainerHeight = container.querySelector('main').scrollWidth;
			//.sticky의 높이를 각각 스크롤 너비와 같게 함
			container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
		});
	}
	//요소가 화면에 들어왔는지를 확인하는 함수
	function isInView(el) {
		const rect = el.getBoundingClientRect();
		//요소가 화면에 있을경운
		console.log('document.documentElement', document.documentElement);
		return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
	}

	function wheelHandler(e) {
		// https://ko.javascript.info/iterable

		const elInView = Array.from(document.querySelectorAll('.sticky')).filter(function (el) {
			return isInView(el);
		})[0];
		if (!elInView) {
			return;
		}
		console.log('elInView', elInView);
		let isPlaceHolderBelowTop = elInView.offsetTop < document.documentElement.scrollTop; //.sticky-container의 상단좌표를 스크롤보다 작은지 비교
		let isPlaceHolderBelowBottom = elInView.offsetTop + elInView.offsetHeight > document.documentElement.scrollTop; //.sticky-container 탑과 높이를 합하고(길이) 스크롤양보다 큰지비교
		g_canScroll = isPlaceHolderBelowTop && isPlaceHolderBelowBottom; //true 는 보이는 상태
		console.log(elInView, elInView.offsetTop, isPlaceHolderBelowBottom);
		elInView.querySelector('main').scrollLeft += e.deltaY;
	}
})();
