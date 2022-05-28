import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { View, Text } from "react-native";

function Authnavigation(props) {
  const Stack = createNativeStackNavigator();
  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View>{/* <Button>logout</Button> */}</View>
      <StackNavigator />
    </View>
  );
}

export default Authnavigation;
