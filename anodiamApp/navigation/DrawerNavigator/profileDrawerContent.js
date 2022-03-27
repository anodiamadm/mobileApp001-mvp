import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { AuthContext } from '../../components/context';

export default function ProfileDrawerContent(props) {

  const [isCuteTheme, setIsCuteTheme] = useState(false);

  const { signOut } = useContext(AuthContext);

  const toggleTheme = () => {
    setIsCuteTheme(!isCuteTheme);
    Alert.alert('Cute Pink Theme','This functionality will be available soon!');
  }

  return (
    <View style={{ flex:1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://storage.googleapis.com/anodiam-sample-bkt/kiya.jpg'
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title style={styles.title}>Kiya Chakrabarty</Title>
                <Caption style={styles.caption}>@pinaki_Student</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <SimpleLineIcons
                  name='badge'
                  color={color}
                  size={size}
                />
              )}
              label='My Achievements'
              onPress={()=>{props.navigation.navigate('MyAchievementsScreen')}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  name='user-friends'
                  color={color}
                  size={size-5}
                />
              )}
              label='My Friends'
              onPress={()=>{props.navigation.navigate('MyFriendsScreen')}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Feather
                  name='dollar-sign'
                  color={color}
                  size={size}
                />
              )}
              label='My Scholarships'
              onPress={()=>{props.navigation.navigate('MyScholarshipsScreen')}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <AntDesign
                  name='copyright'
                  color={color}
                  size={size}
                />
              )}
              label='About Anodiam'
              onPress={()=>{props.navigation.navigate('AboutAnodiamScreen')}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={()=>{toggleTheme()}}>
              <View style={styles.preference}>
                <Text>Cute Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isCuteTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name='exit-to-app' color={color} size={size} />
          )}
          label='Sign Out'
          onPress={()=> {signOut()}}
        />
      </Drawer.Section>
    </View>
  )
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'anodiam-bold',
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'anodiam-regular',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  paragraph: {
    fontFamily: 'anodiam-bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#eef6fd',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})

