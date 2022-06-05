import React, { useState } from "react";
import Screen from "../../components/Layout/Screen";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Card, Button } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";

function ReservationScreen({ route, navigation }) {
  const { parkingDetails } = route.params;
  const [selected, setSelected] = useState(false);
  let parkingGrid = [];
  let reserved = [];
  for (let index = 1; index <= parkingDetails.capacity; index++) {
    parkingGrid.push(
      <TouchableOpacity
        key={index}
        style={styles.spot}
        onPress={() => setSelected(!selected)}
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
            onPress={() =>
              navigation.navigate("FinalizationScreen", {
                parkingDetails: parkingDetails,
              })
            }
          ></Button>
          <Button
            containerStyle={{ marginTop: 1 }}
            title={"Cancel"}
            icon={{ type: "font-awesome", name: "trash", color: "white" }}
            iconPosition={"right"}
            onPress={() => navigation.navigate("Home")}
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
