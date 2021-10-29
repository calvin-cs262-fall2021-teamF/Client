import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { historyStyles } from './historyStyles';

export default function HistoryScreen({ navigation }) {
	return (
		<View>
			<Text>Brushing History</Text>
			<Text style={historyStyles.div}>Task 1</Text>
			<Text style={historyStyles.div}>Task 2</Text>
			<Text style={historyStyles.div}>Task 3</Text>
		</View>
	);
}