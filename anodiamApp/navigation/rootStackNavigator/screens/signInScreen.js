import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function SignInScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleLightText4}>Sign In Screen</Text>
      <Button
        title='Click Here!'
        onPress={() => alert('Sign In Screen Button Clicked!')}
      />
    </View>
  )
}