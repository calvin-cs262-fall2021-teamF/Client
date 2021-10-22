import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { historyStyles } from './historyStyles';

export default function HistoryScreen({ navigation }) {
	return (
		<View>
			<h1>Brushing History</h1>
			<Text style={historyStyles.div}>Task 1</Text>
			<Text style={historyStyles.div}>Task 2</Text>
			<Text style={historyStyles.div}>Task 3</Text>
		</View>
	);
}