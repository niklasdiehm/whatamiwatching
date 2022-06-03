package com.dhbw.wwi19b2.whatamiwatching.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.wwi19b2.whatamiwatching.user.dto.ResultUserDTO;
import com.dhbw.wwi19b2.whatamiwatching.user.service.UserException;
import com.dhbw.wwi19b2.whatamiwatching.user.service.UserService;

@RestController
@RequestMapping("")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping("/login")
	public ResultUserDTO login(@RequestParam(required = true) String username, @RequestParam(required = true) String password) throws UserException {
		return this.service.login(username, password);
	}
	
}
