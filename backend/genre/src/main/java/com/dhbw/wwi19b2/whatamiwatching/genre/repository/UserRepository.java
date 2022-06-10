package com.dhbw.wwi19b2.whatamiwatching.genre.repository;

import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.dhbw.wwi19b2.whatamiwatching.genre.entity.User;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends Repository<User, Long> {
	User findById(long id);
}

