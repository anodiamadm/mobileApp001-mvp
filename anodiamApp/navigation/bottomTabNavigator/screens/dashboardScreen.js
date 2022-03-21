import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function DashboardScreen({ navigation }) {
  
  return (
    <View style={globalStyles.container}>
      <Text
        onPress={() => alert('This is the Dashboard Screen')}
        style={globalStyles.titleText4}
      >Dashboard Screen</Text>
    </View>
  )
}