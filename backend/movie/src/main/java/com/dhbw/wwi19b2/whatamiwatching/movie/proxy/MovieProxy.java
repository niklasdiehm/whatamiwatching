package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.GenreDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieDTO;

@FeignClient(name = "MovieDBWebService", url="https://api.themoviedb.org/3/")
public interface MovieProxy {
	
	@GetMapping(path= "/genre/movie/list?api_key={apiKey}")
    GenreDTO getGenres(@RequestParam(required = true, name = "apiKey") String apiKey);
	
	@GetMapping(path = "/discover/movie?api_key={apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres={genreID}")
	MovieDTO discoverMovies(@RequestParam(required = true, name = "apiKey") String apiKey,
			@RequestParam(required = true, name = "genreID") int genreID);
}