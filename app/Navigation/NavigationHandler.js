import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home/Home";
import Login from "../Screens/Auth/Login";
import ParkingScreen from "../Screens/Features/ParkingScreen";
import Register from "../Screens/Auth/Register";
import Settings from "../Screens/Settings/Settings";
import ReservationScreen from "../Screens/Features/ReservationScreen";
import FinalizationScreen from "../Screens/Features/FinalizationScreen";
import CountdownScreen from "../Screens/Features/CountdownScreen";
import AddNewCar from "../Screens/Settings/AddNewCar";

import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Icon } from "@rneui/base";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddCars from "../Screens/Settings/AddCars";
import PersonalInfo from "../Screens/Settings/PersonalInfo";

function HomeNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function NavigationHandler() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      {user ? (
        <Stack.Screen name="HomeScreen" component={HomeNav} />
      ) : (
        <>
          <Stack.Screen name="HomeScreen" component={HomeNav} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ParkingScreen" component={ParkingScreen} />
          <Stack.Screen
            name="ReservationScreen"
            component={ReservationScreen}
          />
          <Stack.Screen
            name="FinalizationScreen"
            component={FinalizationScreen}
          />
          <Stack.Screen name="CountdownScreen" component={CountdownScreen} />
          <Stack.Screen name="AddCars" component={AddCars} />
          <Stack.Screen name="AddNewCar" component={AddNewCar} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default NavigationHandler;
