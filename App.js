import { Text, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./app/Screens/Home/Home";
import Login from "./app/Screens/Auth/Login";
import Register from "./app/Screens/Auth/Register";
import Settings from "./app/Screens/Settings/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={HomeNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
