import React from "react";
import { View } from "react-native";
import { Image, Input, Button,  } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const LoginDisplay = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/logo.png")} style={styles.image}/>
      <View style={styles.inputContainer}>
        <Input style={styles.input} placeholder={"user"}/>
        <Input style={styles.input} placeholder={"password"} secureTextEntry={true}/>
      </View>
      <Button title={"Login"} titleStyle={styles.buttonText} containerStyle={styles.button} onPressIn={() => navigation.navigate("Home")}/>
    </View>
  );
};

export default LoginDisplay;