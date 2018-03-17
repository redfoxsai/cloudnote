package org.tarena.note.dao;
import org.tarena.note.entity.User;
public interface UserDao {
	public User findByName(String name);
	public void save(User user);
}
