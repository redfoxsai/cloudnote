package org.tarena.note.service;

import org.tarena.note.entity.NoteResult;

public interface NoteBookService {
	public NoteResult addBook(String bookName,String userId);
	public NoteResult loadBooks(String userId);
}
