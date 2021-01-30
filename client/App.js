import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './screens/Home'
import Menu from './screens/Menu'
import Cart from './screens/Cart'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  let [fontsLoaded] = useFonts({
		'GothamBlack': require('./assets/fonts/Gotham-Black.otf'),
		'GothamBold': require('./assets/fonts/Gotham-Bold.otf'),
		'GothamMedium': require('./assets/fonts/GothamMedium.ttf'),
		'GothamLight': require('./assets/fonts/GothamLight.ttf'),
		'GothamThin': require('./assets/fonts/Gotham-Thin.otf'),
		'GothamBoldItalic': require('./assets/fonts/GothamBoldItalic.ttf'),
		'GothamBookItalic': require('./assets/fonts/Gotham-BookItalic.otf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
  }
  
  return (
    <ScrollView>
      <Menu />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
