package com.dhbw.wwi19b2.whatamiwatching.genre.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.Genre;
import com.dhbw.wwi19b2.whatamiwatching.genre.entity.GenreUser;
import com.dhbw.wwi19b2.whatamiwatching.genre.service.GenreService;

@RestController
@RequestMapping("")
public class GenreController {

	@Autowired
	private GenreService genreService;
	
	@GetMapping(path = "/list")
	public List<Genre> getGenres() {
		return this.genreService.getGenres();
	}
	
	@GetMapping(path = "/favorite")
	public GenreUser getGenres(@RequestParam(required=true) long userID) {
		return this.genreService.getFavoriteGenre(userID);
	}
	
	@PostMapping(path="/favorite")
	public long changeFavoriteGenre(@RequestParam(required=true) long userID, @RequestParam(required = true) long genreID) {
		return this.genreService.saveFavorite(userID, genreID);
	}
}
