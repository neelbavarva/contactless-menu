import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Home from './screens/Home'
import Menu from './screens/Menu'
import Cart from './screens/Cart'
import AddItem from './screens/Owner/AddItem'
import Orders from './screens/Owner/Orders'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [viewMode, setviewMode] = useState("scan");

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
      <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                <View style={{ flexDirection: 'row', height: 55, backgroundColor: "#ECECEC", borderRadius: 8 }}>
                        
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            borderRadius: 6,
                        }}
                        onPress={() =>setviewMode("scan")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: viewMode == "scan" ? "gray" : null,
                                borderRadius: 10
                            }}
                        >
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Scan QR</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor:null, 
                            margin: 5,
                            borderRadius: 8,
                            backgroundColor: viewMode == "menu" ? "gray" : null,
                            borderRadius: 10
                        }}
                        onPress={() =>setviewMode("menu")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Menu</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            margin: 5,
                            borderRadius: 8,
                            backgroundColor: viewMode == "cart" ? "gray" : null,
                            borderRadius: 10
                        }}
                        onPress={() =>setviewMode("cart")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Cart</Text>   
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {viewMode == "scan" && <Home />}
            {viewMode == "menu" && <Menu />}
            {viewMode == "cart" && <Cart />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
