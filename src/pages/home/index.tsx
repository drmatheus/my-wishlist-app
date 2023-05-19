import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../Profile";
import { Wishlist } from "../Wishlist";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
    </Tab.Navigator>
  );
};

export const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Button
        title="Logout"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Tabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35007c",
    alignItems: "center",
    justifyContent: "center",
  },
});
