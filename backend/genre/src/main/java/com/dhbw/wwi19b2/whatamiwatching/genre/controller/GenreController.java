package com.dhbw.wwi19b2.whatamiwatching.genre.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.Genre;
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
}