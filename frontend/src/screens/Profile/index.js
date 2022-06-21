import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";


const ProfileScreen = (route) => {
  const userID = route.params;

    return(
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../../assets/images/blank_profile_picture.png')} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
                            
              <TextInput style={styles.buttonContainer} value={"Dummy User Name"}/>
              <TextInput style={styles.buttonContainer} value={"Best film genre"}/>
              <TextInput style={styles.buttonContainer} value={"Worst film genre"}/>   
            </View>
        </View>
      </View>
    )
};

export default ProfileScreen;
