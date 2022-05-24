package com.dhbw.wwi19b2.whatamiwatching.user.service;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhbw.wwi19b2.whatamiwatching.user.entity.User;
import com.dhbw.wwi19b2.whatamiwatching.user.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public boolean login(String userName, String plainPassword) throws UserException {
		if (userName.isBlank() || plainPassword.isEmpty())
			throw new UserException("Username empty.");
		try {
			User user = this.repository.findByUserName(userName);
			byte[] salt = Base64.getMimeDecoder().decode(user.getSalt());
			PBEKeySpec pbeKeySpec = new PBEKeySpec(plainPassword.toCharArray(), salt, 10, 512);
	        SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
	        byte[] hash = skf.generateSecret(pbeKeySpec).getEncoded();
	        String base64Hash = Base64.getMimeEncoder().encodeToString(hash).replace("\n", "").replace("\r", "");
	        boolean passwordSame = base64Hash.equals(user.getPasswordHash().replace("\n", "").replace("\r", ""));
	        return passwordSame;
			
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
			
			e.printStackTrace();
		}
		return false;
		
	}
	@SuppressWarnings("unused")
	private String[] register(String plainPassward) {
		try {
			SecureRandom secureRandom = new SecureRandom();
			byte[] salt = secureRandom.generateSeed(12);
			
			PBEKeySpec pbeKeySpec = new PBEKeySpec(plainPassward.toCharArray(), salt, 10, 512);
			SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
			byte[] hash = skf.generateSecret(pbeKeySpec).getEncoded();
			String base64Hash = Base64.getMimeEncoder().encodeToString(hash);
			String base64Salt = Base64.getMimeEncoder().encodeToString(salt);
			System.out.println("Salt:");
			System.out.println(base64Salt);
			System.out.println("Hash:");
			System.out.println(base64Hash);
			return new String[] {base64Salt, base64Hash};
			
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
			
			e.printStackTrace();
		}
		return null;
	}
	
}
