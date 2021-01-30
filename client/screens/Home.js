import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Home() {
    return (
        <View>

            {/* Home Header */}
            <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30}}>
                <View style={{ flexDirection: 'row', height: 55, backgroundColor: "white", borderRadius: 8 }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            margin: 5,
                            borderRadius: 6,
                        }}
                        
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{  marginLeft: 0, fontSize: 16,fontFamily: 'GothamMedium', lineHeight: 22, color: "black"}}>Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor:null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                        // onPress={() => NavbarButtonHandler("chart")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                        // onPress={() => NavbarButtonHandler("add")}
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
                </View>
            </View>

            <Image style={{
                width: 250,
                height: 250,
                alignSelf: "center",
                marginTop: 100
            }} source={require('../assets/qr.png')}  />

            <TouchableOpacity 
                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                
            >
                <View style={styles.button}>
                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Scan QR code</Text>
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
