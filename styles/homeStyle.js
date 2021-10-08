import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	time: {
		textAlign: 'center',
		fontSize: 30,
	},
	roundButton: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'orange',
	},
	resetButton: {
		width: 60,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	generalButton: {
		width: 100,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
