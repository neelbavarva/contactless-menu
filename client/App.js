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
import * as myConstClass from './HttpLink';

export default function App() {

  	const [viewMode, setViewMode] = useState("scan");
	const [qrCode_url, setQrCode_url] = useState(null);
	const [menuCard, setMenuCard] = useState([]);
	const [Cart, setCart] = useState([]);

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

	const fetchMenuCard = () =>{
		console.log("Inside FetchMenuCard");
        fetch(`${myConstClass.HTTP_LINK}/getMenu/${qrCode_url}`)
        .then(res=>res.json())
        .then(results=>{
			console.log("Menu-card ka data is received.", ...results);

			setMenuCard([...results]);
			console.log("This is Menu-card1 :-",...menuCard);
		})
        return 1;
	}
	

	/********* Button Handlers *********/
  
	const GoToMenuButtonHandler = (id) => {
		setQrCode_url(id);
		fetchMenuCard();
		
		setTimeout(() => {
			setViewMode("menu");
			console.log("After timeout");
			console.log("This is Menu-card2 :-",...menuCard);
		}, 5000);
	}

	const ViewCartButtonHandler = (cart) => {
		
		console.log("Inside ViewCartButtonHandler");
		setCart(cart);
		setTimeout(() => {
			console.log("this is CCart :- ", ...Cart);
			setViewMode("cart");
			console.log("After timeout");
		}, 5000);
	}

	return (
		<ScrollView>
			{viewMode == "scan" && <Home GoToMenuButtonHandler={GoToMenuButtonHandler} />}
			{viewMode == "menu" && <Menu menuCard={menuCard} ViewCartButtonHandler={ViewCartButtonHandler} />}
			{viewMode == "cart" && <Cart Cart={Cart} />}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
