import React, { useState } from "react";
import { profileStyles } from "./profileStyles";
import { View, Image } from "react-native";
import LoginInput from "../../components/LoginInput";
import CustomButton from "../../components/CustomButton";

export const loginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  const onLoginPressed = async () => {
    try {
      const response = await fetch('https://toothflex-service.herokuapp.com/auth/' + email + '/' + password, { method: 'GET' });
      const json = await response.json();
      setUserInfo(json);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Profile' }],
      });
    } catch (error) {
      alert("Invalid username/password! Please try again.");
    }
  }

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