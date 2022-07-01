package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieWatchProviderDetails {

	public String logo_path;
	public int provider_id;
	public String provider_name;
}
