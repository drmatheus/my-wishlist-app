import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Register } from "./src/pages/register";
import { Login } from "./src/pages/login";
import { Home } from "./src/pages/home";
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage
        position="top"
        style={{
          marginTop: 20,
          zIndex: 9999,
        }}
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   header: () => <Header />,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
