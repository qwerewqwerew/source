(function () {
	init();
	let g_containerInViewport;
	let target = 0;
	let ease = 0.1;
	//초기화
	function init() {
		setStickyContainersSize();
		bindEvents();
	}

	function bindEvents() {
		window.addEventListener('wheel', wheelHandler);
	}

	function setStickyContainersSize() {
		document.querySelectorAll('.sticky').forEach(function (container) {
			// scrollWidth=전체 스크롤바를 사용하게 되어 숨겨진 영역까지 포함한 크기를 리턴
			const stikyContainerHeight = container.querySelector('main').scrollWidth;
			//.sticky의 높이를 각각 스크롤 너비와 같게 함
			container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
		});
	}
	//요소가 화면에 들어왔는지를 확인하는 함수
	function isElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		//요소가 화면에 있을경운
		console.log('document.documentElement', document.documentElement);
		return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
	}

	function wheelHandler(e) {
		// https://ko.javascript.info/iterable

		const containerInViewPort = Array.from(document.querySelectorAll('.sticky')).filter(function (container) {
			return isElementInViewport(container);
		})[0];
		if (!containerInViewPort) {
			return;
		}
		console.log('containerInViewPort', containerInViewPort);
		let isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop; //.sticky-container의 상단좌표를 스크롤보다 작은지 비교
		let isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop; //.sticky-container 탑과 높이를 합하고(길이) 스크롤양보다 큰지비교
		let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom; //true 는 보이는 상태

		console.log(containerInViewPort, containerInViewPort.offsetTop, isPlaceHolderBelowBottom);

		if (g_canScrollHorizontally) {
			const smoothScroll = () => {
				containerInViewPort.querySelector('main').scrollLeft += (target - containerInViewPort.querySelector('main').scrollLeft) * ease;
				requestAnimationFrame(smoothScroll); // 부드럽게 이동하도록 애니메이션 추가
			};
			//containerInViewPort.querySelector('main').scrollLeft += e.deltaY;
		}
	}
})();
