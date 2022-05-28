import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';



const FilmListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Avatar'},
          {key: 'Star Wars'},
          {key: 'Doctor Strange'},
          {key: 'Iron Man'},
          {key: 'Thor'},
          {key: 'Captain America'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FilmListScreen;