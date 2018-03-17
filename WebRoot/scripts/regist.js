$(function() {
	$("#regist_button").click(function() {

		//获取表单信息,
		var name = $("#regist_username").val().trim();
		var nick = $("#nickname").val().trim();
		var password = $("#regist_password").val().trim();
		var final_password = $("#final_password").val().trim();
		//检查数据格式
		//todo发送Ajax请求
		$.ajax({
			url : "http://localhost:8080/cloudnote/user/regist.do",
			type : "post",
			data : {
				"name" : name,
				"password" : password,
				"nickname" : nick
			},
			dataType : "json",
			success : function(result) {
				if (result.status == 0) {
					alert(result.msg);
					$("#back").click();
					//清空原有表单
					$("#regist_username").val('');
					$("#nickname").val(''); 
					$("#final_password").val(''); 
					$("#regist_password").val(''); 
				} else if (result.status == 1) {
					$("#warning_1 span").html(result.msg);
					$("#warning_1").show(); //显示div消息区
				}
			}
		});
	});
});