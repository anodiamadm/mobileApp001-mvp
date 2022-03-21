import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function CartScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <Text
        onPress={() => alert('This is the Cart Screen')}
        style={globalStyles.titleText4}
      >Cart Screen</Text>
    </View>
  )
}