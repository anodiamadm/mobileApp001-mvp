import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function MyScholarshipsScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor='#6098d8' barStyle='light-content' />
      <Text
        onPress={() => alert('My Scholarships Screen')}
        style={globalStyles.titleText4}
      >My Scholarships Screen</Text>
    </View>
  )
}