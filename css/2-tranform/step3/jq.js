var o = $('.card');
var o2 = $('h2');
$('#top').on('mousemove', function (t) {
	console.log(t);
	var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
		n = ($(window).innerHeight() / 2 - t.pageY) / 10;
	o.attr('style', `transform: rotateY(${e}deg) rotateX(${n}deg)`);
	o2.attr({ style: `transform: rotateY(${e * 0.5}deg) rotateX(${n}deg) translateZ(20px) translateX(${n * 1.5}px)` });
});
