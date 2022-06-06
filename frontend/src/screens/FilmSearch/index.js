import React, { useState, Component, setState } from "react";
import { View, TextInput, Input, Text } from "react-native";
import styles from "./styles";


const MovieSearchScreen = (props) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={"Which genre?"}
      />

    </View>
  )
};

export default MovieSearchScreen;