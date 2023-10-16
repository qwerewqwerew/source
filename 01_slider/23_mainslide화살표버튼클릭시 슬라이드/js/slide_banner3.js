$(function () {
	var visual = $('#brandVisual>ul>li'); // 슬라이드 이미지
	var button = $('#buttonList>li'); // 버튼
	var leftBtn = $('.btnImg .prev');
	var rightBtn = $('.btnImg .next');
	var current = 0; // 현재 보이는 이미지
	var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함

	timer();
	function timer() {
		setIntervalId = setInterval(function () {
			var prev = visual.eq(current);
			var pn = button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');

			current++;

			if (current == visual.length) current = 0;

			var next = visual.eq(current);
			var pnn = button.eq(current);
			move(next, '100%', 0);
			pnn.addClass('on');
		}, 4000);
	}

	function move(tg, start, end) {
		tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' });
	}

	button.on({
		click: function () {
			var tg = $(this);
			var i = tg.index();
			button.removeClass('on');
			tg.addClass('on');
			move1(i);
		},
	});

	function move1(i) {
		if (current == i) return;
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);

		currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500);
		nextEl.css({ left: '100%' }).stop().animate({ left: 0 }, 500);

		current = i;

		/*추가*/
		var progressWrap = $('.progress_bar');
		var progressBar = progressWrap.find('.bar');
		progressBar.css('width', '0%').animate({ width: '100%' }, 2000);
	}
	/*추가
	function move2(i){
		if(current==i) return;
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'100%'},500);
		nextEl.css('left','-100%').stop().animate({left:0},500);
		current=i;
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
	}
*/
	$('#wrap').on({
		mouseover: function () {
			clearInterval(setIntervalId);
			//추가
			clearInterval(setIntervalLine);
		},
		mouseout: function () {
			timer();
			//추가
			line();
		},
	});

	rightBtn.click(function () {
		var prev = visual.eq(current);
		var pn = button.eq(current);
		move(prev, 0, '-100%');
		pn.removeClass('on');

		current++;

		if (current == visual.length) current = 0;

		var next = visual.eq(current);
		var pnn = button.eq(current);
		move(next, '100%', 0);
		pnn.addClass('on');
		/*추가*/
		var progressWrap = $('.progress_bar');
		var progressBar = progressWrap.find('.bar');
		progressBar.css('width', '0').animate({ width: '100%' }, 2000);

		return false;
	});

	leftBtn.click(function () {
		var prev = visual.eq(current);
		var pn = button.eq(current);
		move(prev, 0, '100%');
		pn.removeClass('on');

		current--;

		if (current == -visual.length) current = 0;

		var next = visual.eq(current);
		var pnn = button.eq(current);
		move(next, '-100%', 0);
		pnn.addClass('on');
		/*추가*/
		var progressWrap = $('.progress_bar');
		var progressBar = progressWrap.find('.bar');
		progressBar.css('width', '0').animate({ width: '100%' }, 2000);

		return false;
	});

	//추가
	var setIntervalLine;
	line();
	var progressWrap = $('.progress_bar');
	var progressBar = progressWrap.find('.bar');
	progressBar.animate({ width: '100%' }, 2000);
	function line() {
		setIntervalLine = setInterval(function () {
			progressBar.css('width', '0').animate({ width: '100%' }, 2000);
		}, 4000);
	}
	//라인함수의 반복실행은 4초 애니메이트는 절반 2초
});
