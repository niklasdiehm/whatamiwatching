import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import YoutubePlayer from 'react-native-youtube-iframe';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FilmDetailsScreen = (props) => {
    
    return(
      <View style={styles.container}>
        <YoutubePlayer
          style={styles.player}
          height={300}
          videoId={'o4wZ_SBom88'}
        />
        <Stars
          default={5.5}
          disabled={true}
          count={10}
          half={true}
          starSize={50} 
          fullStar={<Icon name={'star'} size={30} style={[styles.myStarStyle]}/>}
          emptyStar={<Icon name={'star-outline'} size={30} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
          halfStar={<Icon name={'star-half'} size={30} style={[styles.myStarStyle]}/>}
        />
        
        <Text style={styles.description}>descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</Text>
      <View style={styles.logoContainer}>
      <Image  style={styles.logo} source={require('../../../assets/images/netflix.png')} />
      <Image  style={styles.logo} source={require('../../../assets/images/prime.png')} />
      <Image  style={styles.logo} source={require('../../../assets/images/apple.jpg')} />
      <Image  style={styles.logo} source={require('../../../assets/images/sky.png')} />
      <Image  style={styles.logo} source={require('../../../assets/images/joyn.png')} />
      </View>
      </View>
    )
};

export default FilmDetailsScreen;