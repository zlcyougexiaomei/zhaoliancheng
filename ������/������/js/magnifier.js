$(function(){
	$("#head-top ul li:nth-of-type(9)").mouseenter(function(){
		 div = '<div class:"div">'+
			'<input type="text" name="" id="" value="" />'+
		'</div>'
		$("#head-top ul li:nth-of-type(9)").append(div);
		$("input").animate({width:223});
	})
	
	$("#head-top ul li:nth-of-type(9)").mouseleave(function(){
		 $(this).children("div").remove();
	});
	
	/*
	$(".product-left").mouseover(function(e){
		$("b").show()
		$(".product-right").show();
		var left = e.pageX - 
	})*/
	
	
	
	
	
	
	
	
	
	
	
	/* fangdajing   fangdajing  fangdajing   fangdajing    */
	$(".product-left").mouseover(function(e){
		$("b").show();
		$(".product-right").show();
		var L = e.pageX;
		var l = $(this).offset().left;
		var left = L - l - 100;
		// alert(left)
		
		var T = e.pageY;
		var t = $(this).offset().top;
		var top = T - t - 100;
		
		left = left < 0 ? 0 : left;
		top  = top  > 500 ? 500 : top;
		
		$("b").css({left : left,top : top});
		
		var imgLeft = -left*2;
		var imgTop  = -top*2;
		imgLeft = imgLeft < -530 ? -530 : imgLeft;
		imgTop  = imgTop  < -530 ? -676 : imgTop;
		
		$(".product-right img").css({left : imgLeft,top : imgTop});
	})
	$(".product-left").mouseout(function(){
		$("b").hide();
		$(".product-right").hide();
	})
	
	$("#head-top ul li:nth-of-type(11) ").mouseenter(function(){
		$(".gouwuc").show()
	})
	$("#head-top ul li:nth-of-type(11) ").mouseleave(function(){
		$(".gouwuc").hide()
	})
	
	
	/* 购物车    购物车  购物车 */
	$.ajax({
		type:"get",
		url:"gouwuc.json",
		success:function(res){
			for(var i = 0; i< res.length; i++){
				var fdj =  '<img src="'+res[i].img+'"/><b></b>';
				var btn = '<a href="#" class="cart_btn" id="'+res[i].id+'">加入购物车</a>'+
							'<a href="javascript:void(0)" class="primary_btn" id="btnAlarm">到货通知我        </a>'
			}
			$(".wrap-product .product-box .product-left").append(fdj);
		   $(".floor-btn").append(btn);
		}
	});
	sc_car();
	        $(".floor-btn ").on("click",".cart_btn",function(){
	        	var id = this.id;
	        	var first = $.cookie("goods") == null?  true : false;
	        	var same = false;
	        	if(first){
	        		$.cookie("goods",'[{"id":' + id + ',"num":1}]');
	        	}else{
	        		var str = $.cookie("goods");
	        		var arr = JSON.parse(str);
	        		for(var i in arr){
	        			if(arr[i].id == id){
	        				arr[i].num++;
	        				var cookieStr = JSON.stringify(arr);
	        				alert(cookieStr);
	        				$.cookie("goods",cookieStr);
	        				same = true;
	        			}
	        		}
	        		if(!same){
	        			var obj ={
	        				id : id,
	        				num: 1
	        			}
	        		arr.push(obj);
	        		var cookieStr = JSON.stringify(arr);
	        		alert(cookieStr);
	        		$.cookie("goods",cookieStr)
	        		}
	        	}
	        	sc_car();
	        })
	    function sc_car(){
	    	var sc_str = $.cookie("goods");
	    	if(sc_str){
	    		var sc_arr = JSON.parse(sc_str);
	    		var sc_num = 0;
	    		for(var i in sc_arr){
	    			sc_num += Number(sc_arr[i].num)
	    		}
	    		$(".sc_num").html(sc_num);
	    	}
	    	
	    }   
	    sc_msg();
	    function sc_msg(){
	    	$.ajax({
	    		type:"get",
	    		url:"gouwuc.json",
	    		success:function(res){
	    			var sc_str = $.cookie("goods");
	    			if(sc_str){
	    				var sc_arr = JSON.parse(sc_str);
	    				var sc_num = 0;
	    				 var html = "";
	    				for(var i in sc_arr){
	    				   var gouwuche = '<img src="'+res[sc_arr[i].id].img+'" >'+
			            '<div class="sc_goodsTitle"><p>立式空调</p></div>'+
			            '<div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div>'+
			           '<div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div>'
	    				}
	    				$(".gouwuc").append(gouwuche);
	    			}
	    		}
	    	});
	    }
})