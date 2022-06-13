import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";



const FilmListScreen = (route) => {
  const navigation = useNavigation();
  //const { userID } = route.params;
  const api2 = new api();


  async function getMovieOfTheDayList() {
    list2 = [{ adults, genre_ids: [], id, overview, release_date, title }] = await Promise.all(api2.getMovieOfTheDay(1));
    console.log(list2)

    return list2;
  }


  return (
    <View style={styles.container}>
      {
        /* getMovieOfTheDayList().map((l, i) => (
          <ListItem key={i}
            bottomDivider
            onPress={() => navigation.navigate("FilmDetails", { movieID: l.id })}>
            <ListItem.Content>
              <ListItem.Title>{l?.title || "Not loaded yet"}</ListItem.Title>
              <ListItem.Subtitle>{l?.id || "Not loaded yet"}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        )) */
        <FlatList
        data={[
          {key: getMovieOfTheDayList()[0]?.title || "not loaded yet"},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      }
    </View>
  );
}

export default FilmListScreen;
