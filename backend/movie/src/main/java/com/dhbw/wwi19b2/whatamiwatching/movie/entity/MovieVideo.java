package com.dhbw.wwi19b2.whatamiwatching.movie.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieVideo {
	private String id;
	private String key;
	private String site;
	private String type;
}
