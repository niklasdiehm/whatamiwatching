package com.dhbw.wwi19b2.whatamiwatching.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.ResultMovieDetailDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.dhbw.wwi19b2.whatamiwatching.movie.service.MovieService;

@RestController
@RequestMapping("")
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	@GetMapping(path = "/movies/discover")
	public List<Movie> getMovies(@RequestParam(required=false) Long genreID, @RequestParam(required=false) Long runtime) {
		return this.movieService.discoverMovies(genreID, runtime);
	}
	@GetMapping(path = "/movie")
	public ResultMovieDetailDTO getMovieDetails(@RequestParam(name="movieID", defaultValue = "338953") int movieID) {
		return this.movieService.getMovieDetail(movieID);
	}
	
	@GetMapping(path = "/movieOfTheDay")
	public List<Movie> movieOfTheDay(@RequestParam(required=false) Long userID) {
		return this.movieService.getMovieOfTheDay(userID);
	}
}
