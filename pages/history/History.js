/**
 * This contains the History page (main) and the history stack
 * 
 * @author: Peter Peng and Sean Ebenmelu, Fall 2021
 */
import React, { useState, useContext, useEffect } from "react";
import { ActivityIndicator, Text, View, FlatList, ScrollView } from "react-native";
import { historyStyles } from "./historyStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelpButton from '../../components/HelpButton';
import { LoginContext } from "../../context/loginContext";

const Stack = createNativeStackNavigator();

// History stack
export default function History() {
  return (
    <Stack.Navigator initialRouteName="History">
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitle: () => (
            <View style={historyStyles.header}>
              <Text style={{ fontSize: 18 }}>History</Text>
              <HelpButton text={
                'Logging in is required to see your brushing history. (To do so, go to the Profile page, the last tab on the bottom.) \n\n' +
                'Once logged in, you can see your brushing history displayed here.'
              } />
            </View>
          ),
          headerStyle: {
            height: 75,
          },
        }}
      />
    </Stack.Navigator>
  )
}

// History page that displays the logs from the database once signed in
const HistoryScreen = () => {
  const { isLoggedIn, userId } = useContext(LoginContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // pull logs from the database once signed in
  const getHistory = async () => {
    if (isLoggedIn) {
      try {
        const response = await fetch('https://toothflex-service.herokuapp.com/logs/' + userId, { method: 'GET' });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getHistory();
  })

  return (
    <ScrollView style={historyStyles.container}>
      <Text style={historyStyles.headerText}> Brushing History </Text>
      <Text style={historyStyles.subtitleText}> "You don't have to brush all your teeth, just the ones you want to keep" </Text>
      {isLoggedIn ?
        (
          isLoading ? <ActivityIndicator /> :
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id.toString()}
              renderItem={({ item }) => (
                <View style={historyStyles.logBox}>
                  <Text style={{ fontSize: 18 }}>{String(item.brushdate).slice(0, 10)}  {String(item.brushdate).slice(11, 16)}</Text>
                  <Text style={{ fontSize: 18 }}>{item.duration}s</Text>
                </View>
              )}
            />
        ) : (
          // prompt user to sign in
          <Text style={{ margin: 20, fontSize: 18 }}>Log in to see your brushing history...</Text>
        )}
    </ScrollView>
  );
}
