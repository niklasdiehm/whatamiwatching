import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";
import LoginDisplay from "../screens/Login";
import HomeTabNavigator from "./HomeTabNavigator.js";
import FilmDetailsScreen from "../screens/FilmDetails";
const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name={"Login"}
          component={LoginDisplay}
          options={{
            title: "Login"
          }}/>

        <Stack.Screen
          name={"FilmListScreen"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name={"FilmDetails"}
          component={FilmDetailsScreen}
          options={{
            title: "FilmTitle",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;