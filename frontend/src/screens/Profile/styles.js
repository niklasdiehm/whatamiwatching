import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  body: {
    marginTop: 80,
    backgroundColor: 'black',
    height: '100 %'
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: 'black',
  },
  inputs: {
    width: "90%",
    backgroundColor: 'black',
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  dropdown: {
    marginTop: 10,
    marginBottom: 50,
    height: 50,
    borderRadius: 10,
  },
  textInput: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 10,

  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#59c9a1',
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%"
  },
  buttonContainer: {
    width: "50%",
    marginLeft: "25%",
    marginRight: "25%",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;