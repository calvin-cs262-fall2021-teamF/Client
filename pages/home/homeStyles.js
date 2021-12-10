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
	},

	modalContainer: {
		padding: '10%',
		backgroundColor: '#000000aa',
		flex: 1,
	},

	modalToggle: {
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},

	header: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});


export const timerOptions = {
	container: {
		margin: 20,
		borderRadius: 5,
		width: 200,
		alignItems: 'center',
	},
	text: {
		fontSize: 50,
		color: '#000',
		letterSpacing: 5,
		fontWeight: 'bold'
	},
};
