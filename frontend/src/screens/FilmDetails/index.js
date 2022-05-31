import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import YoutubePlayer from 'react-native-youtube-iframe';



const FilmDetailsScreen = (props) => {
    return(
      <View style={styles.container}>
        <YoutubePlayer
          style={styles.player}
          height={300}
          videoId={''}
        />
          <Text style={styles.description}>descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</Text>
      </View>
    )
};

export default FilmDetailsScreen;