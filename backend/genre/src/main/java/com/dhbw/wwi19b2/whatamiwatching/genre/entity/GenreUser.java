package com.dhbw.wwi19b2.whatamiwatching.genre.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class GenreUser implements Serializable{/**
	 * 
	 */
	private static final long serialVersionUID = 3845826971563085352L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull(message = "The id must not be null.")
	private long id;
	
	@ManyToOne
	@JoinColumn(name="userID", nullable=false)
	private User user;
	
	
	@NotNull(message = "The genre-ID must not be null.")
	private long genreID;
}
