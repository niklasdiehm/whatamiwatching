package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Movie {
	
	private int id;
	private boolean adult;
	private String title;
	private String overview;
	private String release_date;
	private int[] genre_ids;
	
}
