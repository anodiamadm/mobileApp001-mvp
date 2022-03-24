import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function MyStudiesScreen({ navigation }) {
  
  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor='#6098d8' barStyle='light-content' />
      <Text
        onPress={() => alert('This is the My Studies Screen')}
        style={globalStyles.titleText4}
      >My Studies Screen</Text>
    </View>
  )
}