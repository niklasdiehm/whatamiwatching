import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import YoutubePlayer from 'react-native-youtube-iframe';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FilmSearchScreen = (props) => {
    return(
        <TextInput
        style={styles.textInput}
        placeholder={"Which genre?"}
        onChangeText={setInputText}
      />
      
      
    )
};

export default FilmSearchScreen;