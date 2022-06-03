import { Text, View } from "react-native";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

import { SafeAreaProvider } from "react-native-safe-area-context";

import NavigationHandler from "./app/Navigation/NavigationHandler";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { checkLogin, reset } from "./app/features/Auth/authSlice";

import Screen from "./app/components/Layout/Screen";
import { Icon } from "@rneui/base";

import Home from "./app/Screens/Home/Home";
import Login from "./app/Screens/Auth/Login";
import ParkingScreen from "./app/Screens/Features/ParkingScreen";
import Register from "./app/Screens/Auth/Register";
import Settings from "./app/Screens/Settings/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChekingLogin({ children, navigation }) {
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (!user) {
      dispatch(checkLogin());
      dispatch(reset());
    }
  }, []);

  if (isLoading || (!user && !isSuccess)) {
    return (
      <Screen>
        <Text>Loading Page...</Text>
      </Screen>
    );
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <Provider store={store}>
      <ChekingLogin>
        <SafeAreaProvider>
          <NavigationContainer>
            <NavigationHandler />
          </NavigationContainer>
        </SafeAreaProvider>
      </ChekingLogin>
    </Provider>
  );
}
