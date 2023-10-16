$(function(){
    var header=$('.page-header'),
    headerOST=header.offset().top+header.outerHeight();
    var win=$(window);

    var headerClone=header.contents().clone();
    var headerCloneContainer=$('<div class="page-header-clone"></div>');
    headerCloneContainer.append(headerClone);
    headerCloneContainer.appendTo('body');

    win.scroll (function(){
        if(win.scrollTop()> headerOST){
            headerCloneContainer.addClass('visible')
        }else{
            headerCloneContainer.removeClass('visible')
        }
    })

})
$(function () {
	var charts = $(".charts");
	var chart = $(".chart");
	var chartOST = chart.offset().top - 700;

	$(window).scroll(function () {
		var currentSCT = $(this).scrollTop();
		if (currentSCT >= chartOST) {
			if (!charts.hasClass("active")) {
				progressAnimation();
				charts.addClass("active");
			}
		}
	});

	function progressAnimation() {
		chart.each(function () {
			var $this = $(this),
				title = $this.find("h2"),
				targetNum = title.attr("data-num"),
				circle = $this.find("circle");

			$({rate: 0}).animate(
				{rate: targetNum},
				{
					duration: 1500,
					progress: function () {
						var now = this.rate;
						var amount = 436 - (436 * now) / 100;
						title.text(Math.floor(now) + "%");
						circle.css({strokeDashoffset: amount});
					},
				}
			);
		});
	}
});
var $sticky = $(".target");
var $stickyrStopper = $(".sticky-stopper");
if (!!$sticky.offset()) {
	var generalSidebarHeight = $sticky.innerHeight();
	var stickyTop = $sticky.offset().top;
	var stickOffset = 0;
	var stickyStopperPosition = $stickyrStopper.offset().top;
	var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
	// var diff = stopPoint+ stickOffset;
	var diff = stickOffset;
	console.log(stickOffset);
	$(window).scroll(function () {
		// scroll event
		var windowTop = $(window).scrollTop(); // returns number
		if (stopPoint < windowTop) {
			$sticky.removeClass('on1');
			$sticky.removeClass('on2');
			$sticky.addClass('on3');
			// $sticky.attr('style','position:absolute;bottom:0;')
			// $sticky.css({position: "absolute", bottom:0});
		} else if (stickyTop < windowTop + stickOffset + 300 ) {
			$sticky.removeClass('on2');
			$sticky.removeClass('on3');
			$sticky.addClass('on1')
			// $sticky.css({position: "fixed", top: stickOffset});
		} else {
			$sticky.removeClass('on1');
			$sticky.removeClass('on3');
			$sticky.addClass('on2');
			// $sticky.css({position: "absolute", top: stickOffset});
		}
	});
}
