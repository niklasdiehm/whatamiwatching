import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";



const FilmListScreen = (route) => {
  const navigation = useNavigation();
  //const { userID } = route.params;
  const api2 = new api();
  
  /* async function getMovieOfTheDayList() {
    list2 = [{adult, genre_ids: [], id, overview, release_date, title}] = await api2.getMovieOfTheDay(1);
    console.log(list2)
    
    return list2;
  } */


  return (
    <View style={styles.container}>
      { 
        route.params.list1.map((l, i) => (
          <ListItem key={i}
            bottomDivider
            onPress={() => navigation.navigate("FilmDetails", { movieID: l.id })}>
            <ListItem.Content>
              <ListItem.Title>{l?.title || "Not loaded yet"}</ListItem.Title>
              <ListItem.Subtitle>{l?.id || "Not loaded yet"}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        ))
      }
    </View>
  );
}

export default FilmListScreen;
