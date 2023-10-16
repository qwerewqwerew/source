const contents = $('.section');

let w;
let h;
$(window).resize(function () {
	w = $(window).width();
	h = $(window).height();
	contents.height(h);
	//contents.css("height",h);
	contents.width(w);
	$('#wrap').height(h);
});
$(window).trigger('resize');

let left1 = contents.eq(1).offset().left;
//alert(left1);
$('html,body').stop().animate({ scrollLeft: left1 }, 1300);

$('.top_logo').click(function () {
	let left1 = contents.eq(0).offset().left;
	//alert(left1);
	$('html,body').stop().animate({ scrollLeft: left1 }, 1300);
	return false;
});

$('.lnb > li').click(function (e) {
	e.preventDefault(); //return false;
	const i = $(this).index();
	const wt = $(window).width();
	const nowLeft = i * wt;
	$('html,body').stop().animate({ scrollLeft: nowLeft }, 1300);
});



contents.on('wheel', function (event) {

	if (event.originalEvent.deltaY > 0) {
		const prev = $(this).prev().offset().left;
		console.log(prev);
		$('html,body').stop().animate({ scrollLeft: prev }, 1300, 'easeOutSine');
	}

	if (event.originalEvent.deltaY < 0) {
		const next = $(this).next().offset().left;
		$('html,body').stop().animate({ scrollLeft: next }, 1300, 'easeOutSine');
	}
});
