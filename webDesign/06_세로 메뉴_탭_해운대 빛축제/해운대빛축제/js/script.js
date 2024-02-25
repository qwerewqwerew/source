jQuery(document).ready(function(){
	/* 메뉴 */
	$(".nav>ul>li").hover(function(){
		$(this).find('.sub').stop().slideDown();
	},function(){
		$(this).find('.sub').stop().slideUp();
	});
	
	/* 슬라이드 이미지 */
	var current=0;
	var banner=$('.slide>img');
	setInterval(function(){
		var prev=banner.eq(current);
		move(prev,1,0);
		current++;
		if(current==banner.length){current=0;}
		var next=banner.eq(current);
		move(next,0,1);
	},3000);
	function move(tg,start,end){
		tg.css({'opacity':start}).stop().animate({'opacity':end},500);
	}
	
	/* 탭 */
	var tab=$(".tab>li");
	var content=$(".tab_con>div");
	   
	content.hide().eq(0).show();
	tab.click(function(event){
		event.preventDefault();
		var tg=$(this);
		var i=tg.index();
		tab.removeClass("active");
		tg.addClass("active");
		content.css("display","none");
		content.eq(i).css("display","block");
	});
	
	/* 팝업 */
	$('#contents .popup').click(function(){
		$('.pop').css('display','block');
	});
	$('.pop button').click(function(){
		$('.pop').css('display','none');
	});
});