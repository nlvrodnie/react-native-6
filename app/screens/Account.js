import React, { useContext } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import client from "../api/client";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";

function Account({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const logout = async () => {
    await client.post("/api/logout").then((res) => {
      if (res.ok) {
        setUser(null);
        AuthStorage.removeUser();
      }
    });
  };
  return (
    <>
      <View>
        <Button onPress={logout}>Logout</Button>
      </View>
    </>
  );
}

export default Account;
