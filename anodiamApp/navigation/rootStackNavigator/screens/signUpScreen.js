import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar,
          TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { globalStyles } from '../../../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const signUpSchema = yup.object({
  email: yup.string()
          .email('Invalid email format')
          .required('Email address is required'),
  inviter_email: yup.string()
          .email('Invalid email format')
          .notOneOf([yup.ref('email')], 'You cannot be your own inviter.'),
  password: yup.string()
          .required('Password is required')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
            "Minimum 6 Chars, Uppercase, Lowercase, Number & Special Char"
          ),
  confirm_password: yup.string()
          .required('Please retype your password.')
          .oneOf([yup.ref('password')], 'Confirm password does not match.'),
})

export default function SignUpScreen({ navigation }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.containerSignIn}>
      <StatusBar backgroundColor='#6098d8' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Formik
        initialValues={{ email: '', inviter_email: '', password: '', confirm_password: '' }}
        validationSchema={signUpSchema}
        onSubmit={(values)=>{
        console.log('Values = ', values);
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animatable.View
              animation="fadeInUpBig"
              style={styles.footer}
            >
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text_footer}>Your Email</Text>
                <TouchableOpacity style={styles.balloonQuestion} onPress={()=>{Alert.alert('Help:', 'Please provide your permanent email address.\n- All communications from Anodiam will be through this email.\n- Also, this is going to be used as your username in Anodiam.')}}>
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
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur.email}
                />
              </View>
              <Text style={globalStyles.errorMessage}>{ props.touched.email && props.errors.email }</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
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
                  onChangeText={props.handleChange('inviter_email')}
                  value={props.values.inviter_email}
                  onBlur={props.handleBlur.inviter_email}
                />
              </View>
              <Text style={globalStyles.errorMessage}>{ props.touched.inviter_email && props.errors.inviter_email }</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
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
                  placeholder='Your-Password'
                  secureTextEntry={!showPassword}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  onBlur={props.handleBlur.password}
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
              <Text style={globalStyles.errorMessage}>{ props.touched.password && props.errors.password }</Text>
              <Text style={[styles.text_footer, { marginTop: 10 }]}>Confirm Password</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="lock"
                  color="#000830"
                  size={20}
                />
                <TextInput
                  placeholder='Confirm-Your-Password'
                  secureTextEntry={!showConfirmPassword}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('confirm_password')}
                  value={props.values.confirm_password}
                  onBlur={props.handleBlur.confirm_password}
                />
                <TouchableOpacity
                  onPress={()=>{
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                >
                  {showConfirmPassword ? 
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
              <Text style={globalStyles.errorMessage}>{ props.touched.confirm_password && props.errors.confirm_password }</Text>
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
                    <Text style={styles.textSign}>SIGN UP</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>navigation.navigate('SignInScreen')}
                  style={[styles.signIn, {
                    borderColor: '#1af',
                    borderWidth: 1,
                    marginTop: 10
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
    flex: 6,
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
    marginTop: 20,
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
