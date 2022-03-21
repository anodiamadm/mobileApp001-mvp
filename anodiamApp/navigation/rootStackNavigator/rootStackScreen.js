import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/splashScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator hearderMode='none'>
      <RootStack.Screen name='SplashScreen' component={SplashScreen} />
      <RootStack.Screen name='SignInScreen' component={SignInScreen} />
      <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
    </RootStack.Navigator>
  )
};
