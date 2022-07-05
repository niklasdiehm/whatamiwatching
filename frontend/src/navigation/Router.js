import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginDisplay from "../screens/Login";
import HomeTabNavigator from "./HomeTabNavigator.js";
import FilmDetailsScreen from "../screens/FilmDetails";
import FilmSearchResultScreen from "../screens/FilmSearchResult";
import { ContextTest } from "../../App";

const Stack = createStackNavigator();

const Router = (props) => {
  const things = useContext(ContextTest);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name={"Login"}
          component={LoginDisplay}
          options={{
            title: "Login",
            headerShown: false
          }} />

        <Stack.Screen
          name={"FilmListScreen"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"FilmDetails"}
          component={FilmDetailsScreen}
          options={{
            title: things.movieTitle,
            headerBackTitle: "Back",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black"
            }
          }}
        />

        <Stack.Screen
          name={"FilmSearchResultScreen"}
          component={FilmSearchResultScreen}
          options={{
            title: "Search Results",
            headerBackTitle: "Back",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black"
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;