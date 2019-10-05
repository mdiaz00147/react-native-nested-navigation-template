import React from "react";
import { Text, View, StyleSheet } from "react-native";

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbbbbb",
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontSize: 28, color: "#222222", textAlign: "center" }
});

const Screen = ({ name }) => (
  <View style={S.container}>
    <Text style={S.text}>This is the "{name}" screen</Text>
  </View>
);

export default Screen;
