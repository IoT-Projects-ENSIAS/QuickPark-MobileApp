import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./app/Screens/Home/Home";
import Login from "./app/Screens/Auth/Login";
import Register from "./app/Screens/Auth/Register";
import Screen from "./app/components/Layout/Screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    //TODO: Uncomment once done with testing
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       screenOptions={{ headerShown: false }}
    //       initialRouteName="Login"
    //     >
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Register" component={Register} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
    <Home />
  );
}
