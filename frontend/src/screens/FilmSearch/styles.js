import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "black",
        padding: 16,
    },
    input: {
        width: "90%",
    },
    label: {
        backgroundColor: "white",
        borderRadius: 50,
        height: 20
    },
    dropdown: {
        marginTop: 50,
        marginBottom: 50,
        height: 50,
        width: 350,
        textAlign: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
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