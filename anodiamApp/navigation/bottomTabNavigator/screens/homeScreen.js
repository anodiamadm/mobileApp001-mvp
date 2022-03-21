import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function HomeScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <Text
        onPress={() => alert('This is the Home Screen')}
        style={globalStyles.titleText4}
      >Home Screen</Text>
    </View>
  )
}