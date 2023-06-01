import { StyleSheet, View, Image } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const ViewMap = ({ venues, mapRegion }) => {
  const CustomMarker = ({ item }) => {
    return (
      <View style={styles.roundMarker}>
        <Image
          style={styles.roundImage}
          source={{
            uri: item.featured_image,
          }}
        />
      </View>
    );
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      style={{ alignSelf: "stretch", height: "50%" }}
      initialRegion={mapRegion}
    >
      {venues &&
        venues.length > 0 &&
        venues.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: item.lat,
                longitude: item.lon,
              }}
            >
              <CustomMarker item={item} />
            </Marker>
          );
        })}
    </MapView>
  );
};

export default ViewMap;

const styles = StyleSheet.create({
  roundMarker: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  roundImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
});
