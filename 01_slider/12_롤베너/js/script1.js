jQuery(document).ready(function(){

	var onBtn=$('#roll_banner dt a:first');
	$('#roll_banner dt a').on('click', function(){
		var idx=$('#roll_banner dt a').index(this);
		$('#roll_banner dd:visible').hide();
		$('#roll_banner dd').eq(idx).show();
		
		$('img',onBtn).attr('src',$('img',onBtn).attr('src').replace("over.gif","out.gif"));
		$('img',this).attr('src',$('img',this).attr('src').replace('out.gif','over.gif'));
		
		onBtn=$(this);
		
		return false;
	});
	
	var n=0;
	function autoBnn(){
		n++;
		if(n>=4) n=0;
		
		$('#roll_banner dt a').eq(n).click();
		auto=setTimeout(autoBnn,3000);
	}
	
	var auto=setTimeout(autoBnn,3000);
	
	
});