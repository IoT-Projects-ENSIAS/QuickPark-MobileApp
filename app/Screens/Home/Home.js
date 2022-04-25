import React, { useState } from "react";
import Screen from "../../components/Layout/Screen";
import { SearchBar, Header, Slider, Icon } from "@rneui/base";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import * as Device from "expo-device";

const platform = Device.osName;

function Home(props) {
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
        <SearchBar
          containerStyle={styles.searchBar}
          lightTheme
          platform={platform === "Android" ? "android" : "ios"}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  searchBar: {
    backgroundColor: "red",
    borderRadius: 15,
  },
});

export default Home;
