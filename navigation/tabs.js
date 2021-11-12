import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import Home from '../pages/home/HomePage'
import HistoryScreen from '../pages/history/History';
import ProfileScreen from '../pages/profile/Profile'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: '#fafafa',
        },
        headerStyle: {
          height: 75
        },
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/history.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            </View>
          ),
          headerStyle: {
            height: 120
          },
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;
