import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import MyStudiesScreen from './screens/myStudiesScreen';
import DashboardScreen from './screens/dashboardScreen';
import ProfileScreen from './screens/profileScreen';

// Screen Names
const homeName = 'Home';
const cartName = 'Wishlist';
const myStudiesName = 'My Studies';
const dashboardName = 'Dashboard';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer({ navigation }) {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let routeName = route.name;
            if (routeName === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (routeName === cartName) {
              iconName = focused ? 'cart' : 'cart-outline'
            } else if (routeName === myStudiesName) {
              iconName = focused ? 'book' : 'book-outline'
            } else if (routeName === dashboardName) {
              iconName = focused ? 'speedometer' : 'speedometer-outline'
            } else if (routeName === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor:'grey',
          tabBarLabelStyle: { paddingBottom:10, fontSize:10 },
          tabBarStyle: { display:'flex', padding:10, height:70},
        })}
      >

      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={cartName} component={CartScreen} />
      <Tab.Screen name={myStudiesName} component={MyStudiesScreen} />
      <Tab.Screen name={dashboardName} component={DashboardScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
