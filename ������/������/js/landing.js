/*$(function(){
	txtvalue = $(".txt");
	cuowu1   = $(".cuowu1")
	txtvalue.blur(function(){
		/*var aname = $(".txt").value.repalace(/ /ig."");
		if(txtvalue.length > 18|| txtvalue.length<6){
			cuowu1.html("用户长度应该6~18位");
			
		}else if (txtvalue[0] >= "0" && txtvalue <= "9"){
		    cuowu1.html("用户名不能为数字");
		}else{
			var isChar = true;
			for(var i = 0; i<txtvalue.length; i++){
				if(!isChar(txtvalue[i])){
					isChar = false;
				}
			}
			if(isChar){
				cuowu1.html("√");
			}else{
				cuowu1.html("用户名只能由数字、字母、下划线组成");
			}
		}
		txtvalue.value = txtvalue;
	})
})

function isABC(charStr){
			if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr >= "0" && charStr <= "9" || charStr == "_"){
				return true;
			}else{
				return false;
			}
		}

*/
/*(aUsername[0] >= "0" && aUsername <= "9")*/


window.onload = function(){
			var oUsername = document.getElementById("username");
			var oPassword = document.getElementById("password");
			var oUserspan = document.getElementById("username_span");
			var oPassspan = document.getElementById("password_span");
			oUsername.onblur = function(){
				//失去焦点的时候去判断用户名密码是否合法。
				var aUsername = oUsername.value.replace(/ /ig, "");
				
				if(aUsername.length > 18 || aUsername.length < 6){
					oUserspan.innerHTML = "用户名长度应该是6~18位";
				}else if(aUsername[0] >= "0" && aUsername <= "9"){
					oUserspan.innerHTML = "用户名首位不能为数字";
				}else{
					//特殊字符,数字、字母、下划线
					var isChar = true;
					for(var i = 0; i < aUsername.length; i++){
						if(!isABC(aUsername[i])){
							isChar = false;
						}
					}
					if(isChar){
						oUserspan.innerHTML = "√";
					}else{
						oUserspan.innerHTML = "用户名只能由数字、字母、下划线组成";
					}

				}
				oUsername.value = aUsername;
			}
		}

		//判断某一个字符是否是数字、字母、下划线
		function isABC(charStr){
			if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr >= "0" && charStr <= "9" || charStr == "_"){
				return true;
			}else{
				return false;
			}
		}


