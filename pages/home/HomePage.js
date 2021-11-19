import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StopWatch from '../../utils/StopWatch.js';
import { homeStyles, timerOptions } from './homeStyles'
import AboutScreen from '../about/About';
import HistoryDetailsScreen from '../history/HistoryDetails.js';

const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Image
                  source={require("../../assets/logo.png")}
                  resizeMode="contain"
                  style={{
                    width: 130,
                    height: 70,
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 75,
          },
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="HistoryDetails" component={HistoryDetailsScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [timerDuration, setTimerDuration] = useState(120000);
  const [timerOn, setTimerOn] = useState(false);
  const [timerReset, setTimerReset] = useState(false);

  const toggleTimer = () => {
    setTimerOn(!timerOn);
    setTimerReset(false);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setTimerReset(true);
  };

  return (
    <View style={homeStyles.container}>
      <ImageBackground
        style={homeStyles.headerImage}
        source={require("../../assets/Pic.jpg")}
      >
        <View style={homeStyles.imageContainer}>
          <Text>Welcome to ToothFlex!</Text>

          <StopWatch
            start={timerOn}
            reset={timerReset}
            options={timerOptions}
          />
          <TouchableOpacity
            style={homeStyles.roundButton}
            onPress={toggleTimer}
          >
            <Text style={homeStyles.roundButtonText}>
              {timerOn ? "STOP" : "START"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.resetButton} onPress={resetTimer}>
            <Text>RESET</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
