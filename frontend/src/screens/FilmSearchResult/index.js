import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const FilmSearchResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const api2 = new api();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      await getMovieForGenreAndDuration(route.params.genreID, route.params.duration).then((items) => setMovies(items));
    }
    getMovies();
  }, []);

  async function getMovieForGenreAndDuration(genreID, duration) {
    list2 = [
      {
        adults,
        genre_ids: [],
        id,
        overview,
        release_date,
        title,
      },
    ] = await api2.getMoviesByGenreAndDuration(genreID, duration);
    return list2;
  }

  return (
    <View style={styles.container}>
      {
        <FlatList
          data={movies}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <TouchableOpacity onPress={() => navigation.navigate("FilmDetails", { title: item.title, movieID: item.id })}>
              <View>
                <Text style={styles.item}>{item.title}</Text>
              </View>

            </TouchableOpacity>;
          }}
        />
      }
    </View>
  );
};

export default FilmSearchResultScreen;
