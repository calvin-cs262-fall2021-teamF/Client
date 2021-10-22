import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/HomePage'
import HistoryScreen from '../pages/history/History';
import ProfileScreen from '../pages/profile/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUser, faHome} from '@fortawesome/fontawesome-free-solid'

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
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (

            <FontAwesomeIcon icon={faHome} size={"lg"}/>
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (

            <FontAwesomeIcon icon={faCalendarCheck} size={"lg"}/>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faUser} size={"lg"}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;