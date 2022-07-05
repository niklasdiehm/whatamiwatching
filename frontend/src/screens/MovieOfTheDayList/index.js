import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ContextTest } from "../../../App";

const MovieOfTheDayListScreen = (route) => {
  const things = useContext(ContextTest);
  const navigation = useNavigation();
  const userID = things.userID;
  const api2 = new api();

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function getMovies() {
      await getMovieOfTheDayList().then((items) => setMovies(items));
    }
    getMovies();
  }, []);

  async function getMovieOfTheDayList() {
    list2 = [
      {
        adults,
        genre_ids: [],
        id,
        overview,
        release_date,
        title,
      },
    ] = await api2.getMovieOfTheDay(userID);
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
            return <TouchableOpacity onPress={() => { navigation.navigate("FilmDetails", { movieID: item.id }); things.movieTitle = item.title }}>
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

export default MovieOfTheDayListScreen;
