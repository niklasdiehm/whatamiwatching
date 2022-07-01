package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProvider;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieWatchProvidersDTO {
	public MovieWatchProvider DE;
}