jQuery(document).ready(function(){
	//버튼을 클릭하면 이미지 바뀌어라
	var onBtn=$('#roll_banner dt a:first');//2번
	$('#roll_banner dt a').on("click", function(){//번
		var idx=$("#roll_banner dt a").index(this);
		$("#roll_banner dd:visible").hide();
		$('#roll_banner dd').eq(idx).show();
		
		$("img",onBtn).attr("src",$("img",onBtn).attr("src").replace("over.gif","out.gif")); //3번 하나만 쓰면 뭐야$("img",onBtn).attr("src") , 두개 쓰면 이것을 지금 쓰는 것으로 바꿔
		$('img',this).attr("src",$("img",this).attr("src").replace("out.gif","over.gif"));//문자를 교체
		
			onBtn=$(this);//5번 
			
			
		return false;// 4번 링크차단
	});
	
		var n=0;// 6번 초기값
		function autoBnn(){
		 n++;
		 if(n>=4) n=0;//이미지가 4개가 다 돌아가면 다시 처음부터 돌아가라
		 //console.log(n);
		 $("#roll_banner dt a").eq(n).click();// 9번 0~3증가 되므로 클릭이라는 강제 버튼 적용하여 자동으로 클릭함수로 인해 자동으로 클릭됨
		 
		auto=setTimeout(autoBnn,3000);//8번  재귀함수 자기 자신이 불러냄 다시 처음부터 실행 또 3초후에 실행
		}
		var auto=setTimeout(autoBnn,3000);//  7번 딱한번만 실행
		
		
		$("#roll_banner .stop").on("click", function(){//10번
			clearTimeout(auto);
			
			return false;//링크차단
		});
		$("#roll_banner .start").on("click", function(){
			clearTimeout(auto);//계속해서 클릭을 하게 되면  메모리에 저장되는것을 막기 위해
			auto=setTimeout(autoBnn,3000);
			
			return false;
		});
	
  });
   
  
  
