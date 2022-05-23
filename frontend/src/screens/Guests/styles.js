import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  adultsText: {
    fontWeight: "bold",
  },
  agesText: {
    color: "#8d8d8d",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#676767",
    alignItems: "center",
    justifyContent: "center",
  },
  amountOfPeople: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 20,
    color: "#474747",
  },
  seeResults: {
    marginBottom: 20,
    backgroundColor: "#f15454",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  seeResultsText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;