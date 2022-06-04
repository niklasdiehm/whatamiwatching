package com.dhbw.wwi19b2.whatamiwatching.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieWatchProviderDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.ResultMovieDetailDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Genre;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProvider;
import com.dhbw.wwi19b2.whatamiwatching.movie.service.MovieService;

@RestController
@RequestMapping("")
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	@GetMapping(path = "/genres")
	public List<Genre> getGenres() {
		return this.movieService.getGenres();
	}
	
	@GetMapping(path = "/movies/discover")
	public List<Movie> getMovies() {
		return this.movieService.discoverMovies();
	}
	@GetMapping(path = "/movie")
	public ResultMovieDetailDTO getMovieDetails(@RequestParam(name="movieID", defaultValue = "338953") int movieID) {
		return this.movieService.getMovieDetail(movieID);
	}
}
