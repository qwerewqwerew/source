$(function(){
    /*메뉴*/
    $(".nav>ul>li").hover(function(){
        $(".nav>ul>li>.sub").stop().slideDown(500);
    },function(){
        $(".nav>ul>li>.sub").stop().slideUp(500);
    });


    /*슬라이드*/
    var banner=$("#banner ul li");
    var current=0;
    setInterval(function(){
        var prev=banner.eq(current);
        move(prev, 0, "-100%");
        current++;
        if(current==banner.size()){current=0;}
        var next=banner.eq(current);
        move(next,"100%",0);
    },3000);

    function move(tg, start, end){
        tg.css('top',start).stop().animate({top:end},500);
    }

    /*탭*/
    var tab=$('.tab>li');
    var content=$('.tab_content>div');
    content.hide().eq(0).show();


    tab.click(function(e){
        e.preventDefault();
        var tg=$(this);
        var i=tg.index();
        tab.removeClass("active");
        tg.addClass("active");
        content.css("display","none");
        content.eq(i).css("display","block");
    });


    /*팝업*/
    $(".popup").click(function(){
        $('.pop').show();
    });

    $(".pop button").click(function(){
        $('.pop').hide();
    });
});