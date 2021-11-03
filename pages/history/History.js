import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { historyStyles } from './historyStyles';
import { Title} from 'react-native-paper';
import {CheckBox} from '@react-native-community/checkbox';


export default function HistoryScreen({ navigation }) {
	const [input, setInput] = useState('');
	const [toggleCheckBox, setToggleCheckBox] = useState(false);
	const handleChange = () => {
		setToggleCheckBox(!toggleCheckBox);
	}
	const CheckBox = ({label, value, onChange}) => {
		return (
			<label>
				<input type="checkbox" checked={value} onChange={onChange} />
			{label}
			</label>
		);
	}
	return (
		<View>

			<Text style={historyStyles.h}> Brushing History</Text>
			
			<Text style={historyStyles.title}> 
			11/1/2021 
			</Text>
			<View style={historyStyles.box}>
        <Title> Time 1 </Title>
				<div> 
					<label>
						<input
							type="checkbox"
							toggleCheckBox={toggleCheckBox}
							onChange={handleChange}
						/>
					</label>
				</div>
			</View>
			<View style={historyStyles.box}>
					<Title>Time 2</Title>
					<div> 
					<label>
						<input
							type="checkbox"
							toggleCheckBox={toggleCheckBox}
							onChange={handleChange}
						/>
					</label>
				</div>
			</View>

			<Text style={historyStyles.title}> 
			11/2/2021 
			</Text>
			<View style={historyStyles.box}>
        <Title> Time 1 </Title>
				<div> 
					<label>
						<input
							type="checkbox"
							toggleCheckBox={toggleCheckBox}
							onChange={handleChange}
						/>
					</label>
				</div>
			</View>
			<View style={historyStyles.box}>
					<Title>Time 2</Title>
					<div> 
					<label>
						<input
							type="checkbox"
							toggleCheckBox={toggleCheckBox}
							onChange={handleChange}
						/>
					</label>
				</div>
			</View>

			<Text style={historyStyles.title}> 11/3/2021 </Text>
			<View style={historyStyles.box}>
					<Title>Time 3</Title>
					<div> 
					<label>
						<input
							type="checkbox"
							toggleCheckBox={toggleCheckBox}
							onChange={handleChange}
						/>
					</label>
				</div>
			</View>

			<View style={historyStyles.box}>
					<Title>Time 4</Title>
					<div> 
					<label>
						<input
							type="checkbox"
							toggleCheckBox={toggleCheckBox}
							onChange={handleChange}
						/>
					</label>
				</div>
			</View>
			
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
};
