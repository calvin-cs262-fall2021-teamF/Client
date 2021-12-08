import React, { useState } from "react";
import { profileStyles } from "./profileStyles";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Avatar, Title, Divider } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { ActivityIndicator } from "react-native-paper";

export const editProfileScreen = ({ route, navigation }) => {
  const { id, name, username, email } = route.params;

  const [imageUri, setImageUri] = React.useState(require("../../assets/fox.jpg"));

  const [newName, setNewName] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();

  const [isLoading, setLoading] = useState(false);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setImageUri({ uri: pickerResult.uri });
  };

  const submitChanges = async () => {
    try {
      setLoading(true);
      if (newName != null) {
        await fetch('https://toothflex-service.herokuapp.com/users/' + id + '/name/' + newName, { method: 'PUT' });
      }
      if (newUsername != null) {
        await fetch('https://toothflex-service.herokuapp.com/users/' + id + '/username/' + newUsername, { method: 'PUT' });
      }
      if (newEmail != null) {
        await fetch('https://toothflex-service.herokuapp.com/users/' + id + '/email/' + newEmail, { method: 'PUT' });
      }
      if (newPassword != null) {
        await fetch('https://toothflex-service.herokuapp.com/users/' + id + '/password/' + newPassword, { method: 'PUT' });
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'Profile', params: { id: id, uri: imageUri } }],
      });
    } catch (error) {
      alert("Update failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={profileStyles.editProfileContainer}>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <View style={profileStyles.editAvatar}>
          <Avatar.Image source={imageUri} size={120} />
          <Text style={profileStyles.picText}>Change Profile Photo</Text>
        </View>
      </TouchableOpacity>
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Name</Title>
        <TextInput
          defaultValue={name}
          style={profileStyles.textInput}
          onChangeText={text => setNewName(text)}
        />
      </View>
      <Divider />
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Username</Title>
        <TextInput
          defaultValue={username}
          style={profileStyles.textInput}
          onChangeText={text => setNewUsername(text)}
        />
      </View>
      <Divider />
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Email</Title>
        <TextInput
          defaultValue={email}
          style={profileStyles.textInput}
          onChangeText={text => setNewEmail(text)}
        />
      </View>
      <Divider />
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>Password</Title>
        <TextInput
          placeholder="xxxxxxxx"
          style={profileStyles.textInput}
          onChangeText={text => setNewPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={submitChanges} style={profileStyles.buttonContainer} disabled={isLoading}>
        {isLoading ? <ActivityIndicator /> : <Text style={profileStyles.buttonText}>Submit</Text>}
      </TouchableOpacity>
    </View>
  );
};
