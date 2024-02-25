$(function(){
    $('.nav>ul>li').hover(function(){
         $('.nav>ul>li>.sub').stop().slideDown(500);
    },function(){
         $('.nav>ul>li>.sub').stop().slideUp(500);
    });
});