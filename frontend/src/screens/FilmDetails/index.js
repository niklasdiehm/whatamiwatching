import React, { Component, useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import YoutubePlayer from 'react-native-youtube-iframe';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../../services/api";


const FilmDetailsScreen = ({ route }) => {
  const { movieID } = route.params;
  const api2 = new api();

  const [movies, setMovies] = useState([]);
  const [trailerID, setTrailerID] = useState('');


  useEffect(() => {
    async function getMovies() {
      await getMovieByID().then((items) => setMovies(items));
      //getTrailer();
    }
    async function getTrailer() {
      await getTrailerIdFromMovie().then((trailerID) => setTrailerID(trailerID));
    }
    getMovies();

  }, []);


  async function getMovieByID() {
    movie = {
      id,
      title,
      overview,
      runtime,
      genres: [{ id, name },],
      release_date,
      tagline,
      vote_average,
      vote_count,
      watchProviders: [{ logo_path, provider_id, provider_name },],
      videos: [{ id, key, site, type },]
    }
      = await api2.getMovieByID(movieID);
    setTrailerID(getTrailerIdFromMovie());
    console.log(trailerID);
    return movie;
  }

  function getTrailerIdFromMovie() {
    console.log(movies)
    var id = movies.map(({ videos }) => videos.filter((type) => type === 'Trailer'));
    // var id = movies.videos.find(videos => videos['type' === 'Trailer'])
    console.log(id)
    return id;
    // if (movies.filter(e => e.type === 'Trailer').length > 0) {
    //   return e.id
    // }
  }


  return (
    <View style={styles.container}>
      <YoutubePlayer
        style={styles.player}
        height={300}
        videoId={trailerID}
      />

      <Text style={styles.movieTitle}>{movies.title}</Text>

      <View style={styles.ratingBox}>
        <Stars
          default={movies.vote_average}
          disabled={true}
          count={10}
          half={true}
          starSize={50}
          fullStar={<Icon name={'star'} size={30} style={[styles.myStarStyle]} />}
          emptyStar={<Icon name={'star-outline'} size={30} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
          halfStar={<Icon name={'star-half'} size={30} style={[styles.myStarStyle]} />}
        />
        <Text style={styles.counts}>{movies.vote_count} Votes</Text>
      </View>

      <Text style={styles.overview}>{movies.overview}</Text>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../../assets/images/netflix.png')} />
        <Image style={styles.logo} source={require('../../../assets/images/prime.png')} />
        <Image style={styles.logo} source={require('../../../assets/images/apple.jpg')} />
        <Image style={styles.logo} source={require('../../../assets/images/sky.png')} />
        <Image style={styles.logo} source={require('../../../assets/images/joyn.png')} />
      </View>
    </View>
  )
};

export default FilmDetailsScreen;