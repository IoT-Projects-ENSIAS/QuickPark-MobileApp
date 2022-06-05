import { Card } from "@rneui/base";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import Screen from "../../components/Layout/Screen";
function CountdownScreen({ navigation }) {
  return (
    <Screen screenName={"Spot reserved"}>
      <View style={styles.main}>
        <Card>
          <Card.Title>
            You have 30 minutes to get to the parking before cancelling your
            reservation:
          </Card.Title>
          <Card.Divider />
          <CountDown
            until={1000}
            size={30}
            digitStyle={{ backgroundColor: "#757575" }}
            timeToShow={["H", "M", "S"]}
          />
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CountdownScreen;
