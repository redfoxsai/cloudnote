//单机笔记本加载笔记列表
function loadnotes(){
    //给笔记本li设置选中样式
    $("#book_list li a").removeClass("checked");
    $(this).find("a").addClass("checked");
    //获取bookId
    var bookId = $(this).data("bookId");
    //发送请求
    $.ajax({
      url:"http://localhost:8080/cloudnote/note/loadnotes.do",
      type:"post",
      data:{"bookId":bookId},
      dataType:"json",
      success:function(result){
          if(result.status==0){
            var notes = result.data;//获取返回的笔记集合
            //清除原有笔记列表li
            $("#note_list").empty();
            //循环添加新的li
            for(var i=0;i<notes.length;i++){
              var noteId = notes[i].cn_note_id;//获取笔记ID
              var noteTitle = notes[i].cn_note_title;//获取笔记标题
              //拼成一个笔记列表的li
              var s_li = '<li class="online">';
              s_li += '<a>';
              s_li += '<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>'+noteTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
              s_li += '</a>';
              s_li += '<div class="note_menu" tabindex="-1">';
              s_li += '<dl>';
              s_li += '  <dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt>';
              s_li += '  <dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt>';
              s_li += '  <dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt>';
              s_li += '</dl>';
              s_li += '</div>';
              s_li += '</li>';
              var $li = $(s_li);
              $li.data("noteId",noteId);//给li绑定笔记ID
              //将笔记li添加到笔记ul中
              $("#note_list").append($li);
            }
          }
      }
    });
};

//点击添加笔记按钮
function showAddNoteWindow() {
	$(".opacity_bg").show();
	$("#can").load("alert/alert_note.html") //发出这个请求,载入can里

}
;
//创建笔记内容
function sureAddNote() {
	//获取笔记本名字,获取ID
	var noteTitle = $("#input_note").val().trim();
	//TODO 检查笔记本名字是否为空
	var $bookli = $("#book_list li a.checked").parent();//准确命中选中项的父元素,获得book的li
	var bookId = $bookli.data("bookId");
	if(bookId==undefined){
		alert("请选择笔记本");
		return;
	}
	//发送请求
	$.ajax({
		url : "http://localhost:8080/cloudnote/note/addnote.do",
		type : "post",
		data : {
			"noteTitle" : noteTitle,
			"bookId" : bookId,
			"userId" : userId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				closeWindow(); //关闭对话框
				//添加笔记本Li
				var noteId = result.data;
				//拼,出来li元素,形成列表
				var s_li = '<li class="online">';
				s_li += '<a>';
				s_li += '<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> ';
				s_li += '' +noteTitle+ '<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
				s_li += '</a>';
				s_li += '<div class="note_menu" tabindex="-1">';
				s_li += '<dl>';
				s_li += '<dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt>';
				s_li += '<dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt>';
				s_li += '<dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt>';
				s_li += '</dl>';
				s_li += '</div>';
				s_li += '</li>';
				var $li = $(s_li);
				$li.data("noteId", noteId); //绑定笔记id
				//将笔记li添加到笔记UL中
				$("#note_list").prepend($li);
			}
		},
		error : function() {
			alert("创建笔记失败");

		}
	});

}
//点击笔记时,给编辑区加载笔记内容
function loadNote(){
	//设置笔记选中效果
	$("#note_list li a").removeClass("checked");
	$(this).find("a").addClass("checked");
		//获取笔记ID
		var noteId = $(this).data("noteId");//得到id值,发送ajax
		$.ajax({
			url:"http://localhost:8080/cloudnote/note/load.do",
			type:"post",
			data:{"noteId":noteId},
			dataType:"json",
			success:function(result){
				if(result.status==0){
					//读取note
					var note = result.data;
					//读取标题
					var noteTitle = note.cn_note_title;
					//读取内容
					var noteBody = note.cn_note_body;
					//填入标题
					$("#input_note_title").val(noteTitle);
					//填入内容
					um.setContent(noteBody);
				}
			},
		
		});
		
	
	}