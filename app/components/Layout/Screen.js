import React from "react";

import { Dimensions, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { Header } from "@rneui/base";

const { width, height } = Dimensions.get("window");

function Screen({ children, route, screenName }, ...otherProps) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      {route != "Login" && route != "Register" && (
        <Header
          centerComponent={{
            text: screenName,
            style: { color: "white", padding: 5 },
          }}
        />
      )}
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
