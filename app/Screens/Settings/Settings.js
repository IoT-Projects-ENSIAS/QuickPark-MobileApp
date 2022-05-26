import React from "react";
import { Text, View } from "react-native";
import Screen from "../../components/Layout/Screen";
function Settings(props) {
  return (
    <Screen>
      <View style={{ backgroundColor: "red" }}>
        <Text>this is settings page</Text>
      </View>
    </Screen>
  );
}

export default Settings;
