import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen from "../../components/Layout/Screen";

import { Input, Button, Icon } from "@rneui/themed";

function Login(props) {
  const [icon, setIcon] = useState("eye");
  const [visible, setVisible] = useState(true);
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Quick Park</Text>
        <View style={styles.form}>
          <Input
            placeholder="Username..."
            leftIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
            secureTextEntry={visible}
            placeholder="Password..."
            leftIcon={{ type: "font-awesome", name: "lock" }}
            rightIcon={
              <TouchableOpacity
                onPress={() => {
                  setVisible(!visible);
                  visible ? setIcon("eye") : setIcon("eye-slash");
                }}
              >
                <Icon name={icon} type="font-awesome" size={24} color="black" />
              </TouchableOpacity>
            }
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
