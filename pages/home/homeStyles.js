import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: 'aqua'
	},
	time: {
		textAlign: 'center',
		fontSize: 30,
	},
	roundButton: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'orange'
	},
	roundButtonText: {
		fontSize: 50
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
	},

	headerImage: {
		width: 1500,
		height: 1000,
		justifyContent: 'center',
		alignItems: 'center',
	},

	imageContainer: {
		flex: 1, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center', 
	}
});


export const timerOptions = {
	container: {
		margin: 20,
		borderRadius: 5,
		width: 200,
		alignItems: 'center',
		backgroundColor: 'red'
	},
	text: {
		fontSize: 50,
		color: '#000',
		letterSpacing: 5,
		fontWeight: 'bold'
	},
};