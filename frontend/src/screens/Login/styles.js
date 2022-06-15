import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
    justifyContent: "center",
    padding: 15,
    marginBottom: 50,
    marginTop: 100
  },
  input: {
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
    paddingBottom: 20,
    width: 350,
    backgroundColor: "white",
    borderRadius: 50,
    textAlign: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#59c9a1',
  },
});

export default styles;