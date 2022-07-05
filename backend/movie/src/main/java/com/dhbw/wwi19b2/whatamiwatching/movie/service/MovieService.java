package com.dhbw.wwi19b2.whatamiwatching.movie.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieVideoDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.MovieWatchProviderDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.dto.ResultMovieDetailDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.GenreUser;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.Movie;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieVideo;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProvider;
import com.dhbw.wwi19b2.whatamiwatching.movie.helper.MovieDetailHelper;
import com.dhbw.wwi19b2.whatamiwatching.movie.proxy.GenreProxy;
import com.dhbw.wwi19b2.whatamiwatching.movie.proxy.MovieProxy;

@Service
public class MovieService {
	private static final String apiKey = "fa6d4e8708a0ef994887f86f263d7950";

	@Autowired
	private MovieProxy movieProxy;
	
	@Autowired
	private GenreProxy genreProxy;
	
	public List<Movie> discoverMovies(Long genreID, Long runtime) {
		long runtime_long;
		if (runtime == null) {
			runtime_long = 10000;
		} else {
			runtime_long = runtime.longValue();
		}
		if (genreID == null) {
			return this.movieProxy.discoverMovies(apiKey, runtime_long).getResults();
		}
		return this.movieProxy.discoverMovies(apiKey, runtime_long, genreID.longValue()).getResults();
		
	}
	public ResultMovieDetailDTO getMovieDetail(int movieID) {
		MovieDetail movieDetail = this.movieProxy.getMovieDetails(movieID, apiKey);
		if (movieDetail == null)
			return null;
		MovieVideoDTO movieVideo = this.movieProxy.getMovieVideos(movieID, apiKey);
		List<MovieVideo> movieVideos = movieVideo != null ? movieVideo.getResults() : new LinkedList<MovieVideo>();
		MovieWatchProviderDTO movieWatchProviders = this.movieProxy.getMovieWatchProviders(movieID, apiKey);
		MovieWatchProvider movieWatchProvider = movieWatchProviders != null ? movieWatchProviders.getResults().DE : new MovieWatchProvider();
		return MovieDetailHelper.buildMovieDetailDTO(movieDetail, movieVideos, movieWatchProvider);
	}
	
	public List<Movie> getMovieOfTheDay(Long userID) {
		if (userID == null) {
			return this.movieProxy.discoverMovies(apiKey, 1000000).getResults();
		}
		long userID_long = userID.longValue();
		GenreUser genreUser = this.genreProxy.getFavoriteGenre(userID_long);
		if (genreUser == null)
			return this.movieProxy.discoverMovies(apiKey, 1000000).getResults();
		return this.movieProxy.discoverMovies(apiKey, 100000, genreUser.getGenreID()).getResults();
	}
}
