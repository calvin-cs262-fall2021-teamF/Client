/**
 * Main navigation for the app (Bottom Tab Navigation)
 * 
 * @author: Peter Peng and Sean Ebenmelu, Fall 2021
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import Home from "../pages/home/HomePage";
import History from "../pages/history/History";
import Profile from "../pages/profile/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: "#fafafa",
        },
        headerStyle: {
          height: 75,
        },
        tabBarHideOnKeyboard: true,
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
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryPage"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/history-solid.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/profile.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;