import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import YoutubePlayer from 'react-native-youtube-iframe';
import Stars from 'react-native-stars';
import Ionicons from '@expo/vector-icons';


const FilmDetailsScreen = (props) => {
    return(
      <View style={styles.container}>
        <YoutubePlayer
          style={styles.player}
          height={300}
          videoId={''}
        />
        <Stars 
          default={2.5}
          count={5}
          half={true}
          starSize={20}

          fullStar={ <Ionicons name="md-star" size={24} color="#E7A74E"/>}
          emptyStar={ <Ionicons name="md-star-outline" size={24} color="#E7A74E"/>}
          halfStar={<Ionicons name="md-star-half" size={24} color="#E7A74E"/>}
          disable={true}
        />
        <Text style={styles.description}>descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</Text>
      </View>
    )
};

export default FilmDetailsScreen;