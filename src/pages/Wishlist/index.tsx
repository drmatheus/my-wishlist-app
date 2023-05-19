import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Wishlist = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Wishlist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
});
