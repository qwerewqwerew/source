
/* slide */
$(function () {
	var visual = $(".slide>ul.slideUl>li");
	var current = 0;
	var setIntervalId=null;
	var leftBtn = $(".btnImg .prev");
	var rightBtn = $(".btnImg .next");
	var button = $(".buttonList>li");
	var check = false;
	var interval=1500;

	function move(target, start, end) {
		target.css("left", start).stop().animate({ left: end }, interval)
	}
	rightBtn.click(function () {
		console.log("a")
		var prev = visual.eq(current)
		var prevBtn = button.eq(current)
		move(prev, 0, "-100%")
		prevBtn.removeClass("on")
		current++
		if (current == visual.length) {
			current = 0
		}
		var next = visual.eq(current)
		var nextBtn = button.eq(current)
		move(next, "100%", 0)
		nextBtn.addClass("on")
		return false
	})
	leftBtn.click(function () {
		var prev = visual.eq(current)
		var prevBtn = button.eq(current)
		move(prev, 0, "100%")
		prevBtn.removeClass("on")
		current--
		if (current == -visual.length) {
			current = 0
		}
		var next = visual.eq(current)
		var nextBtn = button.eq(current)
		move(next, "-100%", "0")
		nextBtn.addClass("on")
		return false
	})
	button.click(function () {
		var tg = $(this)
		var i = tg.index()
		button.removeClass("on")
		tg.addClass("on")
		move1(i)
	})

	function move1(i) {
		if (current == i) return
		var currentEl = visual.eq(current)
		var nextEl = visual.eq(i)
		currentEl.css("left", "0").stop().animate({ left: "-100%" }, interval)
		nextEl.css("left", "100%").stop().animate({ left: "0%" }, interval)
		current = i
	}

	//함수로 실행하고 호출 해야함 정지 실행
	function autoTimer(){
		setIntervalId = setInterval(clickB, interval);
	}

	autoTimer(); //로딩시 실행

	
	function clickB() {
		if (!check) {
			rightBtn.trigger("click")
			check=true;
		}else{
			check=false;
		}
	}


	$(".slide").hover(
		function () {
			clearInterval(setIntervalId);  
		},
		function () {
			// setInterval(clickB, 3000)
			autoTimer(); //함수로 호출실행  
		}
	)

})
