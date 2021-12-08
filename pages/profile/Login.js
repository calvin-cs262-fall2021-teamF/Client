import React, { useState } from "react";
import { profileStyles } from "./profileStyles";
import { View, Image, TouchableOpacity, Text } from "react-native";
import LoginInput from "../../components/LoginInput";
import { ActivityIndicator } from "react-native-paper";

export const loginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onLoginPressed = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://toothflex-service.herokuapp.com/auth/' + email + '/' + password, { method: 'GET' });
      const json = await response.json();
      navigation.reset({
        index: 0,
        routes: [{
          name: 'Profile', params: {
            id: json.id,
            uri: require("../../assets/fox.jpg")
          }
        }],
      });
    } catch (error) {
      alert("Invalid username/password! Please try again.");
    } finally {
      setLoading(false);
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
      <TouchableOpacity onPress={onLoginPressed} style={profileStyles.buttonContainer} disabled={isLoading}>
        {isLoading ? <ActivityIndicator /> : <Text style={profileStyles.buttonText}>Sign In</Text>}
      </TouchableOpacity>
    </View>
  );
};