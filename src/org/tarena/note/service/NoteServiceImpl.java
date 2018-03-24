package org.tarena.note.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.tarena.note.dao.NoteDao;
import org.tarena.note.entity.Note;
import org.tarena.note.entity.NoteResult;
import org.tarena.note.util.NoteUtil;
@Service
public class NoteServiceImpl implements NoteService{
	@Resource
	private NoteDao noteDao;
	public NoteResult loadNotes(String bookId){
		List<Map> list = noteDao.findByBookId(bookId);
		NoteResult result = new NoteResult();
		result.setStatus(0);
		result.setMsg("查询笔记成功");
		result.setData(list);
		return result;
		
	}
	@Override
	public NoteResult addNote(String noteTitle,String bookId,String userId) {
		NoteResult result = new NoteResult();
		Note note = new Note();
//		note.setCn_notebook_id(bookId);
//		note.setCn_user_id(userId);
//		String noteId = NoteUtil.createId();
//		note.setCn_note_id(noteId);
//		if(note.getCn_note_create_time()<System.currentTimeMillis()){
//			note.setCn_note_create_time(System.currentTimeMillis());
//		}else{
//			note.setCn_note_last_modify_time(System.currentTimeMillis());
//		}
		note.setCn_note_title(noteTitle);
		note.setCn_notebook_id(bookId);
		note.setCn_user_id(userId);
		note.setCn_note_status_id("1");
		note.setCn_note_type_id("1");
		note.setCn_note_body("");
		note.setCn_note_create_time(System.currentTimeMillis());
		String noteId = NoteUtil.createId();
		note.setCn_note_id(noteId);
		
		noteDao.save(note);
		
		result.setData(bookId);
		result.setMsg("创建笔记本成功");
		result.setStatus(0);
		
		return result;
	}
	@Override
	public NoteResult loadNote(String noteId) {
		NoteResult result = new NoteResult();
		Note note = noteDao.findById(noteId);
		result.setStatus(0);
		result.setMsg("查询笔记成功");
		result.setData(note);
		return result;
	}

}
