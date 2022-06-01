import React, { useState } from "react";
import { View, TextInput, Input } from "react-native";
import styles from "./styles";


const MovieSearchScreen = (props) => {
    return(
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={"Which genre?"}
        />
        <Input type={"number"}/>
      

      </View>
    )
};

export default MovieSearchScreen;