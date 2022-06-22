import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, TextInput } from "react-native";
import api from "../../services/api";
import styles from "./styles";
import { ContextTest } from "../../../App";
import DropDownPicker from 'react-native-dropdown-picker';


const ProfileScreen = (route) => {
  const things = useContext(ContextTest);
  const userID = things.userID;
  const api2 = new api();

  //Dropdown
  const [open, setOpen] = useState(false);
  const [genreID, setGenreID] = useState(null);
  const [items, setItems] = useState([]);

  const [favoriteGenre, setFavoriteGenre] = useState([]);


  useEffect(() => {
    async function getGenres() {
      await getGenresList().then((items) => setItems(items.map(item => {
        return { label: item.name, value: item.id };
      })));
    }
    async function getFavoritGenreForUser(userID) {
      await getFavoritGenreFromApi(userID).then((genre) => setFavoriteGenre(genre))
    }
    getGenres();
    getFavoritGenreForUser(userID);
  }, []);

  async function getGenresList() {
    genreList = await api2.getGenres();
    return genreList;
  }

  async function getFavoritGenreFromApi(userIdParameter) {
    favGenre = await api2.getFavoriteGenre(userIdParameter);
    return favGenre;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={require('../../../assets/images/blank_profile_picture.png')} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <TextInput style={styles.textInput} value={favoriteGenre.user.userName} />

          <DropDownPicker
            style={styles.dropdown}
            open={open}
            value={favoriteGenre.genreID}
            items={items}
            setOpen={setOpen}
            setValue={setGenreID} //Post Aufruf --> Update Favorite Genre / Oder Button und dann aktualisieren
            setItems={setItems}
          />
        </View>
      </View>
    </View>
  )
};

export default ProfileScreen;
