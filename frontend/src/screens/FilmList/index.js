import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import {ListItem} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Movie from "../../components/Movie";
import api from "../../services/api";

const list = [
  {
    filmName: 'Amy',
    description: 'Vice President',
    id: 22
  },
  {
    filmName: 'Chris Jackson',
    description: 'Vice Chairman',
    id: 24
  }
]

//const movie = api.getMovieById(movieId);

const FilmListScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
        list.map((l, i) => (
          <ListItem key={i} 
            bottomDivider
            onPress={() => navigation.navigate("FilmDetails", {movieID: l.id})}>
            <ListItem.Content>
              <ListItem.Title>{l.filmName}</ListItem.Title>
              <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        ))
      }   
    </View>
  );
}

export default FilmListScreen;