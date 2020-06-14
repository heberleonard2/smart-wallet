import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from 'expo';
import { Rubik_400Regular, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import Main from './src/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <Main/>
  );
}


