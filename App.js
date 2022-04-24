import { Text, View } from "react-native";
import Screen from "./app/components/Layout/Screen";
import Login from "./app/Screens/Auth/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
}
