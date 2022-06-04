import React, { useState, useEffect, useRef } from "react";
import { Card, Icon, SearchBar, Slider } from "@rneui/base";
import {
  getAllParkings,
  getRecentlyVisitedParkings,
  reset,
} from "../../features/Parkings/parkingsSlice";
import { useSelector, useDispatch } from "react-redux";

import { ListItem, useTheme, Tab, TabView } from "@rneui/themed";
import { ScrollView, StyleSheet } from "react-native";

import * as Device from "expo-device";

import Screen from "../../components/Layout/Screen";
import { KeyboardAvoidingWrapper } from "../../components/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper";

import { NavigationContainer } from "@react-navigation/native";

//TODO: delete once backend is setup
//for testing
import parkings from "./Data.Home";
import user from "./Data.User";

const platform = Device.osName;

function Home({ navigation, route }) {
  const [index, setIndex] = useState(0);
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

      overflow: "hidden",
    },
    searchBar: {
      padding: 15,
    },
    innerBar: {
      backgroundColor: theme.colors.primary,
      color: "white",
    },
  });

  return (
    <Screen route={route.name} screenName={`Hello, ${user.firstName}`}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item title="Parking" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="Recent" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="Favorite" titleStyle={{ fontSize: 12 }} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            <SearchBar
              placeholder="Search..."
              placeholderTextColor={"white"}
              containerStyle={styles.searchBar}
              inputContainerStyle={styles.innerBar}
              searchIcon={{ name: "search", color: "white" }}
              lightTheme
              platform={platform === "Android" ? "android" : "ios"}
            />
            {parkings.map((parking) => (
              <ListItem
                key={parking.id}
                style={{ padding: 1 }}
                onPress={() =>
                  navigation.navigate("ParkingScreen", {
                    parkingDetails: parking,
                    test: 2,
                  })
                }
              >
                <ListItem.Content>
                  <ListItem.Title>{parking.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}
          </ScrollView>
        </TabView.Item>

        <TabView.Item style={{ width: "100%" }}>
          <Card containerStyle={styles.card}>
            <Card.Title>Recently visited</Card.Title>
            <Card.Divider />
          </Card>
        </TabView.Item>

        <TabView.Item style={{ width: "100%" }}>
          <Card containerStyle={styles.card}>
            <Card.Title>Favorite Parking Lots</Card.Title>
            <Card.Divider />
            <ListItem style={{ padding: 1 }}>
              <ListItem.Content>
                <ListItem.Title>{"Parking 1"}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </Card>
        </TabView.Item>
      </TabView>
    </Screen>
  );
}

export default Home;
