import React, { useState } from "react";
import { Card, Icon, Header, SearchBar, Slider } from "@rneui/base";
import { ListItem, useTheme } from "@rneui/themed";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import * as Device from "expo-device";

import Screen from "../../components/Layout/Screen";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const list = [
  {
    title: "Parking 1",
  },
  {
    title: "Parking 2",
  },
  {
    title: "Parking 3",
  },
  {
    title: "Parking 4",
  },
  {
    title: "Parking 5",
  },
  {
    title: "Parking 6",
  },
  {
    title: "Parking 7",
  },
  {
    title: "Parking 7",
  },
];

const platform = Device.osName;

function Home(props) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    body: {
      padding: 2,
      flex: 1,
      justifyContent: "center",
    },
    card: {
      padding: 15,
      borderRadius: 15,
      backgroundColor: theme.colors.grey5,
      maxHeight: height * 0.6,
      overflow: "hidden",
    },
    searchBar: {
      borderRadius: 15,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: theme.colors.greyOutline,
      marginBottom: 5,
    },
  });
  return (
    <Screen>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              console.log("Menu Open");
            }}
            style={{ padding: 5 }}
          >
            <Icon name="bars" type="font-awesome" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Header",
          style: { color: "white", padding: 5 },
        }}
      />
      <View style={styles.body}>
        <Card containerStyle={styles.card}>
          <Card.Title>Recently visited</Card.Title>
          <Card.Divider />
          <ListItem style={{ padding: 1 }}>
            <ListItem.Content>
              <ListItem.Title>{"Parking 1"}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Card>
        <Card containerStyle={styles.card}>
          <Card.Title>Choose your parking lot</Card.Title>
          <SearchBar
            placeholder="Search..."
            containerStyle={styles.searchBar}
            lightTheme
            platform={platform === "Android" ? "android" : "ios"}
          />
          <Card.Divider />
          <ScrollView>
            {list.map((item, i) => (
              <ListItem key={i} style={{ padding: 1 }}>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}
          </ScrollView>
        </Card>
      </View>
    </Screen>
  );
}

export default Home;
