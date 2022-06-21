import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Button } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import api from "../../services/api";



const MovieSearchScreen = (props) => {

  const api2 = new api();
  const navigation = useNavigation();
  
  const [duration, setDuration] = useState("120");

  const [open, setOpen] = useState(false);
  const [genreID, setGenreID] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getGenres() {
      await getGenresList().then((items) => setItems(items.map(item => {
        return {label: item.name, value: item.id};
      })));
    }
    getGenres();
  }, []);

  async function getGenresList() {
    list2 = await api2.getGenres();
    return list2;
  }


  return (
    <View style={styles.container}>
      <DropDownPicker
      open={open}
      value={genreID}
      items={items}
      setOpen={setOpen}
      setValue={setGenreID}
      setItems={setItems}
    />
    <Text>Duration</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.textInput}
        returnKeyType="done"
        value={duration}
        onChangeText={setDuration}
        placeholder={"Duration in minutes"}
      />
      <Button title="Search" titleStyle={styles.buttonText} containerStyle={styles.button} onPress={() =>  console.log(genreID)} />
    </View>
  )
};

export default MovieSearchScreen;