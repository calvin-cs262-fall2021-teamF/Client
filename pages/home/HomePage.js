import React, { useState, useCallback} from 'react';
import { Text, Linking, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Modal, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StopWatch from '../../utils/StopWatch.js';
import {popStyle} from '../../utils/popStyle.js';
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

  const [modalOpen, setModalOpen] = useState(false);
  const youtubeURL = 'https://www.youtube.com/';
  const spotifyURL = "android-app://spotify:album:0sNOF9WDwhWunNAHPD3Baj";

  const toggleTimer = () => {
    setTimerOn(!timerOn);
    setTimerReset(false);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setTimerReset(true);
  };

  const stuffCombined = () =>{
    toggleTimer();
    setModalOpen(true);
  };

  const OpenURLButton = ({ url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} style={{width: 130, height: 70, }} />;
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
            onPress={stuffCombined}
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
      <View>
        <Modal transparent={true} visible={modalOpen} animationType='slide'>
          <View style={styles.container}>
            <View style={popStyle.box}>
            <OpenURLButton url={youtubeURL}>
              YouTube
            </OpenURLButton>
            <OpenURLButton url={spotifyURL}>
              Spotify
            </OpenURLButton>
            </View>
            <TouchableOpacity
                onPress={() => setModalOpen(false)}
                style={styles.modalToggle}
              >
                <Text>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    padding: '10%',
    backgroundColor: '#000000aa',
    flex: 1,
  },
  
  modalToggle: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
})