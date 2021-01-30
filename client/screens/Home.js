import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, LogBox, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function Home({GoToMenuButtonHandler}) {

    const [image, setImage] = useState(null);
    const [scannedData, setScannedData] = useState(false); 
    const [idData, setIdData] = useState(null);

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();

        LogBox.ignoreLogs(['Functions are not valid as a React child']);
    }, []);

    const clickImage = async () => {
        console.log("Take photo is pressed");

        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        console.log(status)

        if (status === 'granted') {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1
            })
        
            console.log(result);
    
            if (!result.cancelled) {
                setImage(result);
                let name = result.uri.split(".")
                let newfile = {
                  uri:result.uri,
                  type:`test/${name[3]}`,
                  name:`test.${name[3]}`
                }

                setIdData("60154892d9bd758ac9a36d63");
            }
        } else {
            Alert.alert('Access denied')
        }

    }

    return (
        <View>

            {/* Navbar */}
            <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                <View style={{ flexDirection: 'row', height: 55, backgroundColor: "#ECECEC", borderRadius: 8 }}>
                        
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            borderRadius: 6,
                        }}
                        
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',marginRight: 20, justifyContent: 'center' }}>
                        
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor:null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>App ka Name</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <Image style={{
                width: 250,
                height: 250,
                alignSelf: "center",
                marginTop: 30, 
                marginBottom: 30
            }} source={require('../assets/qr.png')}  />

            <TouchableOpacity 
                style={{paddingTop: 10,marginTop: 10, marginBottom: 40, margin: 10}}
                onPress = {() => {
                    console.log("Scan QR code button is Pressed!!");
                    clickImage();
                }} 
            >
                <View style={styles.button}>
                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Scan QR code</Text>
                </View>
            </TouchableOpacity>

            {idData ? (
                <TouchableOpacity 
                    style={{paddingTop: 10,marginTop: 10, marginBottom: 40, margin: 10}}
                    onPress = {() => {
                        console.log("Go to Menu button is Pressed!!");
                        GoToMenuButtonHandler(idData);
                    }} 
                >
                    <View style={styles.button}>
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Go to Menu</Text>
                    </View>
                </TouchableOpacity>
            ) : (
                <View />
            )}

            <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 50, marginBottom: 20}} />
            <Text style={{color: "red", textAlign: "center", fontFamily: 'GothamMedium'}}>For Shop owner use only*</Text>
            
            {/* Shop ID Button */}
            <TouchableOpacity 
                style={{paddingTop: 10,marginTop: 20, marginBottom: 20, margin: 10}}  
                onPress = {() => {
                    console.log("Login with Shop id button is Pressed!!");
                }} 
            >
                <View style={{
                    backgroundColor: "gray",
                    padding: 12,
                    borderRadius: 6,
                }}>
                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Login with shop ID</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button : {
        backgroundColor: "#222222",
        padding: 12,
        borderRadius: 6,
    }
});
