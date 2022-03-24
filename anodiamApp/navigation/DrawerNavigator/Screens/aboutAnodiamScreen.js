import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { globalStyles } from '../../../styles/global';

export default function AboutAnodiamScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor='#6098d8' barStyle='light-content' />
      <Text
        onPress={() => alert('About Anodiam Screen')}
        style={globalStyles.titleText4}
      >About Anodiam (c) Screen</Text>
    </View>
  )
}