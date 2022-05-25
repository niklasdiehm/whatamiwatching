package com.dhbw.wwi19b2.whatamiwatching.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Genre;
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
}
