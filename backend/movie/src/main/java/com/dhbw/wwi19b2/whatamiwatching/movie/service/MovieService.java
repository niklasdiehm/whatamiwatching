package com.dhbw.wwi19b2.whatamiwatching.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.ResultMovieDetailDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieVideo;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProvider;
import com.dhbw.wwi19b2.whatamiwatching.movie.helper.MovieDetailHelper;
import com.dhbw.wwi19b2.whatamiwatching.movie.proxy.MovieProxy;

@Service
public class MovieService {
	private static final String apiKey = "fa6d4e8708a0ef994887f86f263d7950";

	@Autowired
	private MovieProxy movieProxy;
	
	public List<Movie> discoverMovies() {
		return this.movieProxy.discoverMovies(apiKey, 28).getResults();
	}
	public ResultMovieDetailDTO getMovieDetail(int movieID) {
		MovieDetail movieDetail = this.movieProxy.getMovieDetails(movieID, apiKey);
		List<MovieVideo> movieVideos = this.movieProxy.getMovieVideos(movieID, apiKey).getResults();
		MovieWatchProvider movieWatchProvider = this.movieProxy.getMovieWatchProviders(movieID, apiKey).getResults().DE;
		return MovieDetailHelper.buildMovieDetailDTO(movieDetail, movieVideos, movieWatchProvider);
	}
}
