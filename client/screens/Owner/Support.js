import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';


export default function Support() {

    return (
        <View>
            <Text style={{ alignSelf: "center", marginBottom: 20, fontSize: 16, fontFamily: 'GothamMedium', color: "black" }}>Not satisfied with our app??</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 90, marginBottom: 40}} />
            <Text style={{marginLeft: 20, fontSize: 16, lineHeight: 22, fontFamily: 'GothamMedium', color: "black" }}>
                Not satisfied with our app??. You can inform us about which feature our app is lagging according to your restaurant.
            </Text>

            <View style={{flexDirection: "row"}}>
                <Text style={{marginLeft: 20, marginTop: 40, fontSize: 16, lineHeight: 22, fontFamily: 'GothamMedium', color: "black" }}>
                    Contact us at :
                </Text>
                <Text style={{ marginTop: 40, fontSize: 16, lineHeight: 22, fontFamily: 'GothamMedium', color: "blue" }}>
                    +91 9876543210
                </Text>
            </View>
            
            <View style={{flexDirection: "row"}}>
                <Text style={{marginLeft: 20, marginTop: 40, fontSize: 16, lineHeight: 22, fontFamily: 'GothamMedium', color: "black" }}>
                    Mail us at : 
                </Text>
                <Text style={{ marginTop: 40, fontSize: 16, lineHeight: 22, fontFamily: 'GothamMedium', color: "blue" }}>
                    something@gmail.com
                </Text>
            </View>

            <Text style={{marginTop: 40, alignSelf: "center", fontSize: 13, lineHeight: 22, fontFamily: 'GothamMedium', color: "tomato" }}>
                Don't forget to add your restaurant ID if you Mail us*
            </Text>

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
