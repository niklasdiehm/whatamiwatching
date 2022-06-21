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
  console.log("Profile UserID:" + userID); //TODO: remove
  const [open, setOpen] = useState(false);
  const [genreID, setGenreID] = useState(null);
  const [favoriteGenre, setFavoriteGenre] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getGenres() {
      await getGenresList().then((items) => setItems(items));
    }
    async function getFavoriteGenre(userID) {
      await getFavoriteGenreFromApi(userID).then((favoriteGenre) => setFavoriteGenre(favoriteGenre.genreID));
    }
    getGenres();
    getFavoriteGenre(userID);
  }, []);

  async function getGenresList() {
    list2 = await api2.getGenres();
    return list2;
  }

  async function getFavoriteGenreFromApi(userID) {
    console.log("getFavoriteGenreFromApi UserID:" + userID); //TODO: remove
    favGenre = await api2.getFavoriteGenre(userID);
    console.log("Antwort: " + favGenre); //TODO: remove
    return favGenre;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={require('../../../assets/images/blank_profile_picture.png')} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>

          <TextInput style={styles.buttonContainer} value={"favoriteGenre.user.userName"} />

          <DropDownPicker
            open={open}
            value={genreID} //value auf favoriteGenre.genreID setzen --> wenn Antwort klappt
            items={items}
            setOpen={setOpen}
            setValue={setGenreID} //setFavoriteGenre --> Api Post --> Genre ändern
            setItems={setItems}
          />
        </View>
      </View>
    </View>
  )
};

export default ProfileScreen;
