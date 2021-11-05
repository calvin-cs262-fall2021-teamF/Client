import { StyleSheet } from 'react-native';

export const historyStyles = StyleSheet.create({

    container: {
        margin: 18
    },

    box: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        height: 60,
    },
    date: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    }
})
