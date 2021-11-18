import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Picker, ScrollView } from "react-native";
import { profileStyles } from "./profileStyles";
import { loginScreen } from "./Login";
import { editProfileScreen } from "./EditProfile";
import { Avatar, Caption, Title, Switch } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            height: 75,
          },
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={editProfileScreen}
        options={{
          headerStyle: {
            height: 75,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const ProfileScreen = ({ route, navigation }) => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [selectedFrequency, setSelectedFrequency] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState();
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const [freq, setFreq] = useState("")

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const onLogoutPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  useEffect(() => {
    (async () => {
      fetch('https://toothflex-service.herokuapp.com/users/4')
        .then((response) => response.json())
        .then((json) => {
          setName(json.name)
          setUsername(json.username)
          setSelectedFrequency(JSON.stringify(json.freqgoal))
          setSelectedDuration(JSON.stringify(json.timegoal))
        })
    })();
  }, []);

  return (
    <ScrollView>
      <View style={profileStyles.userInfoSection}>
        <View style={profileStyles.userInfo}>
          <Avatar.Image source={require("../../assets/fox.jpg")} size={100} />
          <View style={profileStyles.info}>
            <Title style={profileStyles.username}>{name}</Title>
            <Caption style={profileStyles.userId}>{username}</Caption>
          </View>
        </View>
      </View>
      <View style={profileStyles.setting}>
        <Title style={profileStyles.settingTitle}>Goals</Title>
        <View style={profileStyles.settingBox}>
          <Title>Frequency (per day)</Title>
          <Picker
            selectedValue={selectedFrequency}
            style={profileStyles.settingPicker}
            onValueChange={async (itemValue, itemIndex) => {
              try {
                const response = await fetch('https://toothflex-service.herokuapp.com/users/' + route.params.id + '/freq/' + itemValue, { method: 'PUT' });
                const json = await response.json();
              } catch (error) {
                alert("Failed to update! Please try again.");
              } finally {
                setSelectedFrequency(itemValue);
              }
            }}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>
        </View>
        <View style={profileStyles.settingBox}>
          <Title>Duration (seconds)</Title>
          <Picker
            selectedValue={selectedDuration}
            style={profileStyles.settingPicker}
            onValueChange={async (itemValue, itemIndex) => {
              try {
                const response = await fetch('https://toothflex-service.herokuapp.com/users/' + route.params.id + '/time/' + itemValue, { method: 'PUT' });
                const json = await response.json();
              } catch (error) {
                alert("Failed to update! Please try again.");
              } finally {
                setSelectedFrequency(itemValue);
              }
            }}
          >
            <Picker.Item label="10" value="10" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="60" value="60" />
            <Picker.Item label="70" value="70" />
            <Picker.Item label="80" value="80" />
            <Picker.Item label="90" value="90" />
            <Picker.Item label="100" value="100" />
            <Picker.Item label="110" value="110" />
            <Picker.Item label="120" value="120" />
            <Picker.Item label="130" value="130" />
            <Picker.Item label="140" value="140" />
            <Picker.Item label="150" value="150" />
            <Picker.Item label="160" value="160" />
            <Picker.Item label="170" value="170" />
            <Picker.Item label="180" value="180" />
          </Picker>
        </View>
        <Title style={profileStyles.settingTitle}>Account</Title>
        <TouchableOpacity onPress={() => navigation.navigate("Edit Profile")}>
          <View style={profileStyles.settingBox}>
            <Title>Edit Profile</Title>
            <Title>></Title>
          </View>
        </TouchableOpacity>
        <View style={profileStyles.settingBox}>
          <Title>Notification</Title>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={profileStyles.buttonWrapper}>
        <TouchableOpacity
          onPress={onLogoutPressed}
          style={profileStyles.logoutButton}
        >
          <Text style={profileStyles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
