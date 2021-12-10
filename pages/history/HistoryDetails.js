/**
 * Handles the details of JSON objects being passed in
 * 
 * Fall 2021
 * Toothflex History
 */

/** package imports */
import React from 'react';
import { Text, View } from 'react-native';

/** stylesheet import */
import { historyStyles } from './historyStyles';

// function handles the code for the Details Screen

export default function HistoryDetailsScreen({ route }) {
    let a_Date = String(route.params.brushdate).slice(0, 10);
    return (
        <View style={historyStyles.detailContainer}>
            <Text style={historyStyles.date}>
                Date: {a_Date}{"\n"}
                Duration: {route.params.duration} seconds {"\n"}
                ID: {route.params.id}{"\n"}
            </Text>

        </View>
    );
}
