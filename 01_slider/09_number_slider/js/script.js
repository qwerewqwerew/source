$(function(){
	var banner=$('.visual>ul>li');
	var button2=$('.arrow1_1_center>img.prev');
	var button1=$('.arrow1_1_center>img.next');
	var current=0;
	var setIntervalId;
	var p=$('.section_number>p');
	
	timer01();
	function timer01(){
		setIntervalId=setInterval(function(){
			var prev=banner.eq(current);
			var pn=p.eq(current);
			
			move1(prev, 0, '-100%');
			pn.removeClass('bl');
			current++;
			if(current==banner.size()){
				current=0;
			}
			var next=banner.eq(current);
			var pnn=p.eq(current);
			move1(next, '100%', 0);
			pnn.addClass('bl');
		},2000);
	}
	
	function move1(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	$('.visual').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer01();
	}
	});
	
	button1.click(function(){
		var prev=banner.eq(current);
		var pn=p.eq(current);
		
		move1(prev, 0, '-100%');
		pn.removeClass('bl');
		current++;
		if(current==banner.size()){
			current=0;
		}
		var next=banner.eq(current);
		var pnn=p.eq(current);
		move1(next, '100%', 0);
		pnn.addClass('bl');
	});
	
	button2.click(function(){
		var prev=banner.eq(current);
		var pn=p.eq(current);
		
		move1(prev, 0, '100%');
		pn.removeClass('bl');
		current--;
		if(current==-banner.size()){
			current=0;
		}
		var next=banner.eq(current);
		var pnn=p.eq(current);
		move1(next, '-100%', 0);
		pnn.addClass('bl');
	});
	
});