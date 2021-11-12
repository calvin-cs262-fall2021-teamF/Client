import React, { useState } from "react";
import { profileStyles } from './profileStyles';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { Avatar, Title, Divider } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../../components/CustomButton';

export const editProfileScreen = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageUri, setImageUri] = React.useState(require('../../assets/fox.jpg'));

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setImageUri({ uri: pickerResult.uri })
  };

  const submitChanges = () => {

  }

  return (
    <View style={profileStyles.editProfileContainer}>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <View style={profileStyles.editAvatar}>
          <Avatar.Image
            source={imageUri}
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
      <Divider />
      <View style={profileStyles.inputSpan}>
        <Title style={profileStyles.textTitle}>New Password</Title>
        <TextInput placeholder="xxxxxxxx" style={profileStyles.textInput} />
      </View>
      <CustomButton style={profileStyles.submitButton} onPress={submitChanges} text="Submit" />
    </View>
  )
}
