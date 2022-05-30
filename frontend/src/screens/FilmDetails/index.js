import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";


const FilmDetailsScreen = (props) => {
    return(
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../../assets/images/blank_profile_picture.png')} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
                            
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Dummy User Name</Text>  
              </TouchableOpacity>          
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Best film genre</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                 <Text>Worst film genre</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
};

export default FilmDetailsScreen;