package com.dhbw.wwi19b2.whatamiwatching.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResultUserDTO {

	private boolean loginSucessful;
	private long userID;
}
