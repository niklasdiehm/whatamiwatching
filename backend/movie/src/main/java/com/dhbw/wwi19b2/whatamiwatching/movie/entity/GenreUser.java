package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class GenreUser implements Serializable{/**
	 * 
	 */
	private static final long serialVersionUID = 3845826971563085352L;

	private long id;
	private User user;
	private long genreID;
	
}
