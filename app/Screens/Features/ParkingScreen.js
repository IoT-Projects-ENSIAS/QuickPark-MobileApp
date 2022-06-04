import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Card } from "@rneui/base";
import Screen from "../../components/Layout/Screen";

const { width, height } = Dimensions.get("window");

function ParkingScreen({ navigation, route }) {
  const { parkingDetails } = route.params;
  return (
    <Screen route={route.name} screenName={"Parking 1"}>
      <View>
        <Card>
          <Card.Title>{parkingDetails.name}</Card.Title>
          <Card.Divider />
          <Image
            style={styles.image}
            source={{
              uri: parkingDetails.img,
            }}
          />
          <Text>Description: {parkingDetails.desc}</Text>
          <Text>Location: {parkingDetails.location}</Text>
          <Text>Rating: {parkingDetails.rating}</Text>
          <Text>Capacity: {parkingDetails.capacity}</Text>
          <Text>Available spots: {parkingDetails.available}</Text>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    resizeMode: "contain",
    width: "100%",
    height: height / 3,
  },
});

export default ParkingScreen;
