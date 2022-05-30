import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import {ListItem} from "@rneui/themed";

const list = [
  {
    name: 'Amy',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman'
  }
]

const FilmListScreen = () => {
  return (
    <View style={styles.container}>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  );
}

export default FilmListScreen;