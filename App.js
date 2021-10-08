import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/home/HomePage'
import HistoryScreen from './pages/history/History';
import AboutScreen from './pages/about/About';
import Header from './shared/header'
// import Navigator from './Navigation'     I wanted to use this file to hold the Stacks

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Header navigation={navigation}/>
            ),
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerRight: () => (
              <Header navigation={navigation}/>
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerRight: () => (
              <Header navigation={navigation}/>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
