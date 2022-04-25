import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen from "../../components/Layout/Screen";

import { Input, Button, Icon } from "@rneui/themed";

import { Formik } from "formik";
import * as Yup from "yup";

import { Link } from "@react-navigation/native";
import { Colors } from "@rneui/base";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Enter your username!"),
  password: Yup.string().required("Enter your password!"),
});

function Register({ navigation }) {
  const [icon, setIcon] = useState("eye");
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Quick Park</Text>
        <View style={styles.form}>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange, errors, handleBlur, touched }) => (
              <>
                <Input
                  placeholder="First name..."
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  errorStyle={{ color: "red" }}
                  errorMessage={touched && errors.firstName}
                />
                <Input
                  placeholder="Last name..."
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  errorStyle={{ color: "red" }}
                  errorMessage={touched && errors.lastName}
                />
                <Input
                  placeholder="Email..."
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  errorStyle={{ color: "red" }}
                  errorMessage={touched && errors.email}
                />
                <Input
                  secureTextEntry={visible}
                  placeholder="Password..."
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  errorMessage={touched && errors.password}
                  errorStyle={{ color: "red" }}
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
                <Input
                  secureTextEntry={visible}
                  placeholder="Confirm Password..."
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  errorMessage={touched && errors.password}
                  errorStyle={{ color: "red" }}
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
                  title={"Create Account"}
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

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text>Already have an account? </Text>
            <Link
              to={{ screen: "Login" }}
              style={{ color: "blue", fontWeight: "bold" }}
            >
              Login
            </Link>
          </View>
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

export default Register;
