import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/HomePage'
import HistoryScreen from '../pages/history/History';
import ProfileScreen from '../pages/profile/Profile'
import { View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={["far", "calendar"]} size={25}/>
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={["fal", "coffee"]}/>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon="home" />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;