$(() => {
	//변수초기화
	const visual = $('#brand_visual>ul>li');
	const next = $('.btnImg>img[alt=right]');
	const prev = $('.btnImg>img[alt=left]');
	const pager = $('.pager li');
	let current = 0;
	let setIntervalID;
	//console.log(pager);
	//간격마다 실행함수
	//clearInterval(setIntervalID)
	timer();
	function timer() {
		setIntervalID = setInterval(() => {
			slideFn();
		}, 2000);
	}
	//슬라이드 인덱스번호 계산함수
	function slideFn() {
		let prev = visual.eq(current);
		let prevPage = pager.eq(current);
		move(prev, '0%', '-100%');
		prevPage.removeClass('on');
		current++;
		if (current == visual.length) {
			current = 0;
		}
		let next = visual.eq(current);
		let nextPage = pager.eq(current);
		move(next, '100%', '0%');
		nextPage.addClass('on');
	}

	//움직이는 함수
	function move(tg, start, end) {
		tg.css('left', start).stop().animate({ left: end }, 500, 'easeOutCubic');
	}

	//정지,실행하기
	$('#slide_wrap').on({
		mouseenter: function () {
			clearInterval(setIntervalID);
		},
		mouseleave: function () {
			timer();
		},
	});

	//컨트롤 함수
	next.on('click', function () {
		let prev = visual.eq(current);
		let prevPage = pager.eq(current);
		move(prev, '0%', '-100%');
		prevPage.removeClass('on');
		current++;
		if (current == visual.length) {
			current = 0;
		}
		let next = visual.eq(current);
		let nextPage = pager.eq(current);
		move(next, '100%', '0%');
		nextPage.addClass('on');
	});
	prev.on('click', function () {
		let prev = visual.eq(current);
		let prevPage = pager.eq(current);
		move(prev, '0%', '100%');
		prevPage.removeClass('on');
		current--;
		if (current == -visual.length) {
			current = 0;
		}
		let next = visual.eq(current);
		let nextPage = pager.eq(current);
		move(next, '-100%', '0%');
		nextPage.addClass('on');
	});
	//페이저버튼
	pager.on('click', function () {
		const i = $(this).index();
		pager.removeClass('on');
		$(this).addClass('on');
		pagerMove(i);
	});
	function pagerMove(i) {
		let currentEl = visual.eq(current); //0
		let nextEl = visual.eq(i); //2
		console.log(currentEl, nextEl);
		if (current < i) {
			currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500);
			nextEl.css({ left: '100%' }).stop().animate({ left: '0%' }, 500);
		} else if (current > i) {
			currentEl.css({ left: 0 }).stop().animate({ left: '100%' }, 500);
			nextEl.css({ left: '-100%' }).stop().animate({ left: '0%' }, 500);
		}
		current = i;
	}
}); //jQuery
