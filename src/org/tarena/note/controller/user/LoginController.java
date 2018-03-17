package org.tarena.note.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.tarena.note.entity.NoteResult;
import org.tarena.note.service.UserService;

@Controller//扫描控制组件
@RequestMapping("/user")
public class LoginController {
	@Resource//注入
	private UserService userService;//注入
	
	@RequestMapping("/login.do")
	@ResponseBody//讲返回值NoteResult转成json输出
	public NoteResult execute(String name,String pwd) throws Exception{//接受数据,要加参数
		NoteResult result = userService.checkLogin(name, pwd);
		return result;
	}
}
