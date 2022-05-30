import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import {ListItem} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const list = [
  {
    filmName: 'Amy',
    description: 'Vice President'
  },
  {
    filmName: 'Chris Jackson',
    description: 'Vice Chairman'
  }
]


const FilmListScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
        list.map((l, i) => (
          <ListItem key={i} 
            bottomDivider
            onPress={() => navigation.navigate("Profile")}>
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