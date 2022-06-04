package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MovieDetail {
	private int id;
	private boolean adult;
	private String overview;
	private String title;
	private int runtime;
	private List<Genre> genres;
	private String release_date;
	private String tagline;
	private float vote_average;
	private int vote_count;
	private String backdrop_path;
	private String poster_path;
}
