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



function ChekingLogin({ children,navigation }){
  const dispatch = useDispatch();
  const { emailUser, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(()=>{
    if(!emailUser){
      console.log("hII"+emailUser);
      dispatch(checkLogin());
      dispatch(reset());
    }
  },[])

  if(isLoading || (!emailUser && !isSuccess)){
    return <Screen><Text>Loading Page...</Text></Screen>
  }
  return <>{children}</>;
}

export default function App() {
  return (
<<<<<<< HEAD
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="HomeScreen"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeScreen" component={HomeNav} />
          <Stack.Screen name="ParkingScreen" component={ParkingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
=======
    <Provider store={store}>
      <ChekingLogin>
        <SafeAreaProvider>
          <NavigationContainer>
            <NavigationHandler/>
          </NavigationContainer>
        </SafeAreaProvider>
      </ChekingLogin>
    </Provider>
>>>>>>> auth-backend
  );
}
