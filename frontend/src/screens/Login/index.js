import React from "react";
import { View } from "react-native";
import { Image, Input, Button,  } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import api from "./../../services/api";


const LoginDisplay = (props) => {
  const navigation = useNavigation();
  const api2 = new api();
  function login(userName, password) {
    var loggedIn = false;
    console.log(api2.getLoginValidated(userName, password))
    const [login, user] = Promise.all(api2.getLoginValidated(userName, password));
    loggedIn = login
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