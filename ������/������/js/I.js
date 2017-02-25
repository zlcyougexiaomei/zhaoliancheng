$(function() {
	var aBtn = $("#head-img ol li");
	var oUl = $("#head-img .lunbo");
	var aLi = $("#head-img .lunbo li");

	var iNow = 0;
	var timer = null;

	aBtn.click(function() {
		iNow = $(this).index();
		tab();
	});
	timer = setInterval(timerInner, 2000);

	function timerInner() {
		iNow++;
		tab();
	}
	$("#head-img").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(timerInner, 2000);
	});

	function tab() {
		//alert($(this).index())
		//当点击的时候,将所有的按钮class都清空
		aBtn.attr("className", "");
		aBtn.eq(iNow).attr("className", "active");
		if (iNow == aLi.size() - 1) {
			aBtn.eq(0).attr("className", "active");
		}
		oUl.animate({
			left: -1200 * iNow
		}, function() {
			if (iNow == aLi.size() - 1) {
				iNow = 0;
				oUl.css("left", "0px");
			}
		});
	}
	$.extend({
		size: function() {
			return this.elements.length;
		}

	});

	/*  nav     二级菜单*/
	
	
	
	/*  nav     二级菜单*/
    

	
	

	$("#head-top ul li:nth-of-type(10)").mouseenter(function() {
		//$(this).css("background","#006fa3");
		var erweima = "<div class='erweima'><img src='../img/erweima.png'/></div>";
		$("#head-top ul li:nth-of-type(10)").append(erweima);
		
	})

	$("#head-top ul li:nth-of-type(10)").mouseleave(function() {
		$("#head-top ul li:nth-of-type(10) div").remove()
	});

	$("#head-top ul li:nth-of-type(11)").mouseenter(function() {
		//$(this).css("background","#006fa3");
		var div = "<div class='ulli2'><p>立即<a style='display:inline'>登录</a>,查看购物车商品</p></div>";
		$("#head-top ul li:nth-of-type(11)").append(div);
		//$("#head-top ul li:nth-of-type(9) div").css("display","block");
		//alert("123")
	})

	$("#head-top ul li:nth-of-type(11)").mouseleave(function() {
		$("#head-top ul li:nth-of-type(11) div").remove();
	});
	
	$("#head-top ul li:nth-of-type(12)").mouseenter(function() {
		//$(this).css("background","#006fa3");
		var div = "<div class='div12'>"+
	    "<div><p>我的订单</p></div><div><p>我的优惠券</p></div><div><p>我的积分</p></div>"+
	    "<div><p>我的权益</p></div><div><p>我的美的</p></div><div><p>账户设置</p></div>"+
			
		"</div>";
		$("#head-top ul li:nth-of-type(12)").append(div);
		//$("#head-top ul li:nth-of-type(9) div").css("display","block");
		//alert("123")
	})

	$("#head-top ul li:nth-of-type(12)").mouseleave(function() {
		$("#head-top ul li:nth-of-type(12) div").remove();
	})
	/* nav     第9个       nav第9个   */
/*$("#head-top ul li:nth-of-type(9)").mouseenter(function(){
		 div = '<div class:"div">'+
			'<input type="text" name="" id="" value="" />'+
		'</div>'
		$("#head-top ul li:nth-of-type(9)").append(div);
		$("input").animate({width:223});
	})
	
	$("#head-top ul li:nth-of-type(9)").mouseleave(function(){
		 $(this).children("div").remove();
	})*/
	/*  nav  第9个结束*/
	

	/*  二级菜单       */
	var d;
	$.ajax({
			type:"get",
			url:"meidi1.json",
			success:function(data){
				console.log(data)
				d=data;
			}
		});
		console.log(d)
		$("#wrap-head .list li").mouseenter(function(){
			var idx=$(this).index()
			var headimg='<div class="headimg-right">'+
			'<div class="headimg-right1">'+
				'<ul class="headul">'+
				
				'</ul>'+
			'</div>'+
			'<div class="headimg-right2">'+
				
			'</div>'+
			'<div class="headimg-right3">'+
				
			'</div>'+
			'</div>'
			$("#head-img").append(headimg);
			for(var i=0;i<d[idx][0].length;i++){
				var li='<li><img src="../img/'+d[idx][0][i].img+'"/><a>'+d[idx][0][i].name+'</a></li>'
				$(".headul").append(li)
			}
			for (var i=0;i<d[idx][1].length;i++) {
				var dl='<div class="navR2">'+
				'<div class="navr2-1">'+
					'<dl>'+
						'<dt><img src="../img/'+d[idx][1][i].img+'"/></dt>'+
						'<dd><a href="#"> '+d[idx][1][i].name+d[idx][1][i].price+'</a></dd>'+
						
					'</dl>'+
				'</div>'+
				
			'</div>'
			$(".headimg-right2").append(dl)
			}
		
		})
		$("#head-img").mouseleave(function(){
			$(".headimg-right").remove()
		})
/*	$("#wrap-head .list li").mouseenter(function() {
		var dex = $(this).index();
		var navDiv = "<div class='headimg-right'></div>";
		var navul = "<ul class='navUl1'></ul>";
		console.log(d[dex].length)
		for (var i=0;i<d[dex].length;i++) {
			var li="<li><img src='../img/"+d[dex][i].img+"'/></li>"
			$(".navUl1").append(li)
		}
		
		$("#head-img").append(navDiv));
        $(".headimg-right").append(navul);
//      $(".headimg-right").append(navul2);
//      $(".headimg-right").append(navul3);
	});*/
/*
	$("#head-img ").mouseleave(function() {
	$(".headimg-right").remove()
	});*/
	
	
	
	
	
});


