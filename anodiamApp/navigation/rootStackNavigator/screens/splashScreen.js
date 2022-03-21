import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function SplashScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleLightText4}>Splash Screen</Text>
      <Button
        title='Click Here!'
        onPress={() => alert('Splash Screen Button Clicked!')}
      />
    </View>
  )
}