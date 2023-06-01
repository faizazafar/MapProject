import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useState } from "react";
import Home from "./src/components/Home";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default App;
