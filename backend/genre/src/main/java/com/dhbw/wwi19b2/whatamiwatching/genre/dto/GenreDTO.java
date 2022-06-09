package com.dhbw.wwi19b2.whatamiwatching.genre.dto;

import java.util.List;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.Genre;

import lombok.Data;

@Data
public class GenreDTO {
	private List<Genre> genres;
}
