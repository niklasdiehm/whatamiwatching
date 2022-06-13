import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

const filmList = [
  {
    filmName: "Harry Potter",
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    description: 'First Item',
  },
  {
    filmName : "Avengers",
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    description: 'Second Item',
  },
  {
    filmName: "Indiana Jones",
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    description: 'Third Item',
  },
];

const FilmListScreen = (route) => {
  const navigation = useNavigation();
  //const { userID } = route.params;
  const api2 = new api();

  const list2 = api2.getMovieOfTheDay(1)
  console.log(list2)

  return (
    <View style={styles.container}>
      { 
        
        filmList.map((l, i) => (
          <ListItem key={i}
            bottomDivider
            onPress={() => navigation.navigate("FilmDetails", { movieID: l.id })}>
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
