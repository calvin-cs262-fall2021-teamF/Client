import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/home/HomePage'
import HistoryScreen from './pages/history/History';
import AboutScreen from './pages/about/About';
import Header from './shared/header'

const Stack = createNativeStackNavigator();

export function Navigator() {
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
};
