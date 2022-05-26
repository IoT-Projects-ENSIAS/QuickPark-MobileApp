import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native";

import { Input, Button, Icon } from "@rneui/themed";

import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/Layout/Screen";
import { KeyboardAvoidingWrapper } from "../../components/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string().required("Please enter your last name"),
  password: Yup.string().min(6).required("Enter a password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Register({ navigation }) {
  const [icon, setIcon] = useState("eye");
  const [visible, setVisible] = useState(true);

  return (
    <Screen>
      <KeyboardAvoidingWrapper enabled={false}>
        <View style={styles.container}>
          <Text style={styles.header}>Quick Park</Text>
          <View style={styles.form}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => console.log("Submit successful!")}
            >
              {({
                handleSubmit,
                handleChange,
                errors,
                handleBlur,
                touched,
                isSubmitting,
              }) => (
                <>
                  <>
                    <Input
                      placeholder="First name..."
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      errorStyle={{ color: "red" }}
                      errorMessage={touched["firstName"] && errors.firstName}
                    />
                    <Input
                      placeholder="Last name..."
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      errorStyle={{ color: "red" }}
                      errorMessage={touched["lastName"] && errors.lastName}
                    />
                    <Input
                      placeholder="Email..."
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      errorStyle={{ color: "red" }}
                      errorMessage={touched["email"] && errors.email}
                    />
                    <Input
                      secureTextEntry={visible}
                      placeholder="Password..."
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      errorMessage={touched["password"] && errors.password}
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
                      errorMessage={
                        touched["confirmPassword"] && errors.confirmPassword
                      }
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
                  </>
                  <Button
                    title={"Create Account"}
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    onPress={handleSubmit}
                    loading={isSubmitting}
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
      </KeyboardAvoidingWrapper>
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
