import React, { useState } from "react";
import { profileStyles } from "./profileStyles";
import { View, Image } from "react-native";
import LoginInput from "../../components/LoginInput";
import CustomButton from "../../components/CustomButton";

export const loginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);

  const onLoginPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Profile" }],
    });
  };

  return (
    <View style={profileStyles.loginContainer}>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={profileStyles.loginLogo}
      />
      <LoginInput value={email} setValue={setEmail} placeholder="Email" />
      <LoginInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <CustomButton onPress={onLoginPressed} text="Sign In" />
    </View>
  );
};