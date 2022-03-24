import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfileScreen from '../../../DrawerNavigator/Screens/editProfileScreen';
import SignOutScreen from '../../../DrawerNavigator/Screens/signOutScreen';
import ProfileDrawerContent from '../../../DrawerNavigator/Screens/profileDrawerContent';

export default function ProfileScreen({ navigation }) {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='EditProfile' screenOptions={{
        headerTintColor: '#6098d8',
        headerTitleAlign: 'center'
      }}
      drawerContent={props => <ProfileDrawerContent {...props} />}
    >
      <Drawer.Screen name='Student Profile' component={EditProfileScreen} />
      <Drawer.Screen name='SignOut' component={SignOutScreen} />
    </Drawer.Navigator>
  )
}