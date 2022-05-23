import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import Router from "./src/navigation/Router";
import LoginScreen from "react-native-login-screen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginScreen
        logoImageSource={require("./assets/logo.png")}
        onLoginPress={() => {}}
        onHaveAccountPress={() => {}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
      />
      <Router />
    </>
  );
}