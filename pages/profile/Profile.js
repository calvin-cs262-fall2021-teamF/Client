import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Picker } from 'react-native';
import { profileStyles } from './profileStyles';

import {Login} from './Login';
import Signup from './Signup';
import { Avatar, Caption, Title, Switch, Divider } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            height: 75
          },
        }}
      />
      <Stack.Screen name="editProfile"
        component={editProfileScreen}
        options={{
          headerStyle: {
            height: 75
          },
          headerTitle: () => (
            <Text>Edit Profile</Text>
          )
        }}
      />
    </Stack.Navigator>
  )
}

const ProfileScreen = ({ navigation }) => {
  const [selectedFrequency, setSelectedFrequency] = useState(2);
  const [selectedDuration, setSelectedDuration] = useState(120);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View>
      {/* <Login /> */}
      <View style={profileStyles.userInfoSection}>
        <View style={profileStyles.userInfo}>
          <Avatar.Image
            source={require('../../assets/fox.jpg')}
            size={100}
          />
          <View style={profileStyles.info}>
            <Title style={profileStyles.username}>John Doe</Title>
            <Caption style={profileStyles.userId}>@j_doe</Caption>
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
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFrequency(itemValue)
            }>
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
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDuration(itemValue)
            }>
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
        <TouchableOpacity onPress={() => navigation.navigate('editProfile')}>
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
    </View>

  )
}

const editProfileScreen = () => {
  return (
    <View style={profileStyles.editProfileContainer}>
      <TouchableOpacity>
        <View style={profileStyles.editAvatar}>
          <Avatar.Image
            source={require('../../assets/fox.jpg')}
            size={120}
          />
          <Text style={profileStyles.picText}>Change Profile Photo</Text>
        </View>
      </TouchableOpacity>
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Name</Title>
        <TextInput defaultValue="John Doe" style={profileStyles.textInput} />
      </View>
      <Divider />
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Username</Title>
        <TextInput defaultValue="j_doe" style={profileStyles.textInput} />
      </View>
      <Divider />
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Email</Title>
        <TextInput defaultValue="j_doe@gmail.com" style={profileStyles.textInput} />
      </View>
      {/* <Text>hi</Text> */}
    </View>
  )
}