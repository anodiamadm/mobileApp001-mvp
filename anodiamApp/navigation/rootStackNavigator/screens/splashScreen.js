import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.containerSplash}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../../assets/anodiamIconLight.png')}
          style={styles.logo}
          resizeMode='stretch'
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animatio="fadeInUpBig"
      >
        <Text style={styles.title}>'A' grade education in your grip!</Text>
        <Text style={styles.text}>Sign in to your account!</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#7ef', '#1af']}
              style={styles.signIn}
            >
            <Text style={styles.textSign}>LOG IN</Text>
            <MaterialIcons 
              name='navigate-next'
              color='#fff'
              size={20}
            />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>navigation.navigate('SignUpScreen')}
            style={[styles.signIn, {
              borderColor: '#1af',
              borderWidth: 1,
              marginTop: 20
            }]}
          >
            <Text style={[styles.textSign, {
              color: '#1af'
            }]}
            >SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    backgroundColor: '#000830',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#eef6fd',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    height: height_logo,
    width: height_logo,
  },
  title: {
    fontSize: 24,
    fontFamily: 'anodiam-bold',
    color: '#6098d8',
  },
  text: {
    fontFamily: 'anodiam-regular',
    fontSize: 18,
    color: '#383864',
    marginTop: 20,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textSign: {
    color: '#fff',
    fontFamily: 'anodiam-bold',
  }
});
