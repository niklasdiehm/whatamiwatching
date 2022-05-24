import React from "react";
import { View, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "react-native-login-screen";
import styles from "./styles";

const LoginDisplay = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <LoginScreen
  logoImageSource={require("../../../assets/logo.png")}
  onLoginPress={() => navigation.navigate("Home")}
  onHaveAccountPress={() => {}}
  onEmailChange={(email) => {}}
  onPasswordChange={(password) => {}}

  style={styles.container}
  textInputContainerStyle={styles.input}
  loginButtonStyle={styles.button}
  loginTextStyle={styles.buttonText}
  disableSocialButtons={true}
  disableDivider={true}
  haveAccountText={"Noch keinen Account? Registrieren"}
/>
    </View>
  );
};

export default LoginDisplay;