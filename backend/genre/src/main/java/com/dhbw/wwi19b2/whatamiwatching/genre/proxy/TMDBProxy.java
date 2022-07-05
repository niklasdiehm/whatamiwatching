package com.dhbw.wwi19b2.whatamiwatching.genre.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dhbw.wwi19b2.whatamiwatching.genre.dto.GenreDTO;

@FeignClient(name = "MovieDBWebService", url="https://api.themoviedb.org/3/", fallbackFactory = TMDBProxyFallbackFactory.class)
public interface TMDBProxy {

	@GetMapping(path= "/genre/movie/list?api_key={apiKey}")
    GenreDTO getGenres(@RequestParam(required = true, name = "apiKey") String apiKey);
}
