const depth1 = $('.depth1');
depth1.hover(
	function () {
    $('.depth2').css('display','block');
    $('header').addClass('on');
  },
	function () {
    $('.depth2').css('display','none');
    $('header').removeClass('on');
  }
);
