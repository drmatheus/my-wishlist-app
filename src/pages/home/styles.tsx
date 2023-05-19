import React from "react";

import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};
