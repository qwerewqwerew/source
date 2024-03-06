$.fn.mySlider = function () {
  console.log(this);
	const visual = this.find('.brandVisual>ul>li');
	const button = this.find('.buttonList>li');
	const leftBtn = this.find('.btnImg .prev');
	const rightBtn = this.find('.btnImg .next');
	const pager = this.find('.buttonList');
	let el = '';
	let setIntervalId;
	const counter = this.find('.counter');
	let current = 0;

	visual.each(() => {
		el = $('<li><a href="#"></a></li>');
		pager.append(el);
	});

	function timer() {
		setIntervalId = setInterval(function () {
			changeSlide((current + 1) % visual.length); // 0%3=0/1%3=1/2%3=2/3%3=0
		}, 3000);
	}

	function move(tg, start, end) {
		tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' });
	}

	function cnt(num) {
		counter.html(`${num + 1}`);
	}

	button.on('click', function () {
		const i = $(this).index();
		changeSlide(i);
	});

	function changeSlide(i, direction = 'right') {
		if (current == i) return;
		const currentEl = visual.eq(current);
		const nextEl = visual.eq(i);
		if (direction === 'right') {
			move(currentEl, 0, '-100%');
			move(nextEl, '100%', 0);
		} else {
			move(currentEl, 0, '100%');
			move(nextEl, '-100%', 0);
		}
		button.eq(current).removeClass('on');
		button.eq(i).addClass('on');
		cnt(i);
		current = i;
	}

	this.on({
		mouseover: function () {
			clearInterval(setIntervalId);
		},
		mouseout: timer,
	});

	rightBtn.click(function () {
		changeSlide((current + 1) % visual.length);
		return false;
	});

	leftBtn.click(function () {
		changeSlide((current - 1 + visual.length) % visual.length, 'left');
		return false;
	});

	 timer(); // timer를 마지막에 호출하여 초기 슬라이드 쇼를 시작
	return this;
};
