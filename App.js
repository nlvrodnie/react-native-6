import React, { memo, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppNavigation from "./app/navigation/AppNavigation";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
    const user = await AuthStorage.getUser();
    if (!user) return;
    setUser(JSON.parse(user));
  };
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <AppNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </AuthContext.Provider>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#D4C2EF",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
