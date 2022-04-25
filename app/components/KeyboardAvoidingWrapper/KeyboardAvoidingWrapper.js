import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

export const KeyboardAvoidingWrapper = ({ children, enabled }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1 }}
    enabled={enabled}
  >
    <ScrollView
      scrollEnabled={false}
      style={{
        flex: 1,
        height: height,
        width: width,
      }}
      contentContainerStyle={{ justifyContent: "center", flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {children}
      </TouchableWithoutFeedback>
    </ScrollView>
  </KeyboardAvoidingView>
);
