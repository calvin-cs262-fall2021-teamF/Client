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
		backgroundColor: 'orange'
	},
	resetButton: {
		width: 60,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	generalButton: {
		width: 100,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	}
});


export const options = {
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