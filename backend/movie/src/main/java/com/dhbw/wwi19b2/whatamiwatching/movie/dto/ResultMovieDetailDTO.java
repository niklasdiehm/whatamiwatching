package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import java.util.List;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Genre;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieVideo;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProviderDetails;

import lombok.Data;

@Data
public class ResultMovieDetailDTO {

	private int id;
	private String title;
	private String overview;
	private int runtime;
	private List<Genre> genres;
	private String release_date;
	private String tagline;
	private float vote_average;
	private int vote_count;
	private List<MovieWatchProviderDetails> watchProviders;
	private List<MovieVideo> videos;
	
}
