package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieVideoDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieWatchProviderDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;

@FeignClient(name = "MovieDBWebService", url="https://api.themoviedb.org/3/", fallbackFactory = MovieProxyFallbackFactory.class)
public interface MovieProxy {
	
	@GetMapping(path = "/discover/movie?api_key={apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_runtime.lte={runtime}")
	MovieDTO discoverMovies(@RequestParam(required = true, name = "apiKey") String apiKey,
			@RequestParam(required = true, name = "runtime") long runtime);
	@GetMapping(path = "/discover/movie?api_key={apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres={genreID}&with_runtime.lte={runtime}")
	MovieDTO discoverMovies(@RequestParam(required = true, name = "apiKey") String apiKey,
			@RequestParam(required=true, name="runtime") long runtime, @RequestParam(required = true, name = "genreID") long genreID);
	
	@GetMapping(path = "/movie/{movieID}?api_key={apiKey}&language=en-US")
	MovieDetail getMovieDetails(@RequestParam(required = true, name = "movieID") int movieID,
			@RequestParam(required = true, name = "apiKey") String apiKey);
	
	@GetMapping(path = "movie/{movieID}/watch/providers?api_key={apiKey}&language=en-US")
	MovieWatchProviderDTO getMovieWatchProviders(@RequestParam(required = true, name = "movieID") int movieID,
			@RequestParam(required = true, name = "apiKey") String apiKey);
	
	@GetMapping(path = "movie/{movieID}/videos?api_key={apiKey}&language=en-US")
	MovieVideoDTO getMovieVideos(@RequestParam(required = true, name = "movieID") int movieID,
			@RequestParam(required = true, name = "apiKey") String apiKey);
}