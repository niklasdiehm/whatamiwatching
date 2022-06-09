import React from "react";
import { View } from "react-native";
import { Image, Input, Button,  } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import api from "./../../services/api";


const LoginDisplay = (props) => {
  const navigation = useNavigation();

  function login(userName, password) {
    var loggedIn = false;
    returnData["",""] = JSON.parse(api.getLoginValidation(userName, password))
    loggedIn = returnData[0];
    if(loggedIn === "true"){
      var userID = returnData[1];
      navigation.navigate("FilmListScreen", { userID: userID });
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/logo.png")} style={styles.image}/>
      <View style={styles.inputContainer}>
        <Input style={styles.input} placeholder={"user"}/>
        <Input style={styles.input} placeholder={"password"} secureTextEntry={true}/>
      </View>
      <Button title={"Login"} titleStyle={styles.buttonText} containerStyle={styles.button} onPress={() => login()}/>
    </View>
  );
};

export default LoginDisplay;