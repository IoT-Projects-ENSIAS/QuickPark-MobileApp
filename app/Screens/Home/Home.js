import React, { useState,useEffect, useRef } from "react";
import { Card, Icon, SearchBar, Slider } from "@rneui/base";
import { getAllParkings,reset } from "../../features/Parkings/parkingsSlice";
import { useSelector, useDispatch } from "react-redux";

import { ListItem, useTheme, Tab, TabView } from "@rneui/themed";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import * as Device from "expo-device";

import Screen from "../../components/Layout/Screen";
import { KeyboardAvoidingWrapper } from "../../components/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper";

<<<<<<< HEAD
const list = [
  {
    id: 1,
    title: "Parking 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin, erat ut pretium posuere, ipsum lacus ornare nulla, ut consectetur nunc enim et arcu. Maecenas ultrices nulla sed leo eleifend, vitae volutpat neque sagittis.",
    rating: "Good",
    location: "101, Avenue Essalam (c.y.m.), bloc Tsf",
    capacity: "90",
    available: "20",
    reviews: [
      {
        stars: 4,
        opinion:
          "Morbi augue nisi, euismod quis vulputate viverra, aliquet quis lorem. ",
      },
      {
        stars: 3,
        opinion:
          "Morbi augue nisi, euismod quis vulputate viverra, aliquet quis lorem. ",
      },
    ],
  },
  {
    id: 2,
    title: "Parking 2",
  },
  {
    id: 3,
    title: "Parking 3",
  },
  {
    id: 4,
    title: "Parking 4",
  },
  {
    id: 5,
    title: "Parking 5",
  },
  {
    id: 6,
    title: "Parking 6",
  },
  {
    id: 7,
    title: "Parking 7",
  },
  {
    id: 8,
    title: "Parking 8",
  },
  {
    id: 8,
    title: "Parking 8",
  },
  {
    id: 8,
    title: "Parking 8",
  },
  {
    id: 8,
    title: "Parking 8",
  },
];

const platform = Device.osName;

function Home({ navigation }) {
=======

const platform = Device.osName;

function Home(props) {

  const dispatch = useDispatch();

  const { emailUser } = useSelector(
    (state) => state.auth
  );

  const { parkings, isLoading } = useSelector(
    (state) => state.parkings
  );
  //console.log(user);
>>>>>>> auth-backend
  const [index, setIndex] = useState();

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
  console.log(emailUser);
  useEffect(()=>{
    if(!parkings){
      dispatch(getAllParkings());
      dispatch(reset());
    }
    
    console.log(parkings);
  },[parkings])

  if(isLoading || !parkings){
    return <Screen><Text>Loading...</Text></Screen>
  }
  return (
    <Screen>
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
<<<<<<< HEAD
            {list.map((item, i) => (
              <ListItem
                key={i}
                style={{ padding: 1 }}
                onPress={() => {
                  navigation.navigate("ParkingScreen", { userID: "hh" });
                }}
              >
=======
            {parkings.map((parking) => (
              <ListItem key={parking.parkingId} style={{ padding: 1 }}>
>>>>>>> auth-backend
                <ListItem.Content>
                  <ListItem.Title>{parking.parkingName}</ListItem.Title>
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
            <ListItem style={{ padding: 1 }}>
              <ListItem.Content>
                <ListItem.Title>{"Parking 1"}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
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
