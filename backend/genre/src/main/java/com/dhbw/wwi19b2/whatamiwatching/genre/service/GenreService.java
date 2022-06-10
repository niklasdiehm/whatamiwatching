package com.dhbw.wwi19b2.whatamiwatching.genre.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.Genre;
import com.dhbw.wwi19b2.whatamiwatching.genre.entity.GenreUser;
import com.dhbw.wwi19b2.whatamiwatching.genre.entity.User;
import com.dhbw.wwi19b2.whatamiwatching.genre.proxy.TMDBProxy;
import com.dhbw.wwi19b2.whatamiwatching.genre.repository.GenreUserRepository;
import com.dhbw.wwi19b2.whatamiwatching.genre.repository.UserRepository;

@Service
public class GenreService {

	private static final String apiKey = "fa6d4e8708a0ef994887f86f263d7950";
	
	@Autowired
	private TMDBProxy tmdbProxy;
	
	@Autowired
	private GenreUserRepository genreUserRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public List<Genre> getGenres() {
		return this.tmdbProxy.getGenres(apiKey).getGenres();
	}
	
	public GenreUser getFavoriteGenre(long userID) {
		User user = this.userRepository.findById(userID);
		List<GenreUser> genreUsers = this.genreUserRepository.findByUser(user);
		return genreUsers.get(0);
	}
	@Transactional
	public long saveFavorite(long userID, long genreID) {
		User user = this.userRepository.findById(userID);
		GenreUser genreUser = new GenreUser(user, genreID);
		/* Currently, only one favorite feature per user is allowed. Therefore, every genre_user-entry for the user
		 * gets deleted. */
		long countRows = genreUserRepository.deleteByUser(user);
		System.out.println(countRows);
		GenreUser response = genreUserRepository.save(genreUser);
		return response.getGenreID();
	}
}
