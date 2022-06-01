package com.dhbw.wwi19b2.whatamiwatching.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Genre;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.dhbw.wwi19b2.whatamiwatching.movie.proxy.MovieProxy;

@Service
public class MovieService {
	private static final String apiKey = "fa6d4e8708a0ef994887f86f263d7950";

	@Autowired
	private MovieProxy movieProxy;
	
	public List<Genre> getGenres() {
		return this.movieProxy.getGenres(apiKey).getGenres();
	}
	
	public List<Movie> discoverMovies() {
		return this.movieProxy.discoverMovies(apiKey, 28).getResults();
	}
	public MovieDetail getMovieDetail(int movieID) {
		return this.movieProxy.getMovieDetails(movieID, apiKey);
	}
}
