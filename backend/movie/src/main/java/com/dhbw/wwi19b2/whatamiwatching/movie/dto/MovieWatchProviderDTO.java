package com.dhbw.wwi19b2.whatamiwatching.movie.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieWatchProviderDTO {

	private int id;
	private MovieWatchProvidersDTO results;
}