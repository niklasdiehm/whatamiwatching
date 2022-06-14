package com.dhbw.wwi19b2.whatamiwatching.user.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dhbw.wwi19b2.whatamiwatching.user.UserApplication;
import com.dhbw.wwi19b2.whatamiwatching.user.dto.ResultUserDTO;

@SpringBootTest(classes = UserApplication.class)
public class UserServiceTest {

	@Autowired
	private UserService userService;
	
	@Test
	public void test_login() {
		try {
			ResultUserDTO userDTO = userService.login("Affenkopf", "password");
			assertNotNull(userDTO);
			assertEquals(userDTO.isLoginSucessful(), true);
			assertEquals(userDTO.getUserID(), 1);
		} catch (UserException e) {
			e.printStackTrace();
		}
	}
}
