
import React from 'react';
import {Text, View,Image } from 'react-native';
import { helpStyles } from './helpStyles';
import clock from './assets/clock.png';
import clock2 from './assets/clock2.png';
export default function Help() {
  return (
    <View>
    <View style={helpStyles.container}>
      <Text style={helpStyles.title}>Help Page </Text>
      <Text style={helpStyles.subtitle}>Welcome to the help session, the interface will explain the basic purpose of the app; solve your basic problems.</Text>
    </View>

    <View style = {helpStyles.subcontainer}>
      <Image source={clock} style={{ width: 150, height: 200 }}/>
      <Text style={helpStyles.body}>1. Clcok</Text>
      <Text >Click the START button, will calculate your brushing time. Click the RESET button, will reset the clock.</Text>
      <Image source={clock2} style={{ width:150, height: 200 }}/>
      <Text>If something makes you stop brushing your teeth, you can click STOP.</Text>
      <Text>If you feel boring, welcome to click PLAY SOUND</Text>
    

      <Text style={helpStyles.body}>2. History</Text>
      <Text>The history page will record your history.</Text>
      <Text style={helpStyles.body}>3. Profile</Text>
      <Text>sign up and login in your profile page</Text>
      <Text>If you still have question contcact us @calvin.edu</Text>
    </View>
    </View>

  );
}


