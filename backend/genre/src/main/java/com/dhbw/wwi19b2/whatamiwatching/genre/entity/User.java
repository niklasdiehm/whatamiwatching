package com.dhbw.wwi19b2.whatamiwatching.genre.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


/**
 * The user-model gets used to save and load users in the database
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -137064404333846146L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull(message = "The user-ID must not be null.")
	private long id;
	
	@NotNull(message = "The name of the user must not be null")
	@Size(min = 1, max = 100, message = "The length of the username must not be longer than 100 characters")
	private String userName;
	
	@NotNull(message = "The password-hash must not be null")
	private String passwordHash;
	
	@NotNull(message = "The password salt must not be null")
	private String salt;
	
	@OneToMany(mappedBy="user")
    private Set<GenreUser> genreUsers;
}
