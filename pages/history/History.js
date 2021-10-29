import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { historyStyles } from './historyStyles';

export default function HistoryScreen({ navigation }) {
	const [input, setInput] = useState('');

	return (
		<View>
			<Text style={historyStyles.h}> Brushing History</Text>

			<Text style={historyStyles.div}>
				Time 1

				<TouchableOpacity style={historyStyles.btn}> 
					<Text> Check </Text>
				</TouchableOpacity>

				<TouchableOpacity style={historyStyles.btn}>
					<Text>Date </Text>
				</TouchableOpacity>

			</Text>

			<Text style={historyStyles.div}>
				Time 2
				
				<TouchableOpacity style={historyStyles.btn}> 
					<Text> Check </Text>
				</TouchableOpacity>

				<TouchableOpacity style={historyStyles.btn}>
					<Text> Date </Text>
				</TouchableOpacity>

			</Text>
			
			<Text style={historyStyles.div}>
				Time 3 

				<TouchableOpacity style={historyStyles.btn}> 
					<Text> Check </Text>
				</TouchableOpacity>

				<TouchableOpacity style={historyStyles.btn}>
					<Text> Date </Text>
				</TouchableOpacity>

			</Text>
		</View>
	);
}
