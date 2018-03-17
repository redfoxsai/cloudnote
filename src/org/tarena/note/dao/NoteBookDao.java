package org.tarena.note.dao;

import java.util.List;

import org.tarena.note.entity.NoteBook;

public interface NoteBookDao {
	public void save(NoteBook book);
	public List<NoteBook> findByUser(String userId);
}
