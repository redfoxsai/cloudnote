package org.tarena.note.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.tarena.note.entity.NoteResult;
import org.tarena.note.service.UserService;

@Controller//ɨ��������
@RequestMapping("/user")
public class LoginController {
	@Resource//ע��
	private UserService userService;//ע��
	
	@RequestMapping("/login.do")
	@ResponseBody//������ֵNoteResultת��json���
	public NoteResult execute(String name,String pwd) throws Exception{//��������,Ҫ�Ӳ���
		NoteResult result = userService.checkLogin(name, pwd);
		return result;
	}
}
