package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import java.util.List;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieVideo;

import lombok.Data;

@Data
public class MovieVideoDTO {
	private int id;
	private List<MovieVideo> results;
}
