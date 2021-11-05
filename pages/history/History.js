import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { historyStyles } from './historyStyles';
import { Title, Checkbox } from 'react-native-paper'

export default function HistoryScreen({ navigation }) {

	return (
		<View style={historyStyles.container}>
			<Text style={historyStyles.date}>11/5/2021</Text>
			<View style={historyStyles.box}>
				<Title>Time 1</Title>
				<Checkbox
					status={'checked'}
					disabled={true}
				/>
			</View>
			<View style={historyStyles.box}>
				<Title>Time 2</Title>
				<Checkbox
					status={'unchecked'}
					disabled={true}
				/>
			</View>
			<Text style={historyStyles.date}>11/4/2021</Text>
			<View style={historyStyles.box}>
				<Title>Time 3</Title>
				<Checkbox
					status={'unchecked'}
					disabled={true}
				/>
			</View>
			<View style={historyStyles.box}>
				<Title>Time 4</Title>
				<Checkbox
					status={'checked'}
					disabled={true}
				/>
			</View>
		</View>
	);
}
