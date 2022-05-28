import React from "react";
import { View } from "react-native";

function Wrapper({ children }) {
  return (
    <View style={{ paddingHorizontal: 10, width: "100%" }}>{children}</View>
  );
}

export default Wrapper;
