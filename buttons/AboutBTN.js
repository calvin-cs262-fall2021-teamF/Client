import React, { useState, useCallback} from 'react';
import { Text, Linking, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Modal} from 'react-native';

const AboutButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={{
          width: 130,
          height: 70,
        }}
      />
    </TouchableOpacity>
  );
}

export {AboutButton}