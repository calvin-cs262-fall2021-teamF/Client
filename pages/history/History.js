import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { historyStyles } from "./historyStyles";
import { Title, Checkbox, Avatar } from "react-native-paper";
import GlobalFont from "react-native-global-font";

export default function HistoryScreen({ navigation }) {

  return (
    <View style={historyStyles.container}>
      <Text style={historyStyles.headerText}> Brushing History </Text>
      <Text style={historyStyles.subtitleText}> "You don't have to brush all your teeth, just the ones you want to keep" </Text>
      <Text style={historyStyles.date}>5 Nov 2021</Text>
      <View style={historyStyles.box}>
        <Title>01:30</Title>
        <Checkbox status={"checked"} disabled={true} />
      </View>
      <View style={historyStyles.box}>
        <Title>02:00</Title>
        <Checkbox status={"unchecked"} disabled={true} />
      </View>
      <Text style={historyStyles.date}>4 Nov 2021</Text>
      <View style={historyStyles.box}>
        <Title>02:00</Title>
        <Checkbox status={"unchecked"} disabled={true} />
      </View>
      <View style={historyStyles.box}>
        <Title>01:50</Title>
        <Checkbox status={"checked"} disabled={true} />
      </View>
    </View>
  );
}
