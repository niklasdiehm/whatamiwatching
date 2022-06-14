package com.dhbw.wwi19b2.whatamiwatching.movie.helper;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.dhbw.wwi19b2.whatamiwatching.movie.dto.ResultMovieDetailDTO;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieDetail;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieVideo;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProvider;
import com.dhbw.wwi19b2.whatamiwatching.movie.entity.MovieWatchProviderDetails;

public class MovieDetailHelper {

	public static ResultMovieDetailDTO buildMovieDetailDTO(MovieDetail movieDetail, List<MovieVideo> movieVideos, MovieWatchProvider movieWatchProvider) {
		ResultMovieDetailDTO resultMovieDTO = new ResultMovieDetailDTO();
		resultMovieDTO.setId(movieDetail.getId());
		resultMovieDTO.setOverview(movieDetail.getOverview());
		resultMovieDTO.setRelease_date(movieDetail.getRelease_date());
		resultMovieDTO.setRuntime(movieDetail.getRuntime());
		resultMovieDTO.setTagline(movieDetail.getTagline());
		resultMovieDTO.setTitle(movieDetail.getTitle());
		resultMovieDTO.setVote_average(movieDetail.getVote_average());
		resultMovieDTO.setVote_count(movieDetail.getVote_count());
		resultMovieDTO.setGenres(movieDetail.getGenres());
		if (movieWatchProvider == null) movieWatchProvider = new MovieWatchProvider();
		if (movieWatchProvider.flatrate == null) movieWatchProvider.flatrate = new LinkedList<MovieWatchProviderDetails>();
		if (movieWatchProvider.buy == null) movieWatchProvider.buy = new LinkedList<MovieWatchProviderDetails>();
		if (movieWatchProvider.rent == null) movieWatchProvider.rent = new LinkedList<MovieWatchProviderDetails>();
		List<MovieWatchProviderDetails> providers = Stream.concat(movieWatchProvider.flatrate.stream(), movieWatchProvider.buy.stream()).collect(Collectors.toList());
		providers = Stream.concat(providers.stream(), movieWatchProvider.rent.stream()).collect(Collectors.toList());
		resultMovieDTO.setWatchProviders(providers);
		resultMovieDTO.setVideos(movieVideos);
		return resultMovieDTO;
	}
}
