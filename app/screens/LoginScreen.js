import React, { memo, useContext, useState } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/Backbutton";
import client from "../api/client";
import { theme } from "../core/theme";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [error, setError] = useState();
  // const [currentUser, setCurrentUser] = useState();
  const authContext = useContext(AuthContext);
  const login = async () => {
    const loggedIn = await client.post("/api/login", {
      email: email.value,
      password: password.value,
    });

    if (loggedIn.ok || loggedIn.data.error.includes("authenticated")) {
      const user = await client.get("/api/user");
      authContext.setUser(user.data);
      AuthStorage.storeUser(user.data);
      console.log(user);
    }
  };
  const logout = async () => {
    await client.post("/logout").then((res) => {
      if (!res.ok) return setError(res);

      console.log(res);
    });
  };
  return (
    <>
      <Background>
        {/* <BackButton goBack={() => console.log("sdfds")} /> */}

        <Logo />

        <Header>Welcome back</Header>
        {error && <Text style={{ color: "red" }}> *{error}</Text>}
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => console.log("console.log")}>
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          style={{ backgroundColor: theme.colors.primary }}
          onPress={login}
        >
          Login
        </Button>

        <View>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
export default LoginScreen;
