import React from "react";

import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { Header, Icon } from "@rneui/base";

const { width, height } = Dimensions.get("window");

function Screen({ children, route, screenName, goBack }, ...otherProps) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      {route != "Login" && route != "Register" && (
        <Header
          centerComponent={
            <>
              {route === "Home" && (
                <Image
                  style={{ height: 150, width: 150, alignSelf: "center" }}
                  source={{
                    uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2vmhuDr3MCayekFfTHUFoKB8Ny-rCygktcRLFI-i7_I7NBPVH9d700D_6o3uSPNrA9GQqLNIUSBvSPw3aBnvTMTTt6KZzZaVpPKIt9Knz6bcT3YCY2CYM9oduOziJCk5ZBpshdWjJd2ZyWtZo0rNgcOECDwJRK6Oh2syi6rvbTYqJnAR1ZpPrUAityg/s320/Quick%20Park%20white%20trans.png",
                  }}
                />
              )}
              {route != "Home" && (
                <Text style={{ color: "white" }}>{screenName}</Text>
              )}
            </>
          }
          leftComponent={
            route != "Home" && (
              <TouchableOpacity onPress={goBack}>
                <Icon
                  name="arrow-left-bold-circle"
                  type="material-community"
                  color="white"
                />
              </TouchableOpacity>
            )
          }
          containerStyle={{
            padding: 20,
            height: 100,
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
