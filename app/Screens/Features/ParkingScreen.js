import React from "react";
import { View, Text } from "react-native";
import Screen from "../../components/Layout/Screen";

function ParkingScreen({ navigation, route }) {
  const { userID } = route.params;
  return (
    <Screen>
      <View>
        <Text>{JSON.stringify(userID)}</Text>
      </View>
    </Screen>
  );
}

export default ParkingScreen;
