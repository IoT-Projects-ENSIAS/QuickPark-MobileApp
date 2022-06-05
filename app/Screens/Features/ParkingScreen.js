import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Card, Button, AirbnbRating } from "@rneui/base";
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
          <Text>
            <Text style={styles.boldText}>Description:</Text>{" "}
            {parkingDetails.desc}
          </Text>

          <Card.Divider />

          <Text>
            <Text style={styles.boldText}>Location:</Text>{" "}
            {parkingDetails.location}
          </Text>
          <Text>
            <Text style={styles.boldText}>Rating:</Text>{" "}
            <AirbnbRating
              defaultRating={parkingDetails.rating}
              isDisabled={true}
              size={15}
              showRating={false}
            />
          </Text>
          <Text>
            <Text style={styles.boldText}>Capacity:</Text>{" "}
            {parkingDetails.capacity}
          </Text>
          <Text>
            <Text style={styles.boldText}>Available spots:</Text>{" "}
            {parkingDetails.available}
          </Text>
          <Text>
            <Text style={styles.boldText}>Per hour rate:</Text>{" "}
            {parkingDetails.price}
          </Text>
          <Button
            title={"Reserve a spot"}
            containerStyle={styles.reservationButton}
            onPress={() =>
              navigation.navigate("ReservationScreen", {
                parkingDetails: parkingDetails,
              })
            }
          />
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
  boldText: {
    fontWeight: "bold",
  },
  reservationButton: {
    marginTop: 15,
  },
});

export default ParkingScreen;
