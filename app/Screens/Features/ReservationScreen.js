import React from "react";
import Screen from "../../components/Layout/Screen";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Card, Button } from "@rneui/base";

function ReservationScreen({ route }) {
  const { parkingDetails } = route.params;
  let parkingGrid = [];
  let reserved = [];
  for (let index = 1; index <= parkingDetails.capacity; index++) {
    parkingGrid.push(
      <TouchableOpacity
        key={index}
        style={styles.spot}
        onPress={() => {
          styles.spot.backgroundColor = "yellow";
        }}
      >
        <Text>{index}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <Screen route={route.name} screenName={"Reserve your spot"}>
      <ScrollView>
        <Card>
          <Card.Title>Choose your spot</Card.Title>
          <Card.Divider />
          <View style={styles.grid}>{parkingGrid}</View>
          <Button
            title={"Next"}
            icon={{ type: "font-awesome", name: "angle-right", color: "white" }}
            iconPosition={"right"}
          ></Button>
        </Card>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    backgroundColor: "aliceblue",
    justifyContent: "center",
  },
  spot: {
    padding: 15,
    backgroundColor: "white",
    width: 50,
    height: 50,
    margin: 1,
  },
});

export default ReservationScreen;
