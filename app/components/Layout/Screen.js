import React from "react";

import { Dimensions, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

function Screen({ children }, ...otherProps) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

console.log(StatusBar.currentHeight);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
    width: width,
  },
});

export default Screen;
