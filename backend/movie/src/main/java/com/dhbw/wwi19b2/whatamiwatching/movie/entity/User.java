package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

/**
 * The user-model gets used to save and load users in the database
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -137064404333846146L;

	private long id;
	
	private String userName;
}
