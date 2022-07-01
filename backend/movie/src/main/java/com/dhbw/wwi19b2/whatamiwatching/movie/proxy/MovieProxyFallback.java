package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.stereotype.Component;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieVideoDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieWatchProviderDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class MovieProxyFallback implements MovieProxy {

	@Override
	public MovieDTO discoverMovies(String apiKey, long runtime) {
		ObjectMapper objectMapper = new ObjectMapper();
		InputStream is = MovieDTO.class.getResourceAsStream("/movies.json");
		try {
			MovieDTO movieDTO = objectMapper.readValue(is, MovieDTO.class);
			System.out.println(movieDTO.getResults().isEmpty());
		} catch (StreamReadException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (DatabindException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public MovieDTO discoverMovies(String apiKey, long runtime, long genreID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MovieDetail getMovieDetails(int movieID, String apiKey) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MovieWatchProviderDTO getMovieWatchProviders(int movieID, String apiKey) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MovieVideoDTO getMovieVideos(int movieID, String apiKey) {
		// TODO Auto-generated method stub
		return null;
	}
	

	
}
