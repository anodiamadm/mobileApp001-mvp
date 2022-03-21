import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function ProfileScreen({ navigation }) {
  
  return (
    <View style={globalStyles.container}>
      <Text
        onPress={() => alert('This is the Profile Screen')}
        style={globalStyles.titleText4}
      >Profile Screen</Text>
    </View>
  )
}