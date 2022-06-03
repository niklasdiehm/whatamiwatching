package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MovieWatchProviderDTO {

	private int id;
	private MovieWatchProvidersDTO results;
}