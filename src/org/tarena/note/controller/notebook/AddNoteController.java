package org.tarena.note.controller.notebook;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.tarena.note.entity.NoteResult;
import org.tarena.note.service.NoteBookService;
import org.tarena.note.service.NoteService;

@Controller
@RequestMapping("/note")
public class AddNoteController {
	@Resource
	private NoteService noteService;
	@RequestMapping("/addnote.do")
	@ResponseBody
	public NoteResult execute(String noteName,String bookName,String userId){
		NoteResult result = noteService.addNote(noteName, bookName, userId);
		return result;
		
		
		
	}
}
