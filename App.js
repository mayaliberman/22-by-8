import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import ConfigureNavigation from './navigation/ConfigureNavigation';

const fetchFonts = () => {
  return Font.loadAsync({
    rubik: require('./assets/fonts/Rubik-Regular.ttf'),
    'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <ConfigureNavigation />;
  // return (
  //   <View>
  //     <Text>Hello</Text>
  //   </View>
  // );
}
