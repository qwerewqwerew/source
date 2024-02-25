$(function(){
    /*메뉴*/
    $('.nav>ul>li').on('mouseover focus', function(){
        $('.nav ul li .sub').stop().slideDown();
        //$(this).find('.sub').stop().slideDown(500);
    });
    $('.nav>ul>li').on('mouseout blur', function(){
        $('.nav ul li .sub').stop().slideUp(500);
        //$(this).find('.sub').stop().slideUp(500);
    });

    /*팝업*/
    $('.popup').click(function(){
        $('.pop').fadeIn(500);
    });
     $('.pop .pop_wrap button').click(function(){
        $('.pop').fadeOut(500);
    });

    /*이미지슬라이*/
    var banner=$('#banner ul li'),
        current=0,
        timer;

    //function imgslider(){
        timer= setInterval(function(){
        var prev=banner.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current>=banner.size()) current=0;
        var next=banner.eq(current);
        move(next, '100%', 0);
        },3000);
    //}
    //imgslider();


    function move(tg, start, end){
      tg.css('top', start).stop().animate({top:end},500);
    }

   /* $('#banner').hover(function(){
        clearInterval(timer);
    },function(){
        imgslider();
    });*/


    /*탭*/
    var tab=$('.tab > li');
    var content=$('.tab_content>div');
    content.hide().eq(0).show();

    tab.click(function(e){
       e.preventDefault();
        var tg=$(this);
        var i=tg.index();
        //console.log(i);
        tab.removeClass('active');
        tg.addClass('active');
        content.css('display','none');
        content.eq(i).css('display','block');
    });

});










