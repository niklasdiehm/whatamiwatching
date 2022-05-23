import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.adultsText}>Adults</Text>
            <Text style={styles.agesText}>Ages 13 or above</Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.amountOfPeople}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.adultsText}>Children</Text>
            <Text style={styles.agesText}>Ages 2-12</Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.amountOfPeople}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.adultsText}>Infants</Text>
            <Text style={styles.agesText}>Under 2</Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.amountOfPeople}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Explore",
            params: {
              screen: "SearchResults",
            },
          })
        }
        style={styles.seeResults}
      >
        <Text style={styles.seeResultsText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;