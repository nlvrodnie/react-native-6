import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import AddTimeOff from "../screens/AddTimeOff";
import DisplayRequest from "../screens/DisplayRequest";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Account from "../screens/Account";
import Button from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function AppNavigation(props) {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  // const Tab = createMaterialTopTabNavigator();
  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="TimeOffScreen" component={TimeOffScreen} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    );
  };
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="AddTimeOff"
        tabBarOptions={{
          activeTintColor: "red",
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "red",
          inactiveTintColor: "white",
          showLabel: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            showLabel: false,
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen name="AddTimeOff" component={AddTimeOff} />
        <Tab.Screen name="DisplayRequest" component={DisplayRequest} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarOptions: {
    activeTintColor: "red",
    activeBackgroundColor: "black",
    inactiveBackgroundColor: "red",
    inactiveTintColor: "white",
  },
});
export default AppNavigation;
