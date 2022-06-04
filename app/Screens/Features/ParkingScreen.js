import React from "react";
import { View, Text } from "react-native";
import Screen from "../../components/Layout/Screen";

function ParkingScreen({ navigation, route }) {
  const { parkingDetails } = route.params;
  return (
    <Screen route={route.name} screenName={"Parking 1"}>
      <View>
        <Text>{parkingDetails.id}</Text>
      </View>
    </Screen>
  );
}

export default ParkingScreen;
