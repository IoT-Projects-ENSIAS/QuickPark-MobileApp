import React from "react";

import { Dimensions, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { Header } from "@rneui/base";

const { width, height } = Dimensions.get("window");

function Screen({ children }, ...otherProps) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      <Header
        centerComponent={{
          text: "Hello, John Doe",
          style: { color: "white", padding: 5 },
        }}
      />
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
    width: width,
  },
});

export default Screen;
