package org.tarena.note.service;

import org.tarena.note.entity.NoteResult;

public interface NoteService {
	public NoteResult addNote (String noteName,String bookName,String userId);
	public NoteResult loadNotes(String bookId);
}
