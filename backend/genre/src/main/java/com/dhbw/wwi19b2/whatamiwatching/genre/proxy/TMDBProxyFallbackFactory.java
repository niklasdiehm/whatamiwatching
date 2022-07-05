package com.dhbw.wwi19b2.whatamiwatching.genre.proxy;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.cloud.openfeign.FallbackFactory;
import org.springframework.stereotype.Component;

import com.dhbw.wwi19b2.whatamiwatching.genre.dto.GenreDTO;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class TMDBProxyFallbackFactory implements FallbackFactory<TMDBProxy> {

	@Override
	public TMDBProxy create(Throwable cause) {
		return new TMDBProxy() {
			
			@Override
			public GenreDTO getGenres(String apiKey) {
				ObjectMapper objectMapper = new ObjectMapper();
				InputStream is = GenreDTO.class.getResourceAsStream("/genres.json");
				try {
					GenreDTO genres = objectMapper.readValue(is, GenreDTO.class);
					return genres;
				} catch (StreamReadException e) {
					e.printStackTrace();
				} catch (DatabindException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				return new GenreDTO();
			}
		};
	}

}
