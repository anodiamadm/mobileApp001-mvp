import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import RootStackScreen from './navigation/rootStackNavigator/rootStackScreen';
import MainContainerScreen from './navigation/bottomTabNavigator/mainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './components/context';

const getFonts = () => Font.loadAsync({
  'anodiam-regular': require('./assets/fonts/Oxygen-Regular.ttf'),
  'anodiam-bold': require('./assets/fonts/Oxygen-Bold.ttf'),
  'anodiam-light': require('./assets/fonts/Oxygen-Light.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('sw21x3452herfhergvnfnverh');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('sw21x3452herfhergvnfnverh');
      setIsLoading(false);
    },
  }), []);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  if( isLoading ) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if(fontsLoaded) {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          { userToken != null ?
            <MainContainerScreen/>
          :
            <RootStackScreen/>
          }
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

