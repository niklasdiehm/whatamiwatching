package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieWatchProvider {

	public String link;
	public List<MovieWatchProviderDetails> flatrate;
	public List<MovieWatchProviderDetails> rent;
	public List<MovieWatchProviderDetails> buy;
}
