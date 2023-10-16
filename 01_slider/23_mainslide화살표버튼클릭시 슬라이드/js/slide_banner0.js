$(function () {
	var visual = $('#brandVisual>ul>li'); // 슬라이드 이미지
	var button = $('#buttonList>li'); // 버튼
	var current = 0; // 현재 보이는 이미지

	/* 슬라이드 위치초기화 */
	visual.css('left', '0');
	visual.each((i, e) => {
		console.log(i, e, $(e));
		var tg = $(this);
		console.log(tg.class);
	});
});
