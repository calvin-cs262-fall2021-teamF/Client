/**
 * This contains the Home Page (main) component and page stack
 * 
 * @author: Peter Peng and Sean Ebenmelu, Fall 2021
 */
import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground, Modal } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StopWatch, duration } from '../../utils/StopWatch.js';
import { homeStyles, timerOptions } from './homeStyles'
import AboutScreen from '../about/About';
import { SpotifyButton } from '../../components/SpotifyBTN.js';
import { YouTubeButton } from '../../components/YouTubeBTN.js';
import HelpButton from '../../components/HelpButton';
import { LoginContext } from "../../context/loginContext";

const Stack = createNativeStackNavigator();

// Home screen stack that contains the about page and the home page
export default function Home({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={homeStyles.header}>
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
              <HelpButton text={
                '- To start brushing, start the timer by clicking on the START button \n' +
                '- The entertainment options can be accessed once the timer is started \n' +
                '- To stop brushing, stop the timer by clicking on the STOP button \n' +
                '- To reset timer to its original form, click on the reset button \n' +
                '- To view our About Page, click on the logo on the top left corner'
              } />
            </View>
          ),
          headerStyle: {
            height: 75,
          },
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

// Home Screen component
function HomeScreen() {
  const { isLoggedIn, userId } = useContext(LoginContext);

  const [timerOn, setTimerOn] = useState(false);
  const [timerReset, setTimerReset] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const youtubeURL = 'https://www.youtube.com/';
  const spotifyURL = "https://urlgeni.us/spotify/hom3";

  const resetTimer = () => {
    setTimerOn(false);
    setTimerReset(true);
  };

  // post logs to the database with the timer output
  const postLogs = async () => {
    if (isLoggedIn) {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "userId": JSON.stringify(userId),
            "brushDate": JSON.stringify(new Date().toLocaleString()),
            "duration": JSON.stringify(duration)
          })
        };
        const response = await fetch("https://toothflex-service.herokuapp.com/logs", requestOptions);
        const json = await response.text();
        return json;
      } catch (error) {
        console.error(error)
      }
    }
  };

  const toggleTimer = () => {
    setTimerOn(!timerOn);
    setTimerReset(false);
    { timerOn ? setModalOpen(false) : setModalOpen(true) }
    { timerOn ? postLogs() : null }
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
      {/* Modal for Entertainment */}
      <View>
        <Modal transparent={true} visible={modalOpen} animationType='slide'>
          <View style={homeStyles.modalContainer}>
            <View style={homeStyles.box}>
              <YouTubeButton url={youtubeURL} />
              <SpotifyButton url={spotifyURL} />
            </View>
            <TouchableOpacity
              onPress={() => setModalOpen(false)}
              style={homeStyles.modalToggle}
            >
              <Text>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}