package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import org.springframework.cloud.openfeign.FallbackFactory;
import org.springframework.stereotype.Component;

import com.dhbw.wwi19b2.whatamiwatching.movie.entity.GenreUser;

@Component
public class GenreProxyFallbackFactory implements FallbackFactory<GenreProxy>{

	@Override
	public GenreProxy create(Throwable cause) {
		return new GenreProxy() {

			@Override
			public GenreUser getFavoriteGenre(long userID) {
				return null;
			}
			
		};
	}

}
