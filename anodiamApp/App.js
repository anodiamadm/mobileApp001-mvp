import React from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'anodiam-regular': require('./assets/fonts/Oxygen-Regular.ttf'),
  'anodiam-bold': require('./assets/fonts/Oxygen-Bold.ttf'),
  'anodiam-light': require('./assets/fonts/Oxygen-Light.ttf')
});


export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Home/>
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

