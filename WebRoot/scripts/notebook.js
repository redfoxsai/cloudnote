function loadNoteBooks() {
	$.ajax({
		url : "http://localhost:8080/cloudnote/notebook/loadbooks.do",
		type : "post",
		data : {
			"userId" : userId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				var books = result.data; //笔记本的json集合信息
				//循环输出,生成li列表
				for (var i = 0; i < books.length; i++) {
					var bookName = books[i].cn_notebook_name; //循环拿名字和id
					var bookId = books[i].cn_notebook_id;
					//拼,出来li元素,形成列表
					var s_li = '<li class="online"><a >';
					s_li += '<i class="fa fa-book" title="online" rel="tooltip-bottom">';
					s_li += '</i>' + bookName + '</a></li>';
					//将s_li字符串转jQuery,吧bookid藏起来
					var $li = $(s_li);
					$li.data("bookId", bookId);
					//把li添加到笔记本ul里
					$("#book_list").append($li);
				}
			}
		}
	})
}
;


function showAddBookWindow() {
	$(".opacity_bg").show();
	$("#can").load("alert/alert_notebook.html") //发出这个请求,载入can里

}
;
function closeWindow() {
	$("#can").empty();
	$(".opacity_bg").hide();
}
;
//确认创建笔记本
function sureAddBook() {
	//获取笔记本名字,获取ID
	var bookName = $("#input_notebook").val().trim();
	//TODO 检查笔记本名字是否为空
	//发送请求
	$.ajax({
		url : "http://localhost:8080/cloudnote/notebook/add.do",
		type : "post",
		data : {
			"bookName" : bookName,
			"userId" : userId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				closeWindow(); //关闭对话框
				//添加笔记本Li
				var bookId = result.data;
				//拼,出来li元素,形成列表
				var s_li = '<li class="online"><a >';
				s_li += '<i class="fa fa-book" title="online" rel="tooltip-bottom">';
				s_li += '</i>' + bookName + '</a></li>';
				//将s_li字符串转jQuery,吧bookid藏起来
				var $li = $(s_li);
				$li.data("bookId", bookId);
				//把li添加到笔记本ul里
				$("#book_list").prepend($li);
			}
		},
		error : function() {
			alert("创建笔记本失败");

		}
	});

}























