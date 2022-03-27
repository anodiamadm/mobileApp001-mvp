import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar,
          TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { globalStyles } from '../../../styles/global';

export default function SignUpScreen({ navigation }) {

  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  //   confirm_password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   confirm_secureTextEntry: true,
  //   isValidEmailFormat: true,
  //   isValidEmail: true,
  //   isValidInviterEmailFormat: true,
  //   isValidInviterEmail: true,
  //   isValidPassword: true,
  //   isValidConfirmPassword: true,
  // });

  // const textInputChange = (val) => {
  //   if(val.length != 0) {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: true,
  //     })
  //   } else {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: false,
  //     })
  //   }
  // };

  // const handlePasswordChange = (val) => {
  //   setData({
  //       ...data,
  //       password: val,
  //   });
  // }

  // const handleConfirmPasswordChange = (val) => {
  //   setData({
  //       ...data,
  //       confirm_password: val,
  //   });
  // }

  // const updateSecureTextEntry = () => {
  //   setData({
  //       ...data,
  //       secureTextEntry: !data.secureTextEntry,
  //   });
  // }

  // const updateConfirmSecureTextEntry = () => {
  //   setData({
  //       ...data,
  //       confirm_secureTextEntry: !data.confirm_secureTextEntry,
  //   });
  // }

  return (
    <View style={styles.containerSignIn}>
      <StatusBar backgroundColor='#6098d8' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text_footer}>Your Email</Text>
            <TouchableOpacity style={styles.balloonQuestion} onPress={()=>{Alert.alert('Help:', 'Please provide your valid email address.\n- All communications from Anodiam will be through this email.\n- Also, this is going to be your user name in Anodiam.')}}>
              <FontAwesome
                name="question-circle"
                color="#6098d8"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#000830"
              size={20}
            />
            <TextInput
              placeholder='you@email.com'
              style={styles.textInput}
              autoCapitalize="none"
//              onChangeText={(val)=>textInputChange(val)}
            />
            {data.check_textInputChange ?
            <Animatable.View animation="bounceIn">
              <Feather
                name='check-circle'
                color='green'
                size={20}
              />
            </Animatable.View>
            : null}
          </View>
          {/* { data.isValidEmailFormat ? null :
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={globalStyles.errorMessage}>Invalid email format!</Text>
            </Animatable.View>
          }
          { data.isValidEmail ? null :
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={globalStyles.errorMessage}>Email already registered with Anodiam!</Text>
            </Animatable.View>
          } */}
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Text style={styles.text_footer}>Inviter's Email</Text>
            <TouchableOpacity style={styles.balloonQuestion} onPress={()=>{Alert.alert('Help:', 'Enter the exact email address of the person who invited you to Anodiam.\n- Both of you will get benefits!')}}>
              <FontAwesome
                name="question-circle"
                color="#6098d8"
                size={20}
              />
            </TouchableOpacity>
          </View>  
          <View style={styles.action}>
            <AntDesign
              name="team"
              color="#000830"
              size={20}
            />
            <TextInput
              placeholder='friend@email.com'
              style={styles.textInput}
              autoCapitalize="none"
//              onChangeText={(val)=>textInputChange(val)}
            />
            {/* {data.check_textInputChange ?
            <Animatable.View animation="bounceIn">
              <Feather
                name='check-circle'
                color='green'
                size={20}
              />
            </Animatable.View>
            : null} */}
          </View>
          {/* { data.isValidInviterEmailFormat ? null :
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={globalStyles.errorMessage}>Invalid email format!</Text>
            </Animatable.View>
          }
          { data.isValidInviterEmail ? null :
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={globalStyles.errorMessage}>Email not registered with Anodiam!</Text>
            </Animatable.View>
          } */}
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Text style={styles.text_footer}>Password</Text>
            <TouchableOpacity style={styles.balloonQuestion} onPress={()=>{Alert.alert('Help:', 'Eight (8) or more characters.\n- Letters (a-z, A-Z)\n- Numerals (0-9)\n- Special characters (@,#,$,%,^,&,+,=)')}}>
              <FontAwesome
                name="question-circle"
                color="#6098d8"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color="#000830"
              size={20}
            />
            <TextInput
              placeholder='Your Password'
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
//              onChangeText={(val)=>handlePasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {/* {data.secureTextEntry ? 
                <Feather
                  name='eye'
                  color='grey'
                  size={20}
                />
                :
                <Feather
                  name='eye-off'
                  color='grey'
                  size={20}
                />
              } */}
            </TouchableOpacity>
          </View>
          {/* { data.isValidPassword ? null :
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={globalStyles.errorMessage}>Invalid password!</Text>
            </Animatable.View>
          } */}
          <Text style={[styles.text_footer, { marginTop: 30 }]}>Confirm Password</Text>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color="#000830"
              size={20}
            />
            <TextInput
              placeholder='Confirm Your Password'
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
//              onChangeText={(val)=>handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
            >
              {/* {data.secureTextEntry ? 
                <Feather
                  name='eye'
                  color='grey'
                  size={20}
                />
                :
                <Feather
                  name='eye-off'
                  color='grey'
                  size={20}
                />
              } */}
            </TouchableOpacity>
          </View>
          {/* { data.isValidConfirmPassword ? null :
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={globalStyles.errorMessage}>Confirm Password does not match!</Text>
            </Animatable.View>
          } */}
          <View style={styles.button}>
            <LinearGradient
              colors={['#7ef', '#1af']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>SIGN UP</Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={()=>navigation.navigate('SignInScreen')}
              style={[styles.signIn, {
                borderColor: '#1af',
                borderWidth: 1,
                marginTop: 20
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#1af'
              }]}
              >SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  containerSignIn: {
    flex: 1,
    backgroundColor: '#6098d8',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#eef6fd',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    fontSize: 24,
    fontFamily: 'anodiam-bold',
    color: '#def',
  },
  text_footer: {
    fontFamily: 'anodiam-regular',
    fontSize: 18,
    color: '#383864',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cef',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#383864',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'anodiam-bold',
  },
  balloonQuestion: {
    paddingLeft: 25,
  }
});
