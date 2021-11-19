/**
 * Handles the details of JSON objects being passed in
 * @author: Sean Ebenmelu
 * Fall 2021
 * Toothflex History
 */

/** package imports */
import React from 'react';
import {Text, View} from 'react-native';

/** stylesheet import */
import {historyStyles} from './historyStyles';

// function handles the code for the Details Screen

export default function HistoryDetailsScreen({route}) {

    return (
        <View style={historyStyles.detailContainer}>
            {/* Display the fields of the received movie object. */}
            {/*<Text>{route.params.brushDate}</Text>*/}
            {/*<Text>ID: {route.params.duration}</Text>*/}
            <Text style={historyStyles.date}>Duration: {route.params.duration}</Text>
            <Text style={historyStyles.date}>{route.params.time} seconds</Text>
        </View>
    );
}
