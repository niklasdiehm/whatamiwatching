package com.dhbw.wwi19b2.whatamiwatching.genre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.Genre;
import com.dhbw.wwi19b2.whatamiwatching.genre.proxy.TMDBProxy;

@Service
public class GenreService {

	private static final String apiKey = "fa6d4e8708a0ef994887f86f263d7950";
	
	@Autowired
	private TMDBProxy tmdbProxy;
	
	public List<Genre> getGenres() {
		return this.tmdbProxy.getGenres(apiKey).getGenres();
	}
}
