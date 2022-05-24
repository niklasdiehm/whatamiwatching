import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
    justifyContent: "center",
    padding: 15,
  },
  input: {
    marginTop:10,
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    width:250,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop:10,
    height:60,
    alignItems: 'center',
    marginBottom:20,
    borderRadius:10,
  },
});

export default styles;