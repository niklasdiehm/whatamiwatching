package com.dhbw.wwi19b2.whatamiwatching.user.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dhbw.wwi19b2.whatamiwatching.user.UserApplication;
import com.dhbw.wwi19b2.whatamiwatching.user.entity.User;

@SpringBootTest(classes= UserApplication.class)
public class UserRepositoryTest {

	@Autowired
	private UserRepository userRepository;
	
	@Test
	public void test_find_by_username() {
		User user = userRepository.findByUserName("Affenkopf");
		assertNotNull(user);
		assertEquals(user.getId(), 1L);
	}
}
