import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfileScreen from './editProfileScreen';
import ProfileDrawerContent from '../../DrawerNavigator/profileDrawerContent';
import AboutAnodiamScreen from '../../DrawerNavigator/Screens/aboutAnodiamScreen';
import MyAchievementsScreen from '../../DrawerNavigator/Screens/myAchievementsScreen';
import MyFriendsScreen from '../../DrawerNavigator/Screens/myFriendsScreen';
import MyScholarshipsScreen from '../../DrawerNavigator/Screens/myScholarshipsScreen';

export default function ProfileScreen({ navigation }) {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='EditProfileScreen' screenOptions={{
        headerTintColor: '#6098d8',
        headerTitleAlign: 'center'
      }}
      drawerContent={props => <ProfileDrawerContent {...props} />}
    >
      <Drawer.Screen name='EditProfileScreen' component={EditProfileScreen} />
      <Drawer.Screen name='AboutAnodiamScreen' component={AboutAnodiamScreen} />
      <Drawer.Screen name='MyAchievementsScreen' component={MyAchievementsScreen} />
      <Drawer.Screen name='MyFriendsScreen' component={MyFriendsScreen} />
      <Drawer.Screen name='MyScholarshipsScreen' component={MyScholarshipsScreen} />
    </Drawer.Navigator>
  )
}