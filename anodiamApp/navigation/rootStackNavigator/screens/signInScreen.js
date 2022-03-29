import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar,
          TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../../components/context';
import { globalStyles } from '../../../styles/global';
import { Formik } from 'formik';

const signInError = null;

export default function SignInScreen({ navigation }) {

  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.containerSignIn}>
      <StatusBar backgroundColor='#6098d8' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values)=>{
          signIn(values.email, values.password);
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animatable.View
              animation="fadeInUpBig"
              style={styles.footer}
            >
              <Text style={{fontSize: 14, fontFamily: 'anodiam-bold', color: 'crimson', textAlign: 'center'}}>
                {signInError && 'Wrong Username / password!'}
              </Text>
              <Text style={[styles.text_footer, { marginTop: 15 }]}>Email</Text>
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
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>
              <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="lock"
                  color="#000830"
                  size={20}
                />
                <TextInput
                  placeholder='Your-Password'
                  secureTextEntry={!showPassword}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <TouchableOpacity
                  onPress={()=>{
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? 
                    <Feather
                      name='eye-off'
                      color='grey'
                      size={20}
                    />
                    :
                    <Feather
                      name='eye'
                      color='grey'
                      size={20}
                    />
                  }
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  style={[styles.signIn, {
                    borderColor: '#1af',
                    borderWidth: 1,
                    marginTop: 5
                  }]}
                  onPress={props.handleSubmit}
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
        )}
      </Formik>
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
    marginTop: 40,
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
