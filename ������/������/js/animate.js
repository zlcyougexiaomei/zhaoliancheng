$(function(){
	
	
	
	
	
	
	$("#head-bottom ul li img").mouseenter(function(){
	  $(this).animate({top:-10});	
	});
	$("#head-bottom ul li img").mouseleave(function(){
	  $(this).animate({top:5});	
	})
	
	/*明星产品区域*/
	$(".main .main-L ").mouseenter(function(){
	  $(this).children("img").animate({top:-10});	
	  
	});
	$(".main .main-L ").mouseleave(function(){
	   $(this).children("img").animate({top:10});	
	  
	})
	
	$(".main .main-T ul li ").mouseenter(function(){
		  $(this).children("img").animate({top:-10});	
	})
	$(".main .main-T ul li ").mouseleave(function(){
		 $(this).children("img").animate({top:10});	
	})
	
	
	
	$(".main .main-Bott .main-BL li").mouseenter(function(){
		$(this).children("img").animate({top:-10});
	})
	
	$(".main .main-Bott .main-BL li").mouseleave(function(){
		$(this).children("img").animate({top:10});
	})
	
	$(".main .main-Bott .main-Bott-R").mouseenter(function(){
		$(this).children("img").animate({top:-10});
		$(this).children("a").css("color","red");
	})
	$(".main .main-Bott .main-Bott-R").mouseleave(function(){
		$(this).children("img").animate({top:10});
		$(this).children("a").css("color","");
	})
	
	
	$(".main-foot .foot-img li ").mouseenter(function(){
		$(this).children("img").animate({top:-10});
		
		
	})
	$(".main-foot .foot-img li").mouseleave(function(){
		$(this).children("img").animate({top:10});
	
	})
	
	 $(".footer .foot-inner a").click(function(){
	 	 /*if($(this).html("∨")){
	 	 	$(this).html=("∧");
	 	 }else{
	 	 	$(this).html=("∨");
	 	 }*/
	 	
	 	if($(this).html() == "∨"){
	 		$(this).html("∧");
	 		//$(".footer ").animate({height:1000});
	 		//$(".footer ").attr("className", ".footer2");
	 		$(".footer ").css("height",200)
	 	}else{
	 		$(this).html("∨");
	 		$(".footer ").animate({height:42});
	 	}
	 })
	 
	
	
	
	
	
	
	
	/*$(this).animate({width: 300}, 2000).delay(1000).animate({height: 300}, 2000);*/
	   
	 
		  /* $(".footer").animate({height:1000},function(){
		   $(".footer .foot-inner a ").click(function(){
		   		∧∨
		   		  $(".footer").animate({height:42})
		   	})
		   	
		   	if(btn.innerHTML=="下拉"){
				btn.innerHTML="隐藏";
				$(".wrap-footer").height('500')
			}else{
				btn.innerHTML="下拉";
				$(".wrap-footer").height('250')
			}
		   		
		    });*/
		   
		

	
        
	
	
	
	
	
	
})