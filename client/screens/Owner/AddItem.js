import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';


export default function AddItem({ AddItemButtonHandler }) {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState('');
    const [itemCategory, setItemCategory] = useState("");
    const [itemImgUrl, setItemImgUrl] = useState("");

  return (
    <View style={{marginTop: 20}}>
            <View style={{marginHorizontal: 30}}>
                <Text style={{
                    textAlign: "center", 
                    color:"black", 
                    fontFamily:"GothamBold", 
                    fontSize: 17, 
                    paddingBottom: 10,
                }}>Add New Item</Text>

                <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 60, marginBottom: 20}} />
                <Text style={styles.Text}>Name</Text>
                <TextInput 
                    style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor:  "#D1D1D1",
                    borderRadius: 5,
                    padding: 10,
                    marginTop: 8,
                    marginBottom: 12,
                    fontFamily: 'GothamLight', 
                    fontSize: 14,
                }}
                    placeholder="Enter name here.." 
                    value={itemName}
                    onChangeText={text => setItemName(text)}
                />

                

                <Text style={styles.Text}>Price</Text>
                <TextInput 
                    style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "#D1D1D1",
                        borderRadius: 5,
                        padding: 10,
                        marginTop: 8,
                        marginBottom: 12,
                        fontFamily: 'GothamLight', 
                        fontSize: 14
                    }}
                    placeholder="694.20" 
                    value={itemPrice}
                    onChangeText={text => setItemPrice(text)}
                />

                <Text style={styles.Text}>Category</Text>
                    <TextInput 
                        style={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "#D1D1D1",
                            borderRadius: 5,
                            padding: 10,
                            marginTop: 8,
                            marginBottom: 12,
                            fontFamily: 'GothamLight', 
                            fontSize: 14
                        }}
                        placeholder="beverages" 
                        value={itemCategory}
                        onChangeText={text => setItemCategory(text)}
                />


                <Text style={styles.Text}>Image URL</Text>
                    <TextInput 
                        style={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "#D1D1D1",
                            borderRadius: 5,
                            padding: 10,
                            marginTop: 8,
                            marginBottom: 12,
                            fontFamily: 'GothamLight', 
                            fontSize: 14
                        }}
                        placeholder="http:///" 
                        value={itemImgUrl}
                        onChangeText={text => setItemImgUrl(text)}
                />


                <TouchableOpacity 
                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20}}
                    onPress={() => {
                        console.log("Add Item Button is Pressed!!");
                        let obj = {
                            name: itemName,
                            price: parseInt(itemPrice),
                            quantity: 1,
                            imgUrl: itemImgUrl
                        }   
                        AddItemButtonHandler(obj);
                    }}
                >
                    <View style={styles.button}>
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Add Item</Text>
                    </View>
                </TouchableOpacity>

                <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 90, marginTop: 20}} />

                <Text style={{color: "red", marginTop: 20, textAlign: "center", fontFamily: 'GothamMedium'}}>This will a new product to your Menu card*</Text>
                
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
