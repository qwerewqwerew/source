const contents = $('.section');
let secArr = [];
contents.each((index) => {
  secArr.push(index);
});

let w;
let h;
$(window).resize(function () {
  w = $(window).width();
  h = $(window).height();
  contents.height(h);
  contents.width(w);
  $('#wrap').height(h);
});
$(window).trigger('resize');

// 초기 위치 설정
$('html,body').stop().animate({ scrollLeft: contents.eq(1).offset().left }, 1300);

$('.top_logo').click(function () {
  $('html,body').stop().animate({ scrollLeft: contents.eq(0).offset().left }, 1300);
});

$('.lnb > li').click(function (e) {
  e.preventDefault();
	const i = $(this).index();
	const wt = $(window).width();
	const nowLeft = i * wt;
	$('html,body').stop().animate({ scrollLeft: nowLeft }, 1300);
});

contents.on('wheel', function (event) {
	let currentIndex = $(this).index();

	if (event.originalEvent.deltaY > 0) { // 마우스 휠 아래로 스크롤
		currentIndex++;
		if (currentIndex >= secArr.length) { // 마지막 요소를 넘어가면 처음 요소로 돌아감
			currentIndex = secArr[0];
		}
    $('html,body').stop().animate({ scrollLeft: contents.eq(currentIndex).offset().left }, 'easeOutSine');

    event.preventDefault();

   } else if (event.originalEvent.deltaY < 0) { // 마우스 휠 위로 스크롤
     currentIndex--;
     if (currentIndex < secArr[0]) { // 첫번째 요소를 넘어가면 마지막 요소로 돌아감
       currentIndex = secArr[secArr.length -1];
     }
     $('html,body').stop().animate({ scrollLeft: contents.eq(currentIndex).offset().left }, 'easeOutSine');

     event.preventDefault();
   }
});
