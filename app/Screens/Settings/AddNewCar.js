import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Input, Button, Card } from "@rneui/base";
import Screen from "../../components/Layout/Screen";
import user from "../Home/Data.User";

function AddCars({ navigation, route }) {
  return (
    <Screen route={route.name} screenName={"Settings"}>
      <Card>
        <Card.Title>Add Cars</Card.Title>
        <Card.Divider />
        <View>
          <Input placeholder="Car model" />
          <Input placeholder="Car owner name" />
          <Input placeholder="License plate" />
          <Input placeholder="Car registration" />
          <Input placeholder="Car color" />
        </View>
        <Button title={"Add"} />
      </Card>
    </Screen>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 2,
    flex: 1,
    justifyContent: "center",
  },

  searchBar: {
    padding: 15,
  },

  listItem: {
    padding: 1,
  },
});
export default AddCars;
