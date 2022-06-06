import React from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import { Input, ListItem } from "@rneui/base";
import Screen from "../../components/Layout/Screen";
import user from "../Home/Data.User";

function Settings({ navigation, route }) {
  return (
    <Screen route={route.name} screenName={"Settings"}>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: "auto" }}>
          <ListItem
            style={styles.listItem}
            onPress={() => navigation.navigate("PersonalInfo")}
          >
            <ListItem.Content>
              <ListItem.Title>Personal Information </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem
            style={styles.listItem}
            onPress={() => navigation.navigate("AddCars")}
          >
            <ListItem.Content>
              <ListItem.Title>Add cars</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
        <Button title="Log out" />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    padding: 15,
  },

  listItem: {
    padding: 1,
  },
});
export default Settings;
