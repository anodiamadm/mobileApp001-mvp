import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function SignOut({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <Text
        onPress={() => alert('This is the Sign Out Screen')}
        style={globalStyles.titleText4}
      >Sign Out Screen</Text>
    </View>
  )
}