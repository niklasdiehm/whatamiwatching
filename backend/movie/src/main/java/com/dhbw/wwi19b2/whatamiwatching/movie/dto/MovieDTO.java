package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import java.util.List;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO {
	private List<Movie> results;
}
