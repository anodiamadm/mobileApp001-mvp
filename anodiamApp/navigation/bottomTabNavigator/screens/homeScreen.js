import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function HomeScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor='#6098d8' barStyle='light-content' />
      <Text
        onPress={() => alert('This is the Home Screen')}
        style={globalStyles.titleText4}
      >Home Screen</Text>
    </View>
  )
}