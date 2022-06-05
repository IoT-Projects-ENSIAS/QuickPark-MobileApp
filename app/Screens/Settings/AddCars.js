import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import Screen from "../../components/Layout/Screen";
import user from "../Home/Data.User";

function AddCars({ navigation, route }) {
  return (
    <Screen route={route.name} screenName={"Settings"}>
      <ScrollView>
        <Input placeholder="Car Model" />
        <Input placeholder="License plate" />
        <Input placeholder="Car owner" />
        <Input placeholder="Car status" />
        <Input placeholder="Car color" />
        <Button title="Save" />
      </ScrollView>
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
