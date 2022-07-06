import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import YoutubePlayer from 'react-native-youtube-iframe';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../../services/api";


const FilmDetailsScreen = ({ route }) => {
  const { movieID } = route.params;
  const api2 = new api();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovies() {
      await getMovieByID().then((items) => setMovie(items));
    }
    getMovies();
  }, []);

  async function getMovieByID() {
    movieResponse = await api2.getMovieByID(movieID);
    return movieResponse;
  }

  return (
    <ScrollView style={styles.container}>
      {movie && movie.video ?
        <YoutubePlayer
          style={styles.player}
          height={300}
          videoId={movie.video.key}
        />
        : null}

      <View style={styles.ratingBox}>
        <Stars
          default={movie.vote_average}
          disabled={true}
          count={10}
          half={true}
          starSize={50}
          fullStar={<Icon name={'star'} size={30} style={[styles.myStarStyle]} />}
          emptyStar={<Icon name={'star-outline'} size={30} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
          halfStar={<Icon name={'star-half'} size={30} style={[styles.myStarStyle]} />}
        />
        <Text style={styles.counts}>{movie.vote_count} Votes</Text>
      </View>

      <Text style={styles.overview}>{movie.overview}</Text>
      <FlatList horizontal data={movie && movie.watchProviders ? movie.watchProviders : []} keyExtractor={(watchProvider) => watchProvider.provider_id} renderItem={({ item }) => {
        return <Image source={{ uri: "https://image.tmdb.org/t/p/w500" + item["logo_path"] }} style={styles.images} />;
      }} />
    </ScrollView>
  )
};

export default FilmDetailsScreen;