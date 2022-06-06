import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Input, Button, ListItem } from "@rneui/base";
import Screen from "../../components/Layout/Screen";
import user from "../Home/Data.User";

function AddCars({ navigation, route }) {
  return (
    <Screen route={route.name} screenName={"Registered Cars"}>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: "auto" }}>
          <ListItem
            style={styles.listItem}
            onPress={() => navigation.navigate("PersonalInfo")}
          >
            <ListItem.Content>
              <ListItem.Title>Mercedes BenzQ </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem
            style={styles.listItem}
            onPress={() => navigation.navigate("AddCars")}
          >
            <ListItem.Content>
              <ListItem.Title>BMW</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
        <Button
          title="Add a new car"
          onPress={() => navigation.navigate("AddNewCar")}
        />
      </View>
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
