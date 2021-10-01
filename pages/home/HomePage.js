import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import homeStyle from './homeStyle'

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
		<View style={homeStyle.container}>
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

			<TouchableOpacity style={homeStyle.roundButton} onPress={toggleTimer}>
				<Text>{timerOn ? 'STOP' : 'START'}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={homeStyle.resetButton} onPress={resetTimer}>
				<Text>RESET</Text>
			</TouchableOpacity>

			<TouchableOpacity style={homeStyle.generalButton}
				onPress={() => navigation.navigate('History')}
			>
				<Text>HISTORY</Text>
			</TouchableOpacity>
			<TouchableOpacity style={homeStyle.generalButton}
				onPress={() => navigation.navigate('About')}
			>
				<Text>ABOUT</Text>
			</TouchableOpacity>
		</View>
	);
}

const options = {
	container: {
		padding: 5,
		borderRadius: 5,
		width: 200,
		alignItems: 'center',
	},
	text: {
		fontSize: 25,
		color: '#000',
		marginLeft: 7,
	},
};