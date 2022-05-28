import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";
function Button({ mode, style, children, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: theme.colors.primary },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 28,
  },
});

export default Button;
