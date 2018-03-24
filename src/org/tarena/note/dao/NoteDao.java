package org.tarena.note.dao;

import java.util.List;
import java.util.Map;

import org.tarena.note.entity.Note;

public interface NoteDao {
	public Note findById(String  noteId);
	public void save(Note note);
	public List<Map> findByBookId(String bookId);
}
