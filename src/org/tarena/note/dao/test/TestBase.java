package org.tarena.note.dao.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestBase {
	private static ApplicationContext ac = null;
	public static ApplicationContext getContext(){
		ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		return ac;
	}
}
