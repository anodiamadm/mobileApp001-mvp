import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar,
          TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../../components/context';
import { globalStyles } from '../../../styles/global';

export default function SignInScreen({ navigation }) {

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const { signIn } = useContext(AuthContext);

  const textInputChange = (val) => {
    if(val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      })
    }
  };

  const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val,
    });
  }

  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
  }

  const handleValidEmail = (val) => {
    if(val.trim().length >= 4) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  }

  const loginHandle = (username, password) => {
    signIn(username, password);
  }

  return (
    <View style={styles.containerSignIn}>
      <StatusBar backgroundColor='#6098d8' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <Text style={styles.text_footer}>Email</Text>
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
              onChangeText={(val)=>textInputChange(val)}
              onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
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
          { data.isValidEmail ? null : 
            <Animatable.View animation="fadeInLeft" duration={500} >
              <Text style={styles.errorMsg}>Not a valid email!</Text>
            </Animatable.View>
          }
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
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
              onChangeText={(val)=>handlePasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ? 
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
              }
            </TouchableOpacity>
          </View>
          { data.isValidEmail ? null : 
            <Animatable.View animation="fadeInLeft" duration={500} >
              <Text style={styles.errorMsg}>Not a valid password!</Text>
            </Animatable.View>
          }
          <View style={styles.button}>
            <TouchableOpacity
              onPress={()=>{loginHandle(data.email, data.password)}}
              style={[styles.signIn, {
                borderColor: '#1af',
                borderWidth: 1,
                marginTop: 20
              }]}
            >
              <LinearGradient
                colors={['#7ef', '#1af']}
                style={styles.signIn}
              >
              <Text style={styles.textSign}>SIGN IN</Text>
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
            <TouchableOpacity>
              <Text
                style={[globalStyles.specialText4, {marginTop: 25}]}
                onPress={()=>Alert.alert('Change/Forget Password','This functionality will be available soon!')}
              >Change/Forgot Password</Text>
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
  errorMsg: {
    fontFamily: 'anodiam-regular',
    color: 'crimson',
    fontSize: 12,
  }
});
