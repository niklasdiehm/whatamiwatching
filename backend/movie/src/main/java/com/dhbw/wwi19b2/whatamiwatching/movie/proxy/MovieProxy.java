package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.GenreDTO;

@FeignClient(name = "MovieDBWebService", url="https://api.themoviedb.org/3/")
public interface MovieProxy {
	
	@GetMapping(path= "/genre/movie/list?api_key={api_key}")
    GenreDTO getGenres(@RequestParam(required = true, name = "api_key") String api_key);
}