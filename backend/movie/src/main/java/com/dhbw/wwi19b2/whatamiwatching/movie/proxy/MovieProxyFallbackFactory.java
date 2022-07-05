package com.dhbw.wwi19b2.whatamiwatching.movie.proxy;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.cloud.openfeign.FallbackFactory;
import org.springframework.stereotype.Component;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieVideoDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieWatchProviderDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class MovieProxyFallbackFactory implements FallbackFactory<MovieProxy>{

	@Override
	public MovieProxy create(Throwable cause) {
		return new MovieProxy() {
			
			@Override
			public MovieWatchProviderDTO getMovieWatchProviders(int movieID, String apiKey) {
				System.out.println("Fallback");
				ObjectMapper objectMapper = new ObjectMapper();
				InputStream is = MovieWatchProviderDTO.class.getResourceAsStream("/movieWatchProviders_" + movieID + ".json");
				try {
					MovieWatchProviderDTO movieWatchProviders = objectMapper.readValue(is, MovieWatchProviderDTO.class);
					return movieWatchProviders;
				} catch (StreamReadException e) {
					e.printStackTrace();
				} catch (DatabindException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				return new MovieWatchProviderDTO();
			}
			
			@Override
			public MovieVideoDTO getMovieVideos(int movieID, String apiKey) {
				System.out.println("Fallback");
				ObjectMapper objectMapper = new ObjectMapper();
				InputStream is = MovieVideoDTO.class.getResourceAsStream("/movieVideos_" + movieID + ".json");
				try {
					MovieVideoDTO movieVideos = objectMapper.readValue(is, MovieVideoDTO.class);
					return movieVideos;
				} catch (StreamReadException e) {
					e.printStackTrace();
				} catch (DatabindException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				return new MovieVideoDTO();
			}
			
			@Override
			public MovieDetail getMovieDetails(int movieID, String apiKey) {
				System.out.println("Fallback");
				ObjectMapper objectMapper = new ObjectMapper();
				InputStream is = MovieDetail.class.getResourceAsStream("/movieDetail_" + movieID + ".json");
				try {
					MovieDetail movieDetail = objectMapper.readValue(is, MovieDetail.class);
					return movieDetail;
				} catch (StreamReadException e) {
					e.printStackTrace();
				} catch (DatabindException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				return new MovieDetail();
			}
			
			@Override
			public MovieDTO discoverMovies(String apiKey, long runtime, long genreID) {
				System.out.println("Fallback");
				ObjectMapper objectMapper = new ObjectMapper();
				InputStream is = MovieDTO.class.getResourceAsStream("/movies.json");
				try {
					MovieDTO movieDTO = objectMapper.readValue(is, MovieDTO.class);
					System.out.println(movieDTO.getResults().isEmpty());
					return movieDTO;
				} catch (StreamReadException e) {
					e.printStackTrace();
				} catch (DatabindException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				return new MovieDTO();
			}
			
			@Override
			public MovieDTO discoverMovies(String apiKey, long runtime) {
				try {
					System.out.println("Fallback");
					ObjectMapper objectMapper = new ObjectMapper();
					InputStream is = MovieDTO.class.getResourceAsStream("/movies.json");
					try {
						MovieDTO movieDTO = objectMapper.readValue(is, MovieDTO.class);
						System.out.println(movieDTO.getResults().isEmpty());
						return movieDTO;
					} catch (StreamReadException e) {
						e.printStackTrace();
					} catch (DatabindException e) {
						e.printStackTrace();
					} catch (IOException e) {
						e.printStackTrace();
					}
				} catch(Exception e) {
					e.printStackTrace();
				}
				
				return new MovieDTO();
			}
		};
	}

}
