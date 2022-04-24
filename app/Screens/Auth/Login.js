import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Layout/Screen";

import { Input, Button } from "@rneui/themed";

function Login(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Quick Park</Text>
        <View style={styles.form}>
          <Input
            placeholder="Username..."
            rightIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
            placeholder="Password..."
            rightIcon={{ type: "font-awesome", name: "lock" }}
          />
          <Button
            title={"Login"}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
          />
          <Button title={"Register"} containerStyle={styles.buttonContainer} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
    marginBottom: "auto",
    fontSize: 36,
    fontWeight: "bold",
  },
  form: {
    marginBottom: "auto",
  },
  buttonContainer: {
    marginVertical: 2,
  },
  button: {
    backgroundColor: "red",
  },
});

export default Login;
