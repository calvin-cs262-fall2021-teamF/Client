import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { homeStyles, options } from './homeStyles'

export default function HomeScreen({ navigation }) {
	const [timerDuration, setTimerDuration] = useState(120000)
	const [timerOn, setTimerOn] = useState(false)
	const [timerReset, setTimerReset] = useState(false)

	const toggleTimer = () => {
		setTimerOn(!timerOn)
		setTimerReset(false)
	}

	const resetTimer = () => {
		setTimerOn(false)
		setTimerReset(true)
	}

	const handleTimerFinish = () => {
		// alert("Time's up!")
	}

	return (
		<View style={homeStyles.container}>
			<Text>Welcome to ToothFlex!</Text>

			<Timer
				totalDuration={timerDuration}
				msec
				start={timerOn}
				reset={timerReset}
				options={options}
				handleFinish={handleTimerFinish()}
				getTime={(time) => {
					console.log(time);
				}} />

			<TouchableOpacity style={homeStyles.roundButton} onPress={toggleTimer}>
				<Text>{timerOn ? 'STOP' : 'START'}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={homeStyles.resetButton} onPress={resetTimer}>
				<Text>RESET</Text>
			</TouchableOpacity>

			<TouchableOpacity style={homeStyles.generalButton}
				onPress={() => navigation.navigate('History')}
			>
				<Text>HISTORY</Text>
			</TouchableOpacity>
			<TouchableOpacity style={homeStyles.generalButton}
				onPress={() => navigation.navigate('About')}
			>
				<Text>ABOUT</Text>
			</TouchableOpacity>
		</View>
	);
}
