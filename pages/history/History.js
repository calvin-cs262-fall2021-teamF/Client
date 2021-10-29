import { useLinkProps } from '@react-navigation/native';
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { historyStyles } from './historyStyles';

export default function HistoryScreen({ navigation }) {
	const [input, setInput] = useState('');

	return (
		<View>
				<Text style={historyStyles.h}> Brushing History</Text>
			<Text style={historyStyles.div}>
				Time 1
				<button style={{float: 'right'}}> 
					Check
				</button>
				<button style={{float: 'left'}}>
					Date
				</button>
				</Text>
			<Text style={historyStyles.div}>
				Time 2
				<button style={{float: 'right'}}> 
					Check
				</button>
				<button style={{float: 'left'}}>
					Date
				</button>
			</Text>
			<Text style={historyStyles.div}>
				Time 3
				<button style={{float: 'right'}}> 
					Check
				</button>
				<button style={{float: 'left'}}>
					Date
				</button>
				</Text>
		</View>
	);
}
