import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Orders() {
  return (
    <View style={{marginTop: 20}}>
        
        {/* Orders Header */}

        <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                <View style={{ flexDirection: 'row', height: 55, backgroundColor: "gray", borderRadius: 8 }}>
                    
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            borderRadius: 6,
                        }}
                        
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',marginRight: 20, justifyContent: 'center' }}>
                        <Image 
                            style={{
                                width: 20, 
                                height: 20, 
                            }}
                            tintColor= "#1D256E"
                            source={require('../assets/icons/back_arrow_icon.png')} />
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
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Your Cart</Text>
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
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
