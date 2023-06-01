import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { getCities } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ViewMap from "../screens/ViewMap";
import Card from "../screens/Card";

const Home = () => {
  const dispatch = useDispatch();

  const { cities } = useSelector((states) => states.userReducer);
  const venues = cities.results;

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const [mapRegion, setMapRegion] = useState({
    latitude: 25.2009,
    longitude: 55.2763,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <ViewMap mapRegion={mapRegion} venues={venues} />
      <View style={styles.cardContainer}>
        <Card venues={venues} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
