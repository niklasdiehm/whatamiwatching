import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import Router from "./src/navigation/Router";


export default function App() {
  return (
    <ContextTest.Provider value={{userID: null}}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </ContextTest.Provider>
  );
}

export const ContextTest = React.createContext(
  {
    userID: null
  }
);
export const ContextTestProvider = ContextTest.Provider