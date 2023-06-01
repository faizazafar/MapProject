import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { useRef } from "react";
import { Animated, useWindowDimensions } from "react-native";

const Card = ({ venues }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 500;
  return (
    <View>
      <View style={styles.textAreaContainer}>
        {venues &&
          venues.length > 0 &&
          venues.map((image, imageIndex) => {
            const inputRange = [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ];
            return (
              <Animated.Text
                style={[
                  styles.textView,
                  {
                    transform: [
                      {
                        translateY: scrollX.interpolate({
                          inputRange,
                          outputRange: [-500, -50, 0],
                        }),
                      },
                    ],
                  },
                  {
                    opacity: scrollX.interpolate({
                      inputRange,
                      outputRange: [0, 1, 0],
                    }),
                  },
                  {
                    color: image.color,
                  },
                ]}
              >
                {image.name}
              </Animated.Text>
            );
          })}
      </View>
      <View style={[styles.scrollContainer, { height: windowHeight }]}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {venues &&
            venues.length > 0 &&
            venues.map((image, imageIndex) => {
              return (
                <Animated.View style={{ width: windowWidth }} key={imageIndex}>
                  <Image
                    source={{
                      uri: image.featured_image,
                    }}
                    style={styles.card}
                  />
                </Animated.View>
              );
            })}
        </ScrollView>
      </View>
      <View style={styles.indicatorContainer}>
        {venues &&
          venues.length > 0 &&
          venues.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={[
                  styles.normalDots,
                  { width },
                  { backgroundColor: "grey" },
                ]}
              />
            );
          })}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  scrollContainer: {
    shadowColor: "#6A6C6E",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 1,
  },
  card: {
    flex: 1,
    marginVertical: 10,
    width: 300,
    height: 100,
    overflow: "hidden",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#6A6C6E",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 1,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,

    marginHorizontal: 4,
  },
  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
});
