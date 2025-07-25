$(function () {
	var $header = $('.page-header'),
		$headerOST = $header.offset().top;

	$(window).scroll(function () {
		var $currentSCT = $(this).scrollTop();
		if ($currentSCT > $headerOST) {
			$header.addClass('sticky');
		} else {
			$header.removeClass('sticky');
		}
	});
}); //window ready

// DOM이 완전히 로드된 후 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', function () {
  // 1. 클래스가 'page-header'인 요소를 선택합니다.
  const header = document.querySelector('.page-header');

  // 2. 헤더의 문서 상단으로부터의 초기 위치(Y 좌표)를 가져옵니다.
  const headerOffsetTop = header.offsetTop;

  // 3. 윈도우에 스크롤 이벤트를 추가합니다.
  window.addEventListener('scroll', function () {
    // 4. 현재 스크롤된 Y축 위치를 가져옵니다.
    const currentScrollTop = window.scrollY;

    // 5. 현재 스크롤 위치가 헤더의 초기 위치보다 크면
    if (currentScrollTop > headerOffsetTop) {
      // 'sticky' 클래스를 추가합니다.
      header.classList.add('sticky');
    } else {
      // 그렇지 않으면 'sticky' 클래스를 제거합니다.
      header.classList.remove('sticky');
    }
  });
});