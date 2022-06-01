package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import java.util.List;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;

import lombok.Data;

@Data
public class MovieDTO {
	private List<Movie> results;
}
