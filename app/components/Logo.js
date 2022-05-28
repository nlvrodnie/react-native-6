import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

function Logo(props) {
  return (
    <Image
      resizeMode="contain"
      source={require("../assets/logo.png")}
      style={styles.image}
    />
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 50,
    marginBottom: 12,
  },
});
export default Logo;
