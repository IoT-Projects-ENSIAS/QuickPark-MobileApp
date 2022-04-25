import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen from "../../components/Layout/Screen";

import { Input, Button, Icon } from "@rneui/themed";

import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Enter your username!"),
  password: Yup.string().required("Enter your password!"),
});

function Login({ navigation }) {
  const [icon, setIcon] = useState("eye");
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Quick Park</Text>
        <View style={styles.form}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange, errors, handleBlur, touched }) => (
              <>
                <Input
                  placeholder="Username..."
                  leftIcon={{ type: "font-awesome", name: "user" }}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  errorStyle={{ color: "red" }}
                  errorMessage={touched && errors.username}
                />
                <Input
                  secureTextEntry={visible}
                  placeholder="Password..."
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  errorMessage={touched && errors.password}
                  errorStyle={{ color: "red" }}
                  leftIcon={{ type: "font-awesome", name: "lock" }}
                  rightIcon={
                    <TouchableOpacity
                      onPress={() => {
                        setVisible(!visible);
                        visible ? setIcon("eye") : setIcon("eye-slash");
                      }}
                    >
                      <Icon
                        name={icon}
                        type="font-awesome"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  }
                />

                <Button
                  title={"Login"}
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.button}
                  onPress={() => {
                    handleSubmit();
                    setIsLoading(true);
                  }}
                  loading={isLoading}
                />
              </>
            )}
          </Formik>
          <Button
            title={"Register"}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Quick Park © 2022, All rights reserved.
        </Text>
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
    marginTop: 20,
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
  button: {},
});

export default Login;
