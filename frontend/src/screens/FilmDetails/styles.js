import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
  player: {
    backgroundColor: "white"
  },
  movieTitle: {
    color: "white",
    fontSize: 25,
    fontFamily: "monospace"
  },
  myStarStyle: {
    color: '#9477fc',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  logo: {
    height: 70,
    width: 70,
    margin: 5
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  ratingBox: {
    padding: 5,
    alignItems: "center"
  },
  counts: {
    color: "white",
    fontSize: 15
  },
  overview: {
    padding: 5,
    fontSize: 18,
    color: "white",
  },
});

export default styles;