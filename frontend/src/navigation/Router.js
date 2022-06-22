import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
            title: "Login",
            headerShown: false
          }}/>

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
            title: "",
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