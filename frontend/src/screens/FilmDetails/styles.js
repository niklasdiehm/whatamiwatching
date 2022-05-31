import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  description: {
    padding: 5,
    fontSize: 18,
  },
  myStarStyle: {
    color: '#9477fc',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  logo:{
    height: 70,
    width: 70,
    margin: 5
  },
  logoContainer:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;