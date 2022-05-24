package com.dhbw.wwi19b2.whatamiwatching.user.repository;

import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.dhbw.wwi19b2.whatamiwatching.user.entity.User;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends Repository<User, Long> {
	User findByUserNameAndPasswordHash(String userName, String passwordHash);
	User findByUserName(String userName);
}
