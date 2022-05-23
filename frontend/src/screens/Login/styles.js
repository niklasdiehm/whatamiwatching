import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#888888",
  },
  input: {
    width: "100%",
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    backgroundColor: "lightslategrey"
  },
  button: {
    marginTop:10,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:10,
    backgroundColor: "#888888",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;