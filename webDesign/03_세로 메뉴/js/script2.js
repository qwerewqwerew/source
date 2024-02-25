$(function(){
    var nav_bg=$('.nav_bg');
    nav_bg.hide();
    $('.nav>ul>li').hover(function(){
        nav_bg.stop().slideDown(500);
         $('.nav>ul>li>.sub').stop().slideDown(500);
    },function(){
        nav_bg.stop().slideUp(500);
         $('.nav>ul>li>.sub').stop().slideUp(500);
    });
});