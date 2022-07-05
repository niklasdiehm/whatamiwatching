import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    inputs: {
        width: "90%",
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
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        paddingLeft: 10
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
      },
    button: {
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#59c9a1',
    },
});

export default styles;