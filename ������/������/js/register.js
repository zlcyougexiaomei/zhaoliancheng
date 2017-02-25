/*--------------------用户名---------------------*/
var userName = document.getElementById("userName");
userName.onfocus = checkUserName;
userName.onblur = checkUserName;
userName.onkeyup = checkUserName;

function checkUserName(e) {
	var _e = window.event || e; //事件对象
	//console.log(_e.type)
	var content = userName.value; //文本框里的内容
	var box = userName.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "支持汉字、数字、字母、-、_的组合，4-20个字符";
		}
		return; //结束函数
	}

	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}

	//其他事件  keyup
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请输入用户名";
	} else { //不为空
		var reg = /^([\w-]|[\u4e00-\u9fa5])+$/; //验证格式的正则
		if (reg.test(content)) { //格式通过
			if (content.length >= 4 && content.length <= 20) {
				box.className = "box right";
				tip.className = "tip hide";
				return true;

			} else {
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = " 长度只能在4-20个字符之间";
			}
		} else { //格式不通过
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合，4-20个字符";
		}
	}

}

/*--------------------设置密码---------------------*/

var pwd = document.getElementById("pwd");
pwd.onfocus = checkPwd;
pwd.onblur = checkPwd;
pwd.onkeyup = checkPwd;

function checkPwd(e) {
	var _e = window.event || e; //事件对象
	//console.log(_e.type)
	var content = pwd.value; //文本框里的内容
	var box = pwd.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "建议使用数字、字母和符号两种以上的组合，长度6-20个";
		}
		return; //结束函数
	}

	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}

	//其他事件  keyup
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请输入密码";
	} else { //不为空
		if (content.length >= 6 && content.length <= 20) {
			var level = getLevel(content);
			switch (level) {
				case 1:
					box.className = "box right";
					tip.className = "tip ruo";
					span.innerHTML = "有被盗风险,建议使用字母、数字和符号两种及以上组合;";
					break;
				case 2:
					box.className = "box right";
					tip.className = "tip zhong";
					span.innerHTML = "安全强度适中，可以使用三种以上的组合来提高安全强度";
					break;

				case 3:
					box.className = "box right";
					tip.className = "tip qiang";
					span.innerHTML = "你的密码很安全";
					break;

			}
			
			return  true;
		}else{
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "密码长度6-20";
		}

	}

}

12

/*--------------------确认密码---------------------*/
var pwd2 = document.getElementById("pwd2");
pwd2.onfocus = checkpwd2;
pwd2.onblur = checkpwd2;
pwd2.onkeyup = checkpwd2;
function checkpwd2(e) {
	var _e = window.event || e; //事件对象
	var content1 = pwd.value;
	//console.log(_e.type)
	var content = pwd2.value; //文本框里的内容
	var box = pwd2.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "请再次输入密码";
		}
		return; //结束函数
	}

	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}

	//其他事件  keyup
	if (content !== content1) { //不等于
		box.className = "box error";
		tip.className = "tip error"
		span.innerHTML = "请输入正确密码";
		
	} else { //等于
		box.className = "box right";
		tip.className = "tip"
		span.innerHTML = "";
		return true;
	}

}





/*--------------------邮箱---------------------*/

var email = document.getElementById("email");
email.onfocus = checkemail;
email.onblur = checkemail;
email.onkeyup = checkemail;

function checkemail(e){
	var _e = window.event||e;
	var content = email.value;
	var box  = email.parentNode
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if(_e.type=="focus"){
		if(content.length==0){
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "请输入邮箱";
		}
		return; //结束函数
	}
	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请输入正确邮箱格式";
	} else {
		var reg = /^\w+@(qq|163|126|168)(\.(com|cn))$/
		if(reg.test(content)){//正确的邮箱格式
			box.className = "box right";
			tip.className = "tip hide";
			return true
		}else{	//错误的邮箱格式
			box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "邮箱格式不正确";
		}
	}
}

/*--------------------手机验证---------------------*/
var mobile = document.getElementById("mobile");
mobile.onfocus = checkmobil;
mobile.onblur = checkmobil;
mobile.onkeyup = checkmobil;

function checkmobil(){
	var _e = window.event||e;
	var content = mobile.value;
	var box  = mobile.parentNode
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if(_e.type=="focus"){
		if(content.length==0){
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "请输入11位手机号码";
		}
		return; //结束函数
	}
	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请输入11位手机号码";
	} else {
		var reg = /^1\d{10}$/
		if(reg.test(content)){//正确的手机格式
			box.className = "box right";
			tip.className = "tip hide";
			return true
		}else{	//错误的邮箱格式
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "手机格式不正确";
		}
	}
	
}






/*--------------------验证码---------------------*/
var updateCode = document.getElementById("updateCode");
var code = document.getElementById("code");
updateCode.onclick = function(){
	var arr = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k"];
	var str = '';
	for(var i = 0;i<5;i++ ){
		var index = parseInt(Math.random()*arr.length);
		str = str+arr[index];
	}
	updateCode.innerHTML = str;
}
var cons = updateCode.innerHTML
code.onfocus = checkcode;
code.onblur = checkcode;
code.onkeyup = checkcode;


function checkcode(){
	var _e = window.event||e;
	var content = code.value;
	var box  = code.parentNode
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if(_e.type=="focus"){
		if(content.length==0){
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "请输入验证码";
		}
		return; //结束函数
	}
	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请入验证码";
	} else {
		if(content==updateCode.innerHTML){
			box.className = "box right";
			tip.className = "tip hide";
			return true;
		}else{
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "验证码不正确";
		}
	}
}

/*--------------------同意协议---------------------*/
var ck = document.getElementById("ck");
ck.onclick = checkck
function checkck(e){
	var _e = window.event||e;
	var box  = ck.parentNode
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	ck.onchange = function(){
	if(ck.checked){
			box.className = "box right";
			tip.className = "tip hide";
		return true
	}else{
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "请勾选";
		return false
	}
}
}
/*--------------------注册---------------------*/
var btn = document.getElementById("btn");
btn.onclick = function() {

	if (checkUserName()&&checkPwd()&&checkpwd2()&&checkemail()&&checkmobil()&&checkcode()&&checkck()) {
		alert("可以注册")
	}
}