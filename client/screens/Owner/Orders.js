import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';


export default function Order() {

    const menu_items = [  
        {"name":"pizza", "price":"100"},  
        {"name":"Burger", "price":"50"},
        {"name":"Coffee", "price":"60"},  
        {"name":"Hash brown", "price":"30"}   
    ] 
  return (
    <View style={{marginTop: 20}}>


        {/* Menu Header */}
         
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
