import { StyleSheet } from 'react-native';

export const historyStyles = StyleSheet.create({
    
    h: {
        fontSize: 32,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#E26A2C'
    },

    title: {
        fontSize: 25,
        fontFamily: 'Roboto' ,
        fontWeight: 'bold',
        color: 'black', 
        marginTop: 30,
        marginLeft: 10,
    },

    div: {
        backgroundColor: 'powderblue',
        padding: 10,
        width: '96%',
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        margin: 7,
        // textAlign: "center"
    },

    btn: {
        backgroundColor: 'steelblue',
        padding: 10,
        marginLeft: 10
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
        marginRight: 70,
        marginLeft: 10,
        height: 40,
    },

    check: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
    }
})
