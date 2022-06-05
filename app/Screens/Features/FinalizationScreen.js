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
import NumericInput from "react-native-numeric-input";

function FinalizationScreen({ route, navigation }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { parkingDetails } = route.params;
  const total = (e) => {
    return e * parkingDetails.price;
  };
  return (
    <Screen route={route.name} screenName={"Hours of parking"}>
      <ScrollView>
        <Card>
          <Card.Title>How many hours are you staying?</Card.Title>
          <Card.Divider />
          <View style={styles.hoursGroup}>
            <Text>Hours:</Text>
            <NumericInput
              minValue={0}
              onChange={(e) => setTotalPrice(total(e))}
              rounded={true}
            />
          </View>
          <Card.Divider />
          <Text>Total: {totalPrice} MAD</Text>
          <Button
            title={"Proceed to payment"}
            icon={{ type: "font-awesome", name: "angle-right", color: "white" }}
            iconPosition={"right"}
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
  hoursGroup: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default FinalizationScreen;
