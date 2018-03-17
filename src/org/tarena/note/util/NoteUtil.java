package org.tarena.note.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

import org.apache.commons.codec.binary.Base64;


public class NoteUtil {
	public static String createId(){
		UUID uuid = UUID.randomUUID();
		return uuid.toString();
	}
	public static String md5(String msg) throws NoSuchAlgorithmException{
		//利用md5对msg处理
		MessageDigest md = MessageDigest.getInstance("MD5");
		byte[] input = msg.getBytes();
		byte[] output = md.digest(input);
		//将md5处理的output结果转为字符串
		String out = Base64.encodeBase64String(output);
		return out;
				
	}
	public static void main(String[] args) throws NoSuchAlgorithmException {
		System.out.println(md5("1234"));
	}
}
