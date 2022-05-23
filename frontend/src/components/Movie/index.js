import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Movie = (props) => {
    const movie = props.movie;

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
            {movie.title}
        </Text>

        <Text style={styles.description}>
            {movie.description}
        </Text>

        <Text style={styles.rating}>
            ${movie.rating}
        </Text>

    </View>
  );
};

export default Movie;