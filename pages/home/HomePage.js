import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Modal,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {HeaderButton} from 'react-navigation'; ask the prof how to configure back button
import { StopWatch, brushDur } from '../../utils/StopWatch.js';
// brushDur needs to read from StopWatch

import { popStyle } from '../../utils/popStyle.js';
import { homeStyles, timerOptions } from './homeStyles'
import AboutScreen from '../about/About';
import HistoryDetailsScreen from '../history/HistoryDetails.js';
import { SpotifyButton } from '../../buttons/SpotifyBTN.js';
import { YouTubeButton } from '../../buttons/YouTubeBTN.js';

// import { AboutButton } from '../../buttons/AboutBTN.js';
// import { MainPop } from '../../buttons/MainPopUp.js';
import {Audio }from 'expo-av';

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

function HomeScreen() {
    const [timerDuration, setTimerDuration] = useState(120000);
    const [timerOn, setTimerOn] = useState(false);
    const [timerReset, setTimerReset] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const youtubeURL = 'https://www.youtube.com/';
    const spotifyURL = "https://urlgeni.us/spotify/hom3";

    let currID = 0;
    let currUSER = 0;


    const [id, setID] = useState(currID);
    const [userId, setUserID] = useState(currUSER);
    const [duration, setDuration] = useState(30);

    // let duration = 0;

    const toggleTimer = () => {
        setTimerOn(!timerOn);
        setTimerReset(false);
    };

    const resetTimer = () => {
        setTimerOn(false);
        setTimerReset(true);
    };

    const postLogs = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'id': id,
                    'userid': userId,
                    'brushdate': new Date(),
                    'duration': duration,
                })
            };
            const response = await fetch("https://testing-tooth-service.herokuapp.com/brushLogs", requestOptions);
            const json = await response.text();
            // console.log(json);

            setID(currID + 1);

            return json;
        } catch (error) {
            console.error(error)
        }
    };

    const combinedFunction = () => {
        toggleTimer();
        { timerOn ? setModalOpen(false) : setModalOpen(true) }
        { timerOn ? postLogs() : null }
    };

    const [sound,setSound] = React.useState();
    async function playSound(){
        console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(
            require('../home/music.mp3')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() =>{
        return sound
        ?() => {
            console.log('Unloading Sound');
            sound.unloadAsync();}
        : undefined;
    },[sound]);

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
                        onPress={combinedFunction}
                    >
                        <Text style={homeStyles.roundButtonText}>
                            {timerOn ? "STOP" : "START"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyles.resetButton} onPress={resetTimer}>
                        <Text>RESET</Text>
                    </TouchableOpacity>
                    <View>
                        <Button title="Play Sound" onPress={playSound}/>
                    </View>

                </View>
            </ImageBackground>
            <View>
                <Modal transparent={true} visible={modalOpen} animationType='slide'>
                    <View style={styles.container}>
                        <View style={popStyle.box}>
                            <YouTubeButton url={youtubeURL} />
                            <SpotifyButton url={spotifyURL} />
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
