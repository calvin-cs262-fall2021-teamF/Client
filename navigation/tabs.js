import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Home from '../pages/home/HomePage'
import HistoryScreen from '../pages/history/History';
import ProfileScreen from '../pages/profile/Profile'
import { View, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const navigation = useNavigation();

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
          // title: (
          //   <View>
          //     <TouchableOpacity onPress={() => navigation.navigate('About')}>
          //       <Image
          //         source={require('../assets/logo.png')}
          //         resizeMode="contain"
          //         style={{
          //           width: 120,
          //           height: 76,
          //         }}
          //       />
          //     </TouchableOpacity>

          //     {/* <Text>hi</Text> */}
          //   </View>
          // ),
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
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
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            </View>
          )
        }}
      />
      {/* <Tab.Screen name="About" component={AboutScreen} /> */}
    </Tab.Navigator>
  )
}

export default Tabs;