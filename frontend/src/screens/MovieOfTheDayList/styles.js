import { withTheme } from "@rneui/themed";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "white",
    marginVertical: 10,
  },
  list: {
    padding: 25
  },
  title: {
    color: "white",
    padding: 10,
    paddingTop: 25,
    fontSize: 30,
    fontFamily: "monospace",
  },
});

export default styles;