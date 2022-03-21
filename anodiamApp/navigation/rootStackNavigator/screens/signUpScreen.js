import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function SignUpScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleLightText4}>Sign Up Screen</Text>
      <Button
        title='Click Here!'
        onPress={() => alert('Sign Up Screen Button Clicked!')}
      />
    </View>
  )
}