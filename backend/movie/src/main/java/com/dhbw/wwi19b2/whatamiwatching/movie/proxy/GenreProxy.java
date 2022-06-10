package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.GenreUser;

@FeignClient(name = "BackendUserService", url = "http://genre:8083/")
public interface GenreProxy {

	@GetMapping(path = "/favorite?userID={userID}")
	GenreUser getFavoriteGenre(@RequestParam(required=true) long userID);
}
