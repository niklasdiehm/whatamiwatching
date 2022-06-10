package com.dhbw.wwi19b2.whatamiwatching.genre.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.GenreUser;
import com.dhbw.wwi19b2.whatamiwatching.genre.entity.User;

@RepositoryRestResource(collectionResourceRel = "genreuser", path = "genreuser")
public interface GenreUserRepository extends CrudRepository<GenreUser, Long>{
	List<GenreUser> findByUser(User user);
	long deleteByUser(User user);
}