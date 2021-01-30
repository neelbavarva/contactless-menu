import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Home() {
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
                            // onPress={() => NavbarButtonHandler("add")}
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
                
            >
                <View style={styles.button}>
                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Scan QR code</Text>
                </View>
            </TouchableOpacity>

            <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 50, marginBottom: 20}} />
            <Text style={{color: "red", textAlign: "center", fontFamily: 'GothamMedium'}}>For Shop owner use only*</Text>
            {/* Shop ID Button */}
            <TouchableOpacity 
                style={{paddingTop: 10,marginTop: 20, marginBottom: 20, margin: 10}}
                
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
