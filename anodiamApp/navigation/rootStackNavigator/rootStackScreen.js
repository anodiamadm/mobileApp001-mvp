import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/splashScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';

const RootStack = createStackNavigator();

export default RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator
      screenOptions={({route}) => ({
        headerStyle: { height: 0 },
    //    headerTintColor: '#eef6fd',
      //  headerTitleStyle: { fontFamily: 'anodiam-regular', fontSize: 16, fontWeight: 'regular', },
        //headerTitleAlign: 'center',
      })}
    >
      <RootStack.Screen name='SplashScreen' component={SplashScreen}/>
      <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
      <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
    </RootStack.Navigator>
  )
};
