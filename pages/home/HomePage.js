import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground, Modal } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StopWatch, duration } from '../../utils/StopWatch.js';

import { popStyle } from '../../utils/popStyle.js';
import { homeStyles, timerOptions } from './homeStyles'
import AboutScreen from '../about/About';
import { SpotifyButton } from '../../buttons/SpotifyBTN.js';
import { YouTubeButton } from '../../buttons/YouTubeBTN.js';
import HelpButton from '../../components/HelpButton';

import { LoginContext } from "../../Context/loginContext";

const Stack = createNativeStackNavigator();

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
                            <HelpButton text='hello' />
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
            <View>
                <Modal transparent={true} visible={modalOpen} animationType='slide'>
                    <View style={homeStyles.modalContainer}>
                        <View style={popStyle.box}>
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