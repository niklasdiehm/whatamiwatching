import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
    backgroundColor: 'black',
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
  textInput: {
    marginTop: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: 'center'
  },
  dropdown: {
    marginTop: 10,
    height: 60,
    width: 250,
    textAlign: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;